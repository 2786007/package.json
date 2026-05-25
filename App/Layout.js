export const metadata = {
  title: "ShreeNayraGroup",
  description: "Premium Business Solutions",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
