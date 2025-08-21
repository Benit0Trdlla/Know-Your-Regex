import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from 'sonner'
import { Suspense } from 'react';
import "./globals.css";

export const metadata = {
  title: "Know Your Regex",
  description: "Assistant AI for Regex",
  icons: {
    icon: '/regex.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <Suspense fallback={<div>loading...</div>}>

          <NuqsAdapter>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <Toaster closeButton richColors />
            </ThemeProvider>
          </NuqsAdapter>

        </Suspense>
      </body>
    </html>
  );
}
