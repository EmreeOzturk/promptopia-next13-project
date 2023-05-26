import '@/styles/global.css';
import { Metadata } from 'next';
import Nav from '@/components/layout/Nav';
export const metadata: Metadata = {
  title: 'Promptopia App',
  description: 'Discover the best AI prompts and share your own! ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
