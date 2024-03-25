import { Inter } from "next/font/google";
import "../Styles/css/main.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "About Me",
  description: "This is the About Me page on my portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
