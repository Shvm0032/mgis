// layout.js (Server Component)
import './globals.css';
import { Poppins } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Loader from '@/components/Loader'; // client component

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'Mahatma Gandhi International School',
  description: '',
  icons: {
    icon: '/Assets/logo/android.png',
    shortcut: '/favicon.ico',
    apple: '/Assets/logo/apple-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* Loader as Client Component */}
        <Loader />

        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
