import type { Metadata } from 'next';

import './globals.css';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Site Title',
    description: 'Site Description',
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
