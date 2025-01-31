'use client';

import { Provider } from 'react-redux';
import store from '@/store/store';
import { Montserrat, Open_Sans, Poppins } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"], 
  weight: ["400", "500"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${poppins.variable} ${openSans.variable} antialiased`}
      >
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
