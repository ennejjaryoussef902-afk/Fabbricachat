// src/app/page.tsx
'use client';
import { signIn } from "next-auth/react";

// Logo originale Fabbricachat in SVG animato
const LogoFabbrica = () => (
  <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: '10px' }}>
    <circle cx="50" cy="50" r="48" fill="#00a5e4" fillOpacity="0.1" stroke="#00a5e4" strokeWidth="2"/>
    <path d="M30 70V40L45 50V40L60 50V30L75 40V70H30Z" fill="#00a5e4">
      <animate attributeName="opacity" values="1;0.6;1" dur="3s" repeatCount="indefinite" />
    </path>
    <rect x="62" y="20" width="8" height="12" fill="#00a5e4">
      <animate attributeName="height" values="12;5;12" dur="2s" repeatCount="indefinite" />
    </rect>
  </svg>
);

export default function LoginPage() {
  return (
    <main style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100dvh', // Schermo intero reale
      width: '100vw',
      margin: 0,
      padding: 0,
      fontFamily: 'sans-serif'
    }}>
      <div style={{
        width: '90%',
        maxWidth: '400px',
        backgroundColor: '#ffffff',
        padding: '40px 30px',
        borderRadius: '24px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        
        {/* Nuovo Logo Animato */}
        <LogoFabbrica />

        <h1 style={{ fontSize: '26px', fontWeight: 'bold', margin: '10px 0', color: '#111b21' }}>
          Fabbricachat
        </h1>
        
        <p style={{ color: '#667781', fontSize: '15px', marginBottom: '30px' }}>
          La tua officina dei messaggi
        </p>

        {/* Pulsanti Login */}
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
              gap: '10px',
              fontSize: '16px'
            }}
          >
            <img src="https://www.google.com/favicon.ico" width="18" alt="" />
            Continua con Google
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
            Continua con GitHub
          </button>
        </div>

        {/* Footer Pulito (Senza riferimenti a WhatsApp Clone) */}
        <div style={{ 
          marginTop: '30px', 
          borderTop: '1px solid #f0f2f5', 
          paddingTop: '20px', 
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          fontSize: '13px'
        }}>
          <a href="/privacy" style={{ color: '#00a5e4', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="/terms" style={{ color: '#00a5e4', textDecoration: 'none' }}>Terms</a>
        </div>
      </div>
    </main>
  );
}