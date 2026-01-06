
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { hospitals } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export default function HospitalsPage() {
  const headerRef = useScrollAnimation<HTMLElement>();
  const filterRef = useScrollAnimation<HTMLDivElement>();
  const listRef = useScrollAnimation<HTMLDivElement>();

  return (
    <div className="container py-8 md:py-12">
      <header ref={headerRef} className="mb-8 md:mb-12 text-center anim-section">
        <h1 className="text-4xl font-bold tracking-tight font-headline">Hospital Directory</h1>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
          Find the perfect accredited medical facility for your needs from our global network.
        </p>
      </header>

      <div ref={filterRef} className="mb-8 p-4 border rounded-lg bg-card anim-section">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <Input placeholder="Search by hospital name..." className="md:col-span-2" />
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Filter by country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="india">India</SelectItem>
              <SelectItem value="thailand">Thailand</SelectItem>
              <SelectItem value="south-korea">South Korea</SelectItem>
              <SelectItem value="germany">Germany</SelectItem>
              <SelectItem value="usa">USA</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Filter by specialization" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cardiology">Cardiology</SelectItem>
              <SelectItem value="oncology">Oncology</SelectItem>
              <SelectItem value="orthopedics">Orthopedics</SelectItem>
              <SelectItem value="cosmetic-surgery">Cosmetic Surgery</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div ref={listRef} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 anim-section">
        {hospitals.map((hospital, index) => (
          <Card key={hospital.id} className="overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="relative">
              <Image
                src={hospital.imageUrl}
                alt={hospital.name}
                width={600}
                height={400}
                className="h-56 w-full object-cover"
                data-ai-hint="hospital building"
              />
              <div className="absolute top-2 right-2 flex items-center gap-1 rounded-full bg-background/80 px-2 py-1 text-sm">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <span className="font-bold">{hospital.rating}</span>
                <span className="text-muted-foreground">({hospital.reviews})</span>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-xl">{hospital.name}</CardTitle>
              <CardDescription className="flex items-center gap-2 pt-1">
                <MapPin className="h-4 w-4" />
                {hospital.city}, {hospital.country}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <p className="text-sm text-muted-foreground mb-4 flex-grow">{hospital.description.substring(0, 100)}...</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {hospital.specializations.slice(0, 3).map((spec) => (
                  <Badge key={spec} variant="secondary">{spec}</Badge>
                ))}
              </div>
              <Button asChild className="w-full mt-auto bg-accent text-accent-foreground hover:bg-accent/90 transition-transform duration-300 hover:scale-105">
                <Link href={`/hospitals/${hospital.id}`}>View Details</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
