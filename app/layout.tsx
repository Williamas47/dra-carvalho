import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Dra. Eduarda Carvalho | Advogada Trabalhista - Bauru/SP',
  description:
    'Dra. Eduarda Carvalho, advogada especializada em Direito Trabalhista e Previdenciário em Bauru/SP. Consultas presenciais e online. Defenda seus direitos com quem entende.',
  keywords: [
    'advogada Bauru',
    'direito trabalhista Bauru',
    'previdenciário Bauru',
    'advogada trabalhista SP',
    'consulta online advogada',
    'Dra Eduarda Carvalho',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR' className={`${geistSans.variable} h-full antialiased`}>
      <body className='min-h-full flex flex-col'>{children}</body>
    </html>
  );
}
