import { Poppins } from "next/font/google";
import "./globals.css";
import { Header, Footer, Providers } from "@Components";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Blog Website",
  description: "Next.js Blog website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
