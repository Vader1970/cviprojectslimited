"use client";

import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { HardHat, Building, AreaChart, Compass, FileText, Clock, Wrench } from "lucide-react";

const EXTENDED_SERVICES = [
  {
    title: "Building & Development Management",
    description: "Coordinating contractors, suppliers, and compliance requirements.",
    icon: Building,
  },
  {
    title: "Commercial & Residential Fit-Outs",
    description: "Tailored interior solutions for both business and living spaces.",
    icon: Wrench,
  },
  {
    title: "Consultation Services",
    description: "Expert advisory on feasibility, cost management, and execution strategies.",
    icon: FileText,
  },
  {
    title: "Project Timeline Management",
    description: "Optimizing schedules to ensure efficient and timely project completion.",
    icon: Clock,
  },
  {
    title: "Feasibility Advisory",
    description: "Professional assessment of project viability and potential challenges.",
    icon: AreaChart,
  },
  {
    title: "Construction Oversight",
    description: "Ensuring high standards and timely completion through rigorous supervision.",
    icon: HardHat,
  },
  {
    title: "Project Planning",
    description: "Developing detailed project plans and strategies for successful execution.",
    icon: Compass,
  },
  {
    title: "Project Development",
    description: "Taking your project from concept to reality with expert guidance throughout.",
    icon: Building,
  },
];

function AnimatedSection({ children }: { children: React.ReactNode }) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = currentRef?.querySelectorAll(".reveal-animation");
            elements?.forEach((el, index) => {
              // Calculate row and position based delays
              const row = Math.floor(index / 4); // 4 cards per row
              const position = index % 4;
              const delay = row * 400 + position * 150; // 200ms between rows, 150ms between items

              setTimeout(() => {
                el.classList.add("active");
              }, delay);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return <div ref={sectionRef}>{children}</div>;
}

export default function ServicesSection() {
  return (
    <AnimatedSection>
      <section id='services' className='py-24 bg-white'>
        <div className='section-container'>
          <div className='max-w-3xl mx-auto text-center mb-16'>
            <span className='section-subtitle reveal-animation'>WHAT WE OFFER</span>
            <h2 className='section-title reveal-animation'>Our Construction Expertise</h2>
            <p className='text-muted-foreground text-lg reveal-animation'>
              We provide a full spectrum of services designed to meet all your construction needs with precision and
              excellence.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {EXTENDED_SERVICES.map((service, index) => (
              <div
                key={index}
                className={cn(
                  "card-hover rounded-lg p-6 reveal-animation",
                  "transition-all duration-300 border border-transparent hover:border-primary/10"
                )}
              >
                <div className='rounded-lg bg-primary/5 p-3 inline-flex mb-4'>
                  <service.icon className='w-6 h-6 text-primary' />
                </div>
                <h3 className='text-lg font-semibold text-primary mb-2'>{service.title}</h3>
                <p className='text-muted-foreground text-sm'>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
