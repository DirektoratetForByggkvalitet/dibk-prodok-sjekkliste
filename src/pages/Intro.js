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
					Denne veiviseren skal hjelpe deg som skal føre tilsyn med hvordan en byggevare brukes i et konkret
					byggeprosjekt. Du velger ut det produktet du skal undersøke og bestemmer deg for hvilke deler av produktet du
					skal føre tilsyn med. Svar på veiviseren ut ifra det. Eksempel: produkt vinduer og tilsyn med brann.
				</Primitives.Paragraphs.Lead>
				<Primitives.Paragraphs.P>
					Ved å svare på en rekke spørsmål får du svar på hva som kreves av dokumentasjon og hva som eventuelt mangler.
					Du bestemmer selv hvor “dypt” du vil gå i tilsynet, og hvilke deler av produktet du vil føre tilsyn med. Du må
					ikke svare på alt om alt.
				</Primitives.Paragraphs.P>
				<Primitives.Paragraphs.P>
					I veiviseren finner du 20 produkter. Ulike produkter har ulike krav til produktdokumentasjon. Dette henger
					blant annet sammen med om produktet er CE-merket eller ikke. Du vil derfor få ulike svaralternativer basert på
					hvilket produkt du velger.
				</Primitives.Paragraphs.P>
				<section>
					<div>
						<Primitives.Heading.H2>Før du begynner</Primitives.Heading.H2>
						<Primitives.Paragraphs.P>Bestem deg for:</Primitives.Paragraphs.P>
						<ol>
							<li>hva slags byggverk eller tekniske installasjoner du skal føre tilsyn med.</li>
							<li>hvilket produkt i byggverket eller installasjonen du skal føre tilsyn med.</li>
							<li>hvilke egenskaper ved dette produktet du skal føre tilsyn med.</li>
						</ol>
						<Primitives.Paragraphs.P>
							Etter dette ber du om produktdokumentasjon og prosjekteringsgrunnlag fra ansvarlig søker. Når du har
							mottatt denne kan du starte veiviseren.
						</Primitives.Paragraphs.P>
						<Primitives.Paragraphs.P>
							Her er en <a href="#">mal</a> for anmodning om dokumentasjon.
						</Primitives.Paragraphs.P>
					</div>
				</section>
				<Primitives.Heading.H2>Har du funnet ut det du trenger?</Primitives.Heading.H2>
				<Primitives.Paragraphs.P>
					Da er det bare å sette i gang med veiviseren! Du får hjelp til hvert spørsmål underveis.
				</Primitives.Paragraphs.P>
				<Primitives.Heading.H2>Når veiviseren er fullført</Primitives.Heading.H2>
				<Primitives.Paragraphs.P>
					Når du har fullført veiviseren får du en resultatside som du kan arkivere og bruke til å dokumentere tilsynet.
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
