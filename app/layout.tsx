import type { Metadata } from 'next';
import 'bootstrap/dist/css/bootstrap.min.css';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from './Navbar';
// see: https://stackoverflow.com/questions/77897079/importing-bootstrap-into-nextjs-document-is-not-defined
import BootstrapProvider from './BootstrapProvider';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'SenkyokuKaigi',
  description: 'SenkyokuKaigi application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        <BootstrapProvider />
      </body>
    </html>
  );
}
