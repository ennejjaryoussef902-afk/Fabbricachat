'use client';
import { signIn } from "next-auth/react";

// LOGO ORIGINALE "FABBRICA" CREATO IN SVG (Nessuna immagine da caricare)
const LogoFabbrica = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: '20px' }}>
    <circle cx="50" cy="50" r="48" fill="#00a5e4" fillOpacity="0.1" stroke="#00a5e4" strokeWidth="2"/>
    <path d="M30 70V40L45 50V40L60 50V30L75 40V70H30Z" fill="#00a5e4">
      <animate attributeName="opacity" values="1;0.7;1" dur="3s" repeatCount="indefinite" />
    </path>
    <rect x="62" y="20" width="8" height="12" fill="#00a5e4">
      <animate attributeName="height" values="12;5;12" dur="2s" repeatCount="indefinite" />
    </rect>
    <circle cx="66" cy="15" r="3" fill="#00a5e4" opacity="0.6">
      <animate attributeName="cy" values="15;5" dur="2s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.6;0" dur="2s" repeatCount="indefinite" />
    </circle>
  </svg>
);

export default function LoginPage() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100dvh', // Schermo intero dinamico
      width: '100vw',
      backgroundColor: '#f0f2f5',
      margin: 0,
      padding: 0,
      fontFamily: 'sans-serif',
      overflow: 'hidden'
    }}>
      
      <div style={{
        width: '85%',
        maxWidth: '400px',
        backgroundColor: '#ffffff',
        padding: '40px 30px',
        borderRadius: '24px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        
        {/* LOGO IN CODICE (Sostituisce icona WhatsApp) */}
        <LogoFabbrica />

        <h1 style={{ fontSize: '28px', fontWeight: '800', margin: '0 0 10px 0', color: '#111b21' }}>
          Fabbricachat
        </h1>
        
        <p style={{ color: '#667781', fontSize: '16px', marginBottom: '30px' }}>
          La tua officina dei messaggi
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
          <button 
            onClick={() => signIn('google')}
            style={{
              padding: '14px',
              backgroundColor: '#ffffff',
              border: '1px solid #d1d7db',
              borderRadius: '12px',
              cursor: 'pointer',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              fontSize: '16px'
            }}
          >
            <img src="https://www.google.com/favicon.ico" width="20" alt="" />
            Entra con Google
          </button>

          <button 
            onClick={() => signIn('github')}
            style={{
              padding: '14px',
              backgroundColor: '#24292e',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '16px'
            }}
          >
            Entra con GitHub
          </button>
        </div>

        <div style={{ 
          marginTop: '30px', 
          fontSize: '13px', 
          borderTop: '1px solid #e9edef', 
          paddingTop: '20px',
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          width: '100%'
        }}>
          <a href="/privacy" style={{ color: '#00a5e4', textDecoration: 'none' }}>Privacy</a>
          <a href="/terms" style={{ color: '#00a5e4', textDecoration: 'none' }}>Termini</a>
        </div>
      </div>
    </main>
  );
}