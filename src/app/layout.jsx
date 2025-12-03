import './globals.css';
import { DM_Serif_Display, Roboto_Mono } from 'next/font/google';
import { Header, Footer } from '@/ui';
import { Providers } from '@/providers/ParallaxProvider';

const display = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
});
const roboto = Roboto_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-roboto',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${display.variable} ${roboto.variable}`}>
        <Header className="z-50" />
        <Providers>{children}</Providers>
        <Footer className="bottom-0 w-full" />
      </body>
    </html>
  );
}
