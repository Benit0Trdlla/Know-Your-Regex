import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from 'sonner'
import { Suspense } from 'react';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
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
        <SidebarProvider defaultOpen={false}>
          <AppSidebar className="relative z-10"/>
          <NuqsAdapter>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {/* <SidebarTrigger /> */}
              <div className='flex flex-1 justify-center items-center sm:absolute sm:left-[30%] md:left-[35%] z-0 overflow-hidden'>
                {children}
              </div>
              <Toaster closeButton richColors />
            </ThemeProvider>
          </NuqsAdapter>
        </SidebarProvider>
      </body>
    </html>
  );
}
