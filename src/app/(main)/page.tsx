
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import * as LucideIcons from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { hospitals, specialties } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { NeedHelpForm } from '@/components/need-help-form';
import Autoplay from "embla-carousel-autoplay";
import { ScrollArea } from '@/components/ui/scroll-area';
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import type { JourneyStep } from '@/lib/types';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';


const processSteps = [
  { title: 'Provide Us Reports', description: "Share your medical reports with us. Our team will review them to understand your needs.", imageHint: 'medical records' },
  { title: 'Get Medical Opinions', description: "Receive expert opinions from top specialists tailored to your condition.", imageHint: 'doctor consultation' },
  { title: 'Pre-Arrival Arrangements', description: "We handle all travel logistics, including flights and accommodations.", imageHint: 'travel planning' },
  { title: 'Visa Support', description: "Our team provides complete assistance to secure your medical visa.", imageHint: 'passport visa' },
  { title: 'Assistance in Treatments', description: "Get continuous support during your hospital stay and treatment.", imageHint: 'hospital care' },
  { title: 'Fly back and Follow Up', description: "We ensure a smooth journey home and coordinate your follow-up care.", imageHint: 'patient recovery' },
];

const journeySteps: JourneyStep[] = [
    {
      week: 1,
      title: 'Initial Consultation & Planning',
      description: 'Consult with top UK and Indian doctors who will review your case and create a tailored treatment plan. We handle all pre-travel arrangements, ensuring a smooth start.',
      imageHint: 'doctor discussion',
    },
    {
      week: 4,
      title: 'Arrival & Hospital Admission',
      description: 'Upon arrival in India, you will be comfortably settled in your chosen accommodation. We manage your seamless admission into one of our world-class partner hospitals.',
      imageHint: 'doctors talking',
    },
    {
      week: 5,
      title: 'Treatment & Care',
      description: 'Receive your planned medical treatment from leading specialists. Our team provides continuous support, ensuring your comfort and well-being throughout your stay.',
      imageHint: 'hospital care',
    },
    {
      week: 7,
      title: 'Recovery & Follow-Up',
      description: 'After your successful treatment, we monitor your recovery and coordinate with your doctors for follow-up care, ensuring a safe and complete return to health.',
      imageHint: 'smiling patient',
    },
];

const stats = [
    { value: '400+', label: 'Experienced Doctors in India' },
    { value: '800+', label: 'Best Hospitals in India & Worldwide' },
    { value: '4500+', label: 'International Patients Treated Successfully' },
];

const blogPosts = [
    { date: '09 Oct 2025', title: 'Cancer Treatment in India: Advanced Care, Cost, and Top Hospitals', imageHint: 'cancer treatment' },
    { date: '04 Oct 2025', title: 'Best Bone Marrow Transplant (BMT) Hospital in India', imageHint: 'hospital interior' },
    { date: '02 Oct 2025', title: 'Best Brain Tumor Treatment Hospitals in India: Comprehensive Guide', imageHint: 'brain scan' },
    { date: '16 Sep 2025', title: 'Best Scoliosis Treatment in India: Guide for International Patients', imageHint: 'spine x-ray' },
]

// Helper to get Lucide icon component by name
const getIcon = (name: string) => {
    const Icon = (LucideIcons as any)[name];
    if (Icon) {
        return <Icon className="w-8 h-8 text-primary" />;
    }
    return <LucideIcons.HelpCircle className="w-8 h-8 text-primary" />; // Fallback icon
};

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-image');
  const championsImage = PlaceHolderImages.find(img => img.imageHint === 'smiling patient');
  const specialtiesImage = PlaceHolderImages.find(img => img.imageHint === 'smiling patient');
  const journeyTimelineRef = useScrollAnimation<HTMLDivElement>();

  const [activeStep, setActiveStep] = useState(0);
  const activeStepData = processSteps[activeStep];
  const activeStepImage = PlaceHolderImages.find(p => p.imageHint === activeStepData.imageHint);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const videoScale = 1 + scrollY / 1000;
  const titleTranslateY = -scrollY * 1.2;

  const treatmentsRef = useScrollAnimation<HTMLElement>();
  const journeyRef = useScrollAnimation<HTMLElement>();
  const championsRef = useScrollAnimation<HTMLElement>();
  const hospitalsRef = useScrollAnimation<HTMLElement>();
  const whyChooseUsRef = useScrollAnimation<HTMLElement>();
  const storiesRef = useScrollAnimation<HTMLElement>();
  const blogsRef = useScrollAnimation<HTMLElement>();
  const formRef = useScrollAnimation<HTMLElement>();
  const specialtiesListRef = useScrollAnimation<HTMLDivElement>();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center text-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full z-0 transition-transform duration-200 ease-out"
          style={{ transform: `scale(${videoScale})` }}
        >
          <Carousel
            className="absolute inset-0 w-full h-full"
            plugins={[
              Autoplay({
                delay: 5000,
                stopOnInteraction: false,
              }),
            ]}
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              <CarouselItem>
                <div className="h-screen w-full">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="/vd3.mp4" type="video/mp4" />
                  </video>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="h-screen w-full">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="/vd2.mp4" type="video/mp4" />
                  </video>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>

        <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-black/25 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/30 to-transparent z-10 pointer-events-none" />
        
        <div 
          className="relative z-20 container"
          style={{ transform: `translateY(${titleTranslateY}px)` }}
        >
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl font-headline">
                World-class healthcare<br />without the wait
            </h1>
            
             <div className="mt-8 flex gap-4 justify-center">
                <Button size="lg" asChild className="transition-transform duration-300 hover:scale-105 bg-background/10 hover:bg-background/20 backdrop-blur-sm border border-white/20 text-white rounded-full">
                    <Link href="/booking">Book a Free Consultation</Link>
                </Button>
             </div>
        </div>
        <div className="group absolute bottom-10 left-1/2 -translate-x-1/2 z-20 cursor-pointer">
          <div className="border-2 border-white/50 rounded-full p-1 transition-all group-hover:border-white group-hover:animate-bounce-and-scale group-active:animate-bounce-and-scale">
            <LucideIcons.ChevronDown className="w-6 h-6 text-white/70 transition-colors group-hover:text-white" />
          </div>
        </div>
      </section>

      {/* Specialized Treatments Section */}
      <section ref={treatmentsRef} className="py-16 sm:py-24 bg-secondary/20 anim-section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
              Specialized Treatments We Offer
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              India is a global hub for advanced healthcare. Through MedTripz, you gain access to leading doctors and specialists across multiple fields:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                {specialtiesImage &&
                    <Image 
                        src={specialtiesImage.imageUrl} 
                        alt="Specialized Treatments" 
                        fill
                        className="object-cover"
                        data-ai-hint={specialtiesImage.imageHint}
                    />
                }
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
            </div>
            <div ref={specialtiesListRef} className="anim-section" style={{ animationDelay: '0.2s' }}>
                <ScrollArea className="h-[450px] pr-6">
                    <div className="space-y-4">
                        {specialties.map((specialty, index) => (
                          <Link href={`/procedures/${specialty.slug}`} key={index} className="block group">
                              <div className="flex items-center gap-4 p-4 rounded-lg bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:bg-accent/10">
                                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                    <div className="group-hover:animate-pulse-and-glow">{getIcon(specialty.icon)}</div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">{specialty.name}</h3>
                                    <p className="text-sm text-muted-foreground">Top Hospitals & Doctors</p>
                                </div>
                              </div>
                          </Link>
                        ))}
                    </div>
                </ScrollArea>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button asChild className="transition-transform duration-300 hover:scale-105 rounded-full"><Link href="/procedures">View All Treatments</Link></Button>
          </div>
        </div>
      </section>
      
      {/* Plan Your Healthcare Journey Section */}
      <section ref={journeyRef} className="py-16 sm:py-24 bg-secondary/30 anim-section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
              Plan Your Healthcare Journey
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Honest Guidance, Reliable Support, Seamless Journeys.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              {processSteps.map((step, index) => (
                <button
                  key={step.title}
                  onClick={() => setActiveStep(index)}
                  className={cn(
                    'w-full text-left p-6 rounded-lg transition-all duration-300 border-2',
                    activeStep === index
                      ? 'bg-primary/10 border-primary shadow-lg'
                      : 'bg-background hover:bg-primary/5 border-transparent'
                  )}
                >
                  <div className="flex items-center gap-6">
                    <div
                      className={cn(
                        'flex items-center justify-center w-12 h-12 rounded-full text-xl font-bold transition-colors duration-300',
                        activeStep === index
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary text-secondary-foreground'
                      )}
                    >
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                      <p
                        className={cn(
                          'text-muted-foreground mt-1 transition-all duration-300',
                          activeStep === index ? 'max-h-40' : 'max-h-0 overflow-hidden'
                        )}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            <div className="relative aspect-square">
              {activeStepImage && (
                <Image
                  src={activeStepImage.imageUrl}
                  alt={activeStepData.title}
                  fill
                  className="object-cover rounded-lg shadow-2xl"
                  data-ai-hint={activeStepData.imageHint}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Champions Section */}
      <section ref={championsRef} className="bg-section-background py-16 sm:py-24 anim-section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="">
              <h2 className="text-4xl font-bold tracking-tight font-headline text-primary">
                Trusted by champions who expect the best healthcare
              </h2>
              <div className="mt-8">
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-transform hover:scale-105 rounded-full">
                  Find Out Why
                </Button>
              </div>
            </div>
            <div style={{ animationDelay: '0.2s' }}>
              {championsImage && (
                <Image
                  src={championsImage.imageUrl}
                  alt="A collage of champion athletes"
                  width={800}
                  height={600}
                  className="w-full object-cover aspect-[4/3] rounded-md"
                  data-ai-hint={championsImage.imageHint}
                />
              )}
            </div>
          </div>
        </div>
      </section>
      

      {/* Featured Hospitals Section */}
      <section ref={hospitalsRef} className="bg-secondary/20 py-16 sm:py-24 anim-section">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl font-headline">
            Our Partner Hospitals in India
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-center" style={{ animationDelay: '0.1s' }}>
            Top Indian Hospitals for International Patients
          </p>
          <div className="mt-16" style={{ animationDelay: '0.2s' }}>
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {hospitals.slice(0, 8).map((hospital) => (
                  <CarouselItem key={hospital.id} className="md:basis-1/2 lg:basis-1/4">
                    <div className="p-1">
                      <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-xl rounded-md bg-background">
                        <Image
                          src={hospital.imageUrl}
                          alt={hospital.name}
                          width={600}
                          height={400}
                          className="h-48 w-full object-cover"
                          data-ai-hint="hospital building"
                        />
                        <CardHeader>
                          <CardTitle className="text-base">{hospital.name}</CardTitle>
                          <p className="text-sm text-muted-foreground">{hospital.city}, {hospital.country}</p>
                        </CardHeader>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 transition-transform hover:scale-110"/>
              <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 transition-transform hover:scale-110"/>
            </Carousel>
          </div>
          <div className='text-center mt-8'>
            <Button asChild className="transition-transform duration-300 hover:scale-105 rounded-full"><Link href="/hospitals">View All Hospitals</Link></Button>
          </div>
        </div>
      </section>

       {/* Your Journey Section */}
       <section ref={journeyRef} className="py-16 sm:py-24 bg-secondary/30 anim-section">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
              Your journey, led by UK doctors, from first step to full recovery
            </h2>
          </div>
          <div ref={journeyTimelineRef} className="relative mt-16 max-w-5xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform -translate-x-1/2"></div>
            {journeySteps.map((step, index) => {
              const stepImage = PlaceHolderImages.find(img => img.imageHint === step.imageHint);
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`relative flex items-center mb-16 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="hidden md:flex w-5/12"></div>
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="relative z-10">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold ring-8 ring-secondary/30">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                  <div className={`w-full md:w-5/12`}>
                    <Card className="shadow-lg hover:shadow-2xl transition-shadow duration-300">
                      <CardContent className="p-0">
                        {stepImage && (
                          <Image
                            src={stepImage.imageUrl}
                            alt={step.title || ''}
                            width={500}
                            height={300}
                            className="w-full object-cover aspect-video rounded-t-lg"
                            data-ai-hint={step.imageHint}
                          />
                        )}
                        <div className="p-6">
                            <p className="text-sm font-semibold text-primary mb-1">Week {step.week}</p>
                            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                            <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Button asChild className="transition-transform duration-300 hover:scale-105 rounded-full" size="lg">
              <Link href="/booking">Book a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

        {/* Why Choose Us Section */}
        <section ref={whyChooseUsRef} className="py-16 sm:py-24 bg-secondary/30 anim-section">
            <div className="container">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
                        Why Patients from the Middle East, Africa & CIS Choose MedTripz
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">Get World-Class Medical Treatment in India at Affordable Costs</p>
                </div>
                <div className="mt-16 grid md:grid-cols-3 gap-12 text-center">
                    {stats.map((stat, index) => (
                        <div key={index}>
                            <p className="text-5xl font-bold text-primary">{stat.value}</p>
                            <p className="mt-2 text-lg font-semibold">{stat.label}</p>
                        </div>
                    ))}
                </div>
                 <div className="mt-16 max-w-4xl mx-auto text-center bg-card p-8 shadow-md rounded-md" style={{ animationDelay: '0.3s' }}>
                    <h3 className="text-2xl font-bold">Trusted Healthcare Partner for International Patients</h3>
                    <p className="mt-4 text-muted-foreground">
                        At MedTripz, we connect international patients to India’s top hospitals and specialists, making healthcare affordable, accessible, and stress-free. With over 10 years of experience, we serve patients from the Middle East (Iraq, Saudi Arabia, Oman, Qatar, Bahrain, Kuwait, UAE), Africa (Sudan, Ethiopia, Kenya, Ghana, Egypt, and more), CIS (Uzbekistan, Kazakhstan, Turkmenistan, Tajikistan), and SAARC (Bangladesh, Nepal). MedTripz ensures trusted medical guidance, world-class treatment, and personalized care throughout your journey to recovery in India.
                    </p>
                </div>
            </div>
        </section>

        {/* Patient Stories Section */}
        <section ref={storiesRef} className="py-16 sm:py-24 bg-secondary/20 anim-section">
            <div className="container">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
                        Patient Success Stories
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">Real Experiences from Middle East, Africa & CIS Patients</p>
                </div>
                <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
                    <div className='text-center' style={{ animationDelay: '0.1s' }}>
                         <p className="text-lg text-muted-foreground">Every year, we help</p>
                         <p className='text-6xl font-bold text-primary my-2'>1000+</p>
                         <p className="text-lg text-muted-foreground">of patients get treated successfully in India.</p>
                    </div>
                    <div style={{ animationDelay: '0.2s' }}>
                        <Card className="overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 rounded-md bg-background">
                            <Image src="https://picsum.photos/seed/patient1/600/400" alt="Patient Story" width={600} height={400} className="w-full object-cover" data-ai-hint="happy patient" />
                            <CardContent className="p-6">
                                <h3 className="font-bold text-lg">Mr. Hazim gets new life after 8 hours long spine surgery</h3>
                                <p className="text-muted-foreground mt-2">Mr. Hazim - Spine Surgery</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>

        {/* Blogs Section */}
        <section ref={blogsRef} className="py-16 sm:py-24 bg-secondary/30 anim-section">
            <div className="container">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Our Latest Blogs</h2>
                    <p className="mt-4 text-lg text-muted-foreground">Daily Blogs</p>
                </div>
                <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {blogPosts.map((post, index) => {
                        const postImage = PlaceHolderImages.find(img => img.imageHint === post.imageHint);
                        return (
                        <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-md bg-background" style={{ animationDelay: `${index * 0.1}s` }}>
                            {postImage && <Image src={postImage.imageUrl} alt={post.title} width={400} height={250} className="w-full h-40 object-cover" data-ai-hint={post.imageHint} />}
                            <CardContent className="p-4">
                                <p className="text-xs text-muted-foreground">{post.date}</p>
                                <h3 className="font-semibold mt-1 text-sm leading-snug">{post.title}</h3>
                                <Link href="/blogs" className="text-xs text-primary hover:underline mt-2 inline-block">Explore More</Link>
                            </CardContent>
                        </Card>
                    )})}
                </div>
                 <div className="text-center mt-12">
                    <Button asChild className="transition-transform duration-300 hover:scale-105 rounded-full"><Link href="/blogs">View All Blogs</Link></Button>
                </div>
            </div>
        </section>

        {/* Bottom Form */}
        <section ref={formRef} className="py-16 sm:py-24 bg-secondary/20 anim-section">
             <div className="container">
                 <div className="max-w-xl mx-auto">
                    <NeedHelpForm />
                 </div>
             </div>
        </section>

    </div>
  );
}
