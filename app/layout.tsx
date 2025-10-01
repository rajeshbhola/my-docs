import '@/app/global.css';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { Inter } from 'next/font/google';
import { source } from '@/lib/source';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          search={{
            links: source.getPages().map((page) => ({
              id: page.url,
              title: page.data.title,
              description: page.data.description,
              url: page.url,
            })),
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
