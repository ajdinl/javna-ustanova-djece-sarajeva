import type { Metadata, Viewport } from 'next';
import { Fraunces, Manrope, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import AnnouncementBar from '@/components/AnnouncementBar';

const display = Fraunces({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-display',
  axes: ['SOFT', 'opsz'],
  display: 'swap',
});

const body = Manrope({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-body',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'JU Djeca Sarajeva — Dom mašte, smijeha i učenja',
  description:
    'Javna ustanova za predškolski odgoj i obrazovanje. Sigurno i poticajno okruženje za rast i razvoj djece u Sarajevu.',
};

export const viewport: Viewport = {
  themeColor: '#F4ECDE',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bs" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="grain relative min-h-screen bg-paper text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-ink focus:text-paper focus:px-4 focus:py-2 focus:rounded-full"
        >
          Preskoči na glavni sadržaj
        </a>
        <AnnouncementBar />
        <Nav />
        <main id="main" className="relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
