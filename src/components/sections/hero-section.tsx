/**
 * Hero Section
 * Main landing page hero
 */

'use client';

import Link from 'next/link';
import { ArrowRight, Zap, Shield, Coins } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection(): JSX.Element {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background py-20 md:py-32">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-tight relative z-10 space-y-8">
        {/* Main Content */}
        <div className="max-w-3xl space-y-6 animate-in">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Support Creators
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Instantly & Securely
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Send tips to your favorite creators using USDC on Stellar. Fast, transparent, and
              powered by blockchain technology.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/auth/signup">
              <Button size="lg" className="w-full sm:w-auto">
                Start Supporting
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="#features">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Learn More
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="pt-8 grid grid-cols-3 gap-4 md:gap-8">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-primary">50K+</p>
              <p className="text-sm text-muted-foreground">Active Creators</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-primary">$10M+</p>
              <p className="text-sm text-muted-foreground">Tips Sent</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-primary">100K+</p>
              <p className="text-sm text-muted-foreground">Happy Supporters</p>
            </div>
          </div>
        </div>

        {/* Feature Pills */}
        <div className="pt-12 grid md:grid-cols-3 gap-4">
          <div className="flex gap-3 items-start p-4 rounded-lg border border-border hover:bg-accent transition-smooth">
            <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-sm">Instant Payments</h3>
              <p className="text-xs text-muted-foreground">Settle in seconds</p>
            </div>
          </div>
          <div className="flex gap-3 items-start p-4 rounded-lg border border-border hover:bg-accent transition-smooth">
            <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-sm">Verified Creators</h3>
              <p className="text-xs text-muted-foreground">100% authentic</p>
            </div>
          </div>
          <div className="flex gap-3 items-start p-4 rounded-lg border border-border hover:bg-accent transition-smooth">
            <Coins className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-sm">USDC Stablecoin</h3>
              <p className="text-xs text-muted-foreground">No volatility</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
