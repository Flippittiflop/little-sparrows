import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Little Sparrows Nursery School',
    description: 'Nurturing young minds in a safe and loving environment',
    icons: {
        icon: [
            { url: '/favicon.ico' },
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
            { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
            { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
        ],
        apple: [
            { url: '/apple-touch-icon.png' },
        ],
        other: [
            { url: '/safari-pinned-tab.svg', rel: 'mask-icon', color: '#00A5B8' },
        ],
    },
    manifest: '/site.webmanifest',
    themeColor: '#00A5B8',
    viewport: 'width=device-width, initial-scale=1',
    appleWebApp: {
        capable: true,
        statusBarStyle: 'default',
        title: 'Little Sparrows',
    },
    applicationName: 'Little Sparrows',
    formatDetection: {
        telephone: true,
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <head>
            <link rel="manifest" href="/site.webmanifest" />
            <meta name="msapplication-TileColor" content="#00A5B8" />
            <meta name="theme-color" content="#00A5B8" />
        </head>
        <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster />
        </body>
        </html>
    );
}
