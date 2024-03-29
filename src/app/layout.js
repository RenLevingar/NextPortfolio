// import { Inter } from "next/font/google";
import { Roboto } from "next/font/google"
import "../Styles/css/main.css";

const roboto = Roboto({ weight: '400', subsets: ["latin"], display: 'swap', });

export const metadata = {
  title: "About Me",
  description: "This is the About Me page on my portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
