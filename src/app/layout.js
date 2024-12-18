import { Manrope } from "next/font/google";
import "./styles.css";

import StyledComponentsRegistry from "@/components/StyledComponentsRegistry";
import CheckoutProvider from "@/components/CheckoutProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Audiophile ecommerce",
  description: "Generated by create next app",
};

const manrope = Manrope({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <div id="__next">
          <StyledComponentsRegistry>
            <CheckoutProvider>
              <Header />
              {children}
              <Footer />
            </CheckoutProvider>
          </StyledComponentsRegistry>
        </div>
      </body>
    </html>
  );
}
