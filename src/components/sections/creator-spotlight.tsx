/**
 * Creator Spotlight Section
 * Featured creators showcase
 */

import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/shared/avatar';
import { Heart } from 'lucide-react';

const spotlightCreators = [
  {
    id: '1',
    username: 'musicproducer_alex',
    displayName: 'Alex Music Studio',
    bio: 'Electronic music producer & educator',
    avatar: '🎵',
    verified: true,
    totalTips: 1250,
    tipsCount: 342,
  },
  {
    id: '2',
    username: 'designstudio_pro',
    displayName: 'Creative Design Co',
    bio: 'UI/UX design tutorials and resources',
    avatar: '🎨',
    verified: true,
    totalTips: 980,
    tipsCount: 287,
  },
  {
    id: '3',
    username: 'tech_educator_sam',
    displayName: 'Sam Tech Academy',
    bio: 'Web development & programming courses',
    avatar: '💻',
    verified: true,
    totalTips: 1450,
    tipsCount: 456,
  },
  {
    id: '4',
    username: 'fitness_coach_maria',
    displayName: 'Maria Fitness Hub',
    bio: 'Fitness training and wellness coaching',
    avatar: '💪',
    verified: true,
    totalTips: 750,
    tipsCount: 198,
  },
];

export function CreatorSpotlightSection(): JSX.Element {
  return (
    <section id="creators" className="py-20 md:py-32 bg-muted/30">
      <div className="container-tight space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Creators</h2>
          <p className="text-lg text-muted-foreground">
            Support amazing creators building great content
          </p>
        </div>

        {/* Creators Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {spotlightCreators.map((creator) => (
            <Link key={creator.id} href={`/creator/${creator.username}`}>
              <div className="group rounded-lg border border-border bg-background p-6 hover:border-primary hover:shadow-lg transition-smooth cursor-pointer h-full flex flex-col gap-4">
                {/* Creator Info */}
                <div className="flex items-start justify-between">
                  <Avatar alt={creator.displayName} fallback={creator.avatar} size="lg" />
                  {creator.verified && (
                    <Badge className="bg-success/10 text-success">Verified</Badge>
                  )}
                </div>

                {/* Name & Bio */}
                <div className="space-y-1 flex-1">
                  <h3 className="font-semibold group-hover:text-primary transition-smooth">
                    {creator.displayName}
                  </h3>
                  <p className="text-xs text-muted-foreground">@{creator.username}</p>
                  <p className="text-sm text-muted-foreground pt-2">{creator.bio}</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                  <div>
                    <p className="text-xl font-bold text-primary">${creator.totalTips}</p>
                    <p className="text-xs text-muted-foreground">Total Tips</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-primary">{creator.tipsCount}</p>
                    <p className="text-xs text-muted-foreground">Supporters</p>
                  </div>
                </div>

                {/* CTA */}
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Send Tip
                </Button>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-8">
          <Link href="/explore">
            <Button size="lg" variant="outline">
              Explore All Creators
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
