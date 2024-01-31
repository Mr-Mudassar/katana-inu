import Header from "@/components/header";
import Footer from "@/components/footer/footer";
import FooterLowerPart from "@/components/footer/footer-lower-part";
import "./globals.css";

export const metadata = {
  title: "Katana inu",
  description: "A gaming platform website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body className="bg-Background ">
        <Header />
        {children}
        <Footer />
        <FooterLowerPart/>
      </body>
    </html>
  );
}
