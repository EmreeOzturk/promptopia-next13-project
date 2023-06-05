import '@/styles/global.css';
import { Metadata } from 'next';
import Nav from '@/components/layout/Nav';
import Provider from '@/components/common/Provider';
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
        <Provider >
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
