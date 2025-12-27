// src/app/page.tsx (o src/app/login/page.tsx)

export default function LoginPage() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center', // Centra verticalmente
      alignItems: 'center',     // Centra orizzontalmente
      minHeight: '100vh',       // Occupa tutta l'altezza dello schermo del telefono
      width: '100%',
      padding: '20px',
      backgroundColor: '#f4f7f6', // Colore di sfondo leggero
      margin: 0
    }}>
      <div style={{
        textAlign: 'center',
        padding: '40px 30px',
        borderRadius: '16px',
        backgroundColor: '#ffffff',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '380px', // Dimensione ideale sia per Mobile che Desktop
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}>
        <h1 style={{ 
          fontSize: '2rem', 
          margin: 0, 
          color: '#333',
          fontWeight: 'bold' 
        }}>
          Fabbricachat
        </h1>
        
        <p style={{ color: '#666', marginBottom: '10px' }}>
          Effettua l'accesso per continuare
        </p>

        {/* Pulsante di Login */}
        <button style={{
          padding: '12px',
          fontSize: '1rem',
          fontWeight: '600',
          color: '#fff',
          backgroundColor: '#4285F4', // Blu ufficiale Google
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          transition: 'background-color 0.2s'
        }}>
          {/* Sostituisci questo con la tua funzione di login (es. onClick={() => signIn('google')}) */}
          Accedi con Google
        </button>

        <div style={{ marginTop: '10px', fontSize: '0.8rem' }}>
          <a href="/privacy" style={{ color: '#999', textDecoration: 'none', marginRight: '15px' }}>Privacy</a>
          <a href="/terms" style={{ color: '#999', textDecoration: 'none' }}>Termini</a>
        </div>
      </div>
    </main>
  );
}