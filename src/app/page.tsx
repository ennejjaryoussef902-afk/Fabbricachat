export default function LoginPage() {
  return (
    // Questo è il contenitore principale che centra tutto
    <div style={{
      display: 'flex',
      justifyContent: 'center', // Centra in orizzontale
      alignItems: 'center',     // Centra in verticale
      minHeight: '100vh',       // Occupa il 100% dell'altezza dello schermo
      width: '100vw',           // Occupa tutta la larghezza
      backgroundColor: '#f0f2f5', // Colore di sfondo leggero tipo WhatsApp
      margin: 0,
      padding: '20px'
    }}>
      
      {/* Questo è il tuo box bianco del "Sign in" */}
      <div style={{
        width: '100%',
        maxWidth: '450px',      // Larghezza massima del box
        backgroundColor: '#fff',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        textAlign: 'center'
      }}>
        
        {/* Inserisci qui il resto del tuo codice (Logo, Form, Pulsanti Google/GitHub) */}
        <h2 style={{ marginBottom: '20px' }}>Sign in</h2>
        
        {/* ... il tuo form attuale ... */}
        
      </div>
    </div>
  );
}