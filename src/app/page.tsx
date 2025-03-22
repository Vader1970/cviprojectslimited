import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Hero } from "@/components/Hero";

// Dynamic imports for below-fold sections
const AboutSection = dynamic(() => import("@/components/AboutSection"), {
  loading: () => <div className='min-h-[300px] animate-pulse bg-muted' />,
});

const CurrentProjectsSection = dynamic(() => import("@/components/CurrentProjectsSection"), {
  loading: () => <div className='min-h-[300px] animate-pulse bg-muted' />,
});

const ServicesSection = dynamic(() => import("@/components/ServicesSection"), {
  loading: () => <div className='min-h-[300px] animate-pulse bg-muted' />,
});

const CtaSection = dynamic(() => import("@/components/CtaSection"), {
  loading: () => <div className='min-h-[300px] animate-pulse bg-muted' />,
});

const ContactSection = dynamic(() => import("@/components/ContactSection"), {
  loading: () => <div className='min-h-[300px] animate-pulse bg-muted' />,
});

export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<div className='min-h-[300px] animate-pulse bg-muted' />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<div className='min-h-[300px] animate-pulse bg-muted' />}>
        <ServicesSection />
      </Suspense>
      <Suspense fallback={<div className='min-h-[300px] animate-pulse bg-muted' />}>
        <CurrentProjectsSection />
      </Suspense>
      <Suspense fallback={<div className='min-h-[300px] animate-pulse bg-muted' />}>
        <CtaSection />
      </Suspense>
      <Suspense fallback={<div className='min-h-[300px] animate-pulse bg-muted' />}>
        <ContactSection />
      </Suspense>
    </>
  );
}
