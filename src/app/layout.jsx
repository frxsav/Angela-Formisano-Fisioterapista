import './globals.css';
import CspNonceProvider from '@/providers/CspNonceProvider';
// import { Spectral } from 'next/font/google';
// import { Header, Footer } from '@/ui';
// import { Providers } from '@/providers/ParallaxProvider';
// import { headers } from 'next/headers';

// const spectral = Spectral({
//   subsets: ['latin'],
//   weight: ['300'],
//   variable: '--font-spectral',
// });

export default function RootLayout({ children }) {
  return (
    <CspNonceProvider>{children}</CspNonceProvider>
    // <html lang="en" nonce={nonce} suppressHydrationWarning>
    //   <body className={`${spectral.variable}`}>
    //     <Header className="z-50" />
    //     <Providers>{children}</Providers>
    //     <Footer className="bottom-0 w-full" />
    //   </body>
    // </html>
  );
}
