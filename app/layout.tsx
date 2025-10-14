import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: "Sharath Devadiga - Full Stack Developer",
  description: 'Full Stack Developer Portfolio',
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head><link rel='icon'  href='/favicon.png' /></head>
      <body>
        <TooltipProvider>
          {children}
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </body>
      
    </html>
  );
}
