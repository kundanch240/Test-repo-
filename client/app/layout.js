import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from '@/context/AuthContext'
import { ProductProvider } from '@/context/ProductContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TrendVibe Store - Trendy Gadgets & Lifestyle Products',
  description: 'Discover the latest trendy gadgets, accessories, and lifestyle products at TrendVibe Store. Fast shipping, great prices, and exceptional quality.',
  keywords: 'trendy gadgets, accessories, lifestyle products, e-commerce, dropshipping',
  authors: [{ name: 'TrendVibe Store' }],
  openGraph: {
    title: 'TrendVibe Store - Trendy Gadgets & Lifestyle Products',
    description: 'Discover the latest trendy gadgets, accessories, and lifestyle products at TrendVibe Store.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TrendVibe Store - Trendy Gadgets & Lifestyle Products',
    description: 'Discover the latest trendy gadgets, accessories, and lifestyle products at TrendVibe Store.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <ProductProvider>
            <Navbar />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
            <WhatsAppButton />
            <Toaster 
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: '#363636',
                  color: '#fff',
                },
                success: {
                  duration: 3000,
                  iconTheme: {
                    primary: '#4ade80',
                    secondary: '#fff',
                  },
                },
                error: {
                  duration: 5000,
                  iconTheme: {
                    primary: '#ef4444',
                    secondary: '#fff',
                  },
                },
              }}
            />
          </ProductProvider>
        </AuthProvider>
      </body>
    </html>
  )
}