import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Primitives } from 'losen';
import { IntroMain } from '../primitives/IntroMain';

function Intro({ close, data: { $computed, ...data } }) {
  if (Object.keys(data).length > 0) {
    close();
  }
  return (
    <Primitives.Wizard>
      <IntroMain>
        <Primitives.Heading.H1>Produktdokumentasjon</Primitives.Heading.H1>
        <Primitives.Paragraphs.Lead>
          Denne veiviseren hjelper deg med å finne kravene for å kunne omsette en byggevare. Svar på spørsmålene for å
          finne ut om dokumentasjonen er i orden, eller om det er noe som mangler.
        </Primitives.Paragraphs.Lead>
        <Primitives.Paragraphs.P>
          Veiviseren er laget for alle produsenter, importører og distributører av byggevarer i Norge.
        </Primitives.Paragraphs.P>
        <Primitives.Paragraphs.P>
          I veiviseren har vi valgt ut 20 produkter. Disse produktene får direktoratet ofte spørsmål om. Den er
          imidlertid ikke uttømmende. Gi oss innspill til produkter vi kan lage nye sjekklister for på{' '}
          <a href="mailto:post@dibk.no">post@dibk.no</a>.
        </Primitives.Paragraphs.P>
        <Primitives.Button.MainButton type="button" onClick={() => close()}>
          Start veiviseren
        </Primitives.Button.MainButton>
      </IntroMain>
    </Primitives.Wizard>
  );
}

Intro.propTypes = {
  close: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default connect(state => ({ data: state['@WIZARD_STATE'] }))(Intro);
