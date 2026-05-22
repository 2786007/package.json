import "./globals.css";

export const metadata = {
  title: "ShreeNayraGroup",
  description: "Premium Multi Service Business Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}