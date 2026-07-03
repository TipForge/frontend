/**
 * Home Page
 * Landing page for TipForge
 */

import { Button } from '@/components/ui';

export default function Home(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="border-b border-border bg-background sticky top-0 z-40">
        <nav className="container-tight flex h-16 items-center justify-between">
          <div className="text-xl font-bold text-primary">TipForge</div>
          <div className="flex gap-4">
            <Button variant="ghost">Sign In</Button>
            <Button>Get Started</Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center bg-gradient-to-b from-primary/5 to-background">
        <div className="container-tight text-center space-y-6 py-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Support Creators Instantly
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Send tips to your favorite creators using USDC powered by Stellar. Fast, secure, and
            transparent.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button size="lg">Start Tipping</Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-background py-20">
        <div className="container-tight space-y-12">
          <div className="text-center space-y-4">
            <h2>Why TipForge?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything creators and supporters need for seamless, secure transactions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="text-3xl">⚡</div>
              <h3 className="font-semibold">Instant Transfers</h3>
              <p className="text-sm text-muted-foreground">
                Settle payments in seconds with Stellar blockchain.
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-3xl">🔒</div>
              <h3 className="font-semibold">Secure & Verified</h3>
              <p className="text-sm text-muted-foreground">
                All transactions verified for creator authenticity.
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-3xl">💰</div>
              <h3 className="font-semibold">USDC Stablecoin</h3>
              <p className="text-sm text-muted-foreground">
                Stable, predictable value without volatility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/50 py-8 mt-auto">
        <div className="container-tight flex justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2024 TipForge. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
