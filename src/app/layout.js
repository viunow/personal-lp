import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
});

export const metadata = {
  title: '@viniciusneto',
  description: "I'm Vinicius and i'm a web developer."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
