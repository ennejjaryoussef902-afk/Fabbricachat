// src/app/layout.tsx
import { ReactNode } from "react";

export const metadata = {
  title: 'Fabbricachat',
  description: 'La tua officina dei messaggi',
  icons: {
    // Questo sostituisce l'icona di WhatsApp nella scheda del browser con il logo blu
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="48" fill="%2300a5e4" opacity="0.2"/><path d="M30 70V40L45 50V40L60 50V30L75 40V70H30Z" fill="%2300a5e4"/></svg>',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="it">
      <body style={{ 
        margin: 0, 
        padding: 0, 
        width: '100vw', 
        height: '100dvh', 
        overflow: 'hidden', 
        backgroundColor: '#f0f2f5' 
      }}>
        {children}
      </body>
    </html>
  );
}