// middleware.js
import { NextResponse } from 'next/server';
import { randomBytes } from 'crypto';

// Funzione per generare il nonce
function generateNonce() {
  return randomBytes(16).toString('base64');
}

export function middleware(request) {
  const nonce = generateNonce();
  const response = NextResponse.next();
  
  // 1. Definisci la tua CSP con le direttive aggiornate e il nonce
  // Nota: Aggiungi qui anche le tue whitelist per i domini esterni (es. Google Fonts)
  const csp = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' https://cdn.example.com; 
    style-src 'self' 'nonce-${nonce}' https://fonts.googleapis.com;
    img-src 'self' blob: data: https:;
    font-src 'self' data: https://fonts.gstatic.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
    require-trusted-types-for 'script'; 
  `;

  // 2. Imposta l'header CSP
  response.headers.set(
    'Content-Security-Policy',
    csp.replace(/\s{2,}/g, ' ').trim()
  );
  
  // 3. Passa il nonce alla richiesta per renderlo disponibile ai componenti React
  response.headers.set('x-nonce', nonce); 

  return response;
}

export const config = {
  // Applica a tutte le richieste, escludendo le chiamate API interne e file statici.
  matcher: [
    '/',
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};