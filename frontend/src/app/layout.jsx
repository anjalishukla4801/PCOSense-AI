import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PCOSense AI | Your Women's Health Companion",
  description: "Early awareness, guidance, and personalized support for women affected by PCOS.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col relative pt-20">
          <AuthProvider>
            <Navigation />
            <ProtectedRoute>
              <main className="flex-1">
                {children}
              </main>
            </ProtectedRoute>
            <Footer />
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
