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
    icon: '/favicon.ico',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Loader />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
