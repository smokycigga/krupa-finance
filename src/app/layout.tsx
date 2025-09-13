import React from 'react';
import '../styles/index.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: 'Krupa Finance | Supply Chain Financing & Home Loans (DSA)',
  description: "Krupa Finance is an advisor specializing in supply chain financing and home loans. We operate solely as a Direct Selling Agent (DSA). We do not provide investment, wealth management, or securities-related services. All loan approvals and terms are subject to the respective financial institutions' policies.",
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
  },
  openGraph: {
    title: 'Krupa Finance | Supply Chain Financing & Home Loans (DSA)',
    description: "Krupa Finance is an advisor specializing in supply chain financing and home loans. We operate solely as a Direct Selling Agent (DSA). We do not provide investment, wealth management, or securities-related services. All loan approvals and terms are subject to the respective financial institutions' policies.",
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Krupa Finance | Supply Chain Financing & Home Loans (DSA)',
    description: "Krupa Finance is an advisor specializing in supply chain financing and home loans. We operate solely as a Direct Selling Agent (DSA). We do not provide investment, wealth management, or securities-related services. All loan approvals and terms are subject to the respective financial institutions' policies."
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body>
        {children}
        <script type="module" src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fdibakarsam5618back.builtwithrocket.new&_be=https%3A%2F%2Fapplication.rocket.new&_v=0.1.8"></script>
      </body>
    </html>
  );
}
