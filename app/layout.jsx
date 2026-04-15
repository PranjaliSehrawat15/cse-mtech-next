import "./globals.scss";

export const metadata = {
  title: "KIET Group of Institutions | Official Website",
  description: "Official website for the KIET Group of Institutions providing technical education.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
