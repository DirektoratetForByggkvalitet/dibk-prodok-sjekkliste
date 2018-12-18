import { state, dsl } from 'losen';
import find from 'lodash.find';

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
        const ceValgfri = dsl.parse(schema.computed.ceValgfri)({
            ...action.payload, 
            produktType
        }).valid

        return next({
            ...action,
            payload: {
                ...action.payload || {},
                [state.NAME]: {
                    $computed: {
                        ...action.payload[state.NAME].$computed || {},
                        
                        // override ceValgfri
                        ceValgfri
                    },

                    // set produktType
                    produktType,
                    
                    // set page based on ceValgfri and produktType
                    page: (
                        !ceValgfri
                        ? 'ytelseserklæring'
                        : 'byggevareOgProdukter'
                    )
                }
            }
        });
    }
}