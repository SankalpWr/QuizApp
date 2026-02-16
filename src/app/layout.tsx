import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Changed to Inter
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

const inter = Inter({ subsets: ["latin"] }); // Initialize Inter

export const metadata: Metadata = {
  title: "Quiz App",
  description: "A full-stack quiz application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}> {/* Use Inter class */}
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>

    </html>
  );
}
