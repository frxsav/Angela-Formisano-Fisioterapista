// Questo DEVE essere un Server Component per chiamare headers()
import { headers } from 'next/headers';
import { Spectral } from 'next/font/google';
import { Header, Footer } from '@/ui';
import { Providers } from '@/providers/ParallaxProvider';

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['300'],
  variable: '--font-spectral',
});

export default function CspNonceProvider({ children }) {
  // Funzione chiamata nel contesto lato server
  const nonce = headers().get('x-nonce') || undefined;

  return (
    // Passiamo il nonce al tag html
    <html lang="en" nonce={nonce} suppressHydrationWarning>
      <body className={`${spectral.variable}`}>
        <Header className="z-50" />
        <Providers>{children}</Providers>
        <Footer className="bottom-0 w-full" />
      </body>
    </html>
  );
}
