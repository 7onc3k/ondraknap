import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Ondrej Knap - Finanční Poradenství",
  description: "Profesionální finanční služby pro vaše potřeby",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <header className="py-4 px-6">
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Ondrej Knap</h1>
            <ul className="flex space-x-4">
              <li><a href="/" className="hover:text-blue-400">Domů</a></li>
              <li><a href="/o-mne" className="hover:text-blue-400">O mně</a></li>
              <li><a href="/sluzby" className="hover:text-blue-400">Služby</a></li>
              <li><a href="/blog" className="hover:text-blue-400">Blog</a></li>
              <li><a href="/kontakt" className="hover:text-blue-400">Kontakt</a></li>
            </ul>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              Začněme
            </button>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-800 p-4 mt-8">
          <div className="container mx-auto text-center text-gray-300">
            <p>&copy; 2024 Ondrej Knap. Všechna práva vyhrazena.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}