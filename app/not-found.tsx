'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <h1 className="font-typewriter text-6xl md:text-8xl mb-4 text-primary">404</h1>
        <h2 className="font-typewriter text-2xl md:text-3xl mb-4 text-foreground">
          PAGE NOT FOUND
        </h2>
        <p className="font-serif text-base md:text-lg text-muted-foreground mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/">
          <Button size="lg" className="font-typewriter">
            <Home className="mr-2 h-4 w-4" />
            RETURN HOME
          </Button>
        </Link>
      </div>
    </div>
  );
}
