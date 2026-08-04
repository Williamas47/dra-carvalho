import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import Script from 'next/script';
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
      <body className='min-h-full flex flex-col'>
        {children}
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=AW-1037137125'
          strategy='afterInteractive'
        />
        <Script id='google-tag' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-1037137125');
          `}
        </Script>
        <Script id='meta-pixel' strategy='afterInteractive'>
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1406562841539190');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height='1'
            width='1'
            style={{ display: 'none' }}
            src='https://www.facebook.com/tr?id=1406562841539190&ev=PageView&noscript=1'
            alt=''
          />
        </noscript>
      </body>
    </html>
  );
}
