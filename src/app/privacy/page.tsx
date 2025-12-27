export default function PrivacyPage() {
	return (
		<div
			style={{
				padding: "40px",
				maxWidth: "800px",
				margin: "0 auto",
				fontFamily: "sans-serif",
				lineHeight: "1.6",
			}}>
			<h1>Informativa sulla Privacy di Fabbricachat</h1>
			<p>
				<strong>Ultimo aggiornamento:</strong> 27 Dicembre 2025
			</p>

			<h3>1. Dati Raccolti</h3>
			<p>
				Fabbricachat utilizza l'autenticazione Google OAuth. Raccogliamo esclusivamente il tuo nome, indirizzo
				email e immagine del profilo forniti da Google per creare il tuo account di chat.
			</p>

			<h3>2. Utilizzo dei Dati</h3>
			<p>
				I tuoi dati vengono utilizzati solo per permetterti di inviare messaggi e farti riconoscere dagli altri
				utenti della piattaforma. Non vendiamo né condividiamo i tuoi dati con terze parti.
			</p>

			<h3>3. Sicurezza</h3>
			<p>
				Utilizziamo tecnologie sicure per proteggere i tuoi messaggi e i dati del tuo profilo. I dati sono
				conservati su database protetti.
			</p>

			<hr style={{ margin: "40px 0" }} />
			<a href="/">← Torna alla Homepage</a>
		</div>
	);
}
