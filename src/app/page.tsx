// src/app/page.tsx
'use client';
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center', // Centra il box in verticale
      alignItems: 'center',     // Centra il box in orizzontale
      height: '100dvh',         // Prende tutta l'altezza dello schermo disponibile
      width: '100vw',
      margin: 0,
      padding: 0,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      
      {/* Box Bianco del Sign In */}
      <div style={{
        width: '85%',
        maxWidth: '400px',
        backgroundColor: '#ffffff',
        padding: '40px 30px',
        borderRadius: '24px', // Bordi più arrotondati e moderni
        boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}>
        
        {/* Logo Icona simile a WhatsApp */}
        <div style={{ fontSize: '55px', marginBottom: '5px' }}>🟢</div>

        <h1 style={{ fontSize: '28px', fontWeight: '800', margin: 0, color: '#111b21' }}>
          Sign in
        </h1>
        
        <p style={{ color: '#667781', fontSize: '16px', marginBottom: '10px' }}>
          Accedi per entrare nella Fabbricachat
        </p>

        {/* Pulsante Google (Primario) */}
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
            fontSize: '16px',
            transition: 'background-color 0.2s'
          }}
        >
          <img src="https://www.google.com/favicon.ico" width="20" alt="" />
          Continua con Google
        </button>

        {/* Pulsante GitHub (Secondario) */}
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

        {/* Footer con Link Legali (Necessari per la verifica Google) */}
        <div style={{ 
          marginTop: '15px', 
          fontSize: '13px', 
          borderTop: '1px solid #e9edef', 
          paddingTop: '20px',
          display: 'flex',
          justifyContent: 'center',
          gap: '25px'
        }}>
          <a href="/privacy" style={{ color: '#008069', textDecoration: 'none', fontWeight: '500' }}>Privacy Policy</a>
          <a href="/terms" style={{ color: '#008069', textDecoration: 'none', fontWeight: '500' }}>Terms of Service</a>
        </div>
      </div>
    </main>
  );
}