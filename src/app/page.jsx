'use client';

import Head from 'next/head';
import {
  Hero,
  ServiziSection,
  AboutSection,
  Reviews,
  Faq,
  ContattiSection,
} from '@/ui';
import { useState, useEffect } from 'react';

export default function Home() {
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    setTheme(localTheme);
  });
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home page description" />
        <meta property="og:title" content="og title" />
        <meta property="og:description" content="og description" />
        <meta property="og:image" content="og-image.jpg" />
      </Head>
      <main className="font-title">
        <Hero />
        <ServiziSection />
        <AboutSection />
        <Reviews />
        <Faq />
        <ContattiSection />
      </main>
    </div>
  );
}
