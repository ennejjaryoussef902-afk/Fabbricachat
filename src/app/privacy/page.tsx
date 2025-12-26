import React from "react";

const PrivacyPage = () => {
  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif", lineHeight: "1.6" }}>
      <h1>Informativa sulla Privacy di Fabbricachat</h1>
      <p>Ultimo aggiornamento: 27 Dicembre 2025</p>
      
      <h2>1. Dati Raccolti</h2>
      <p>
        Fabbricachat utilizza l'autenticazione Google OAuth. Raccogliamo esclusivamente il tuo nome, 
        indirizzo email e immagine del profilo forniti da Google per creare il tuo account di chat.
      </p>

      <h2>2. Utilizzo dei Dati</h2>
      <p>
        I tuoi dati vengono utilizzati solo per permetterti di inviare messaggi e farti riconoscere 
        dagli altri utenti della piattaforma. Non vendiamo né condividiamo i tuoi dati con terze parti.
      </p>

      <h2>3. Sicurezza</h2>
      <p>
        Utilizziamo tecnologie sicure per proteggere i tuoi messaggi e i dati del tuo profilo.
      </p>
      
      <p>
        <a href="/">Torna alla Homepage</a>
      </p>
    </div>
  );
};

export default PrivacyPage;