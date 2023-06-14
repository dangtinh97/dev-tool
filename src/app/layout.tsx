import React from "react";
import "../../public/css/globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="md:container md:mx-auto">{children}</body>
    </html>
  );
}
