import { state, dsl } from 'losen';
import get from 'lodash.get';

import schema from '../api/prodok-sjekkliste.json';

/**
 * Redux middleware for getting the produktType from the hash and
 */
export default function handleDeeplink({ getState }) {
  return next => action => {
    if (action.type !== 'persist/REHYDRATE') {
      return next(action);
    }

    const [, produktType] = (window.location.hash.match(/^#produktType:(\w+)/) || [])

    // Do nothing unless we have a produktType in the hash
    if (!produktType) {
      return next(action);
    }

    // Calculate the ceValgfri based on the state + specified produktType
    const ceValgfri = dsl.default(schema.computed.ceValgfri)({
      ...action.payload,
      produktType
    }).valid

    // set page based on ceValgfri and produktType
    const page = (ceValgfri || produktType === 'annet')
      ? 'byggevareOgProdukter'
      : 'ytelseserklæring';

    return next({
      ...action,
      payload: {
        ...action.payload || {},
        [state.NAME]: {
          $computed: {
            ...get(action, ['payload', state.NAME, '$computed'], {}),

            // override ceValgfri
            ceValgfri,
          },

          // set produktType
          produktType,

          $external: {
            enteredFromMagicLink: true,
          },

          // set page
          page
        }
      }
    });
  }
}
