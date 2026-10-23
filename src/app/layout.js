import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { BookingProvider } from "@/context/BookingContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FloatingActions from "@/components/FloatingActions";
import PageLoader from "@/components/PageLoader";

export const metadata = {
  title: "Dwarkesh Riksha | Dwarka & Somnath Darshan Tour Service",
  description:
    "Official website of Dwarkesh Riksha & Tour Service (Teen Batti Chowk, Dwarka). Complete Dwarka Darshan (8 sacred places) & Somnath Darshan coastal tour. Direct WhatsApp booking & fixed rates.",
  keywords: [
    "Dwarkesh Riksha",
    "Dwarka Darshan Auto Riksha",
    "Ashokbhai Chavda Dwarka",
    "Teen Batti Chowk Dwarka Riksha",
    "Dwarka Darshan Tour Package",
    "Somnath Darshan Riksha",
    "Nageshwar Bet Dwarka Auto Tour",
    "Shivrajpur Beach Rickshaw Dwarka",
  ],
  authors: [{ name: "Ashokbhai Chavda - Dwarkesh Riksha" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <BookingProvider>
            <PageLoader />
            <Navbar />
            <main style={{ minHeight: "80vh" }}>{children}</main>
            <Footer />
            <BookingModal />
            <FloatingActions />
          </BookingProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
