"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animatedSection";

export default function CtaSection() {
  return (
    <AnimatedSection className='py-20 relative overflow-hidden'>
      <div className='absolute inset-0 -z-10'>
        <div className='absolute inset-0 bg-primary/90' />
        <Image
          src='/images/house.png'
          alt='Modern architecture'
          fill
          className='object-cover mix-blend-overlay opacity-30'
          priority
          quality={85}
        />
      </div>

      <div className='section-container relative z-10'>
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='text-3xl md:text-4xl font-display font-bold text-white mb-6 reveal-animation'>
            Ready to Bring Your Construction Vision to Life?
          </h2>
          <p className='text-white/90 text-lg mb-8 reveal-animation'>
            Partner with Voight Construction Management for exceptional results delivered on time and within budget.
          </p>
          <div className='flex flex-col sm:flex-row justify-center items-center gap-4 reveal-animation'>
            <a
              href='#contact'
              className={cn(
                "group px-6 py-3 rounded-lg text-primary font-medium transition-all",
                "bg-white hover:bg-white/90 flex items-center gap-2"
              )}
            >
              Contact Our Team
              <ArrowRight size={18} className='group-hover:translate-x-1 transition-transform' />
            </a>
            <a
              href='#services'
              className={cn(
                "px-6 py-3 rounded-lg font-medium transition-all",
                "bg-white/10 text-white hover:bg-white/20"
              )}
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
