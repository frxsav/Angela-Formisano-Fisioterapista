import './globals.css';
import { Cardo } from 'next/font/google';
import { Header, Footer } from '@/ui';
import { Providers } from '@/providers/ParallaxProvider';

const cardo = Cardo({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-cardo',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${cardo.variable}`}>
        <Header className="z-50" />
        <Providers>{children}</Providers>
        <Footer className="bottom-0 w-full" />
      </body>
    </html>
  );
}
