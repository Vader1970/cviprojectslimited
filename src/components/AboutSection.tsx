import { Building2, ArrowUpRight, MapPin, Award } from "lucide-react";
import Image from "next/image";
// import { cn } from "@/lib/utils";
import { RevealAnimation } from "@/components/ui/revealAnimation";

// Move to a separate file or constants folder
const FEATURE_ITEMS = [
  {
    icon: <Building2 className='w-6 h-6 text-primary' />,
    title: "Independent Firm",
    description: "Standalone construction management",
  },
  {
    icon: <Award className='w-6 h-6 text-primary' />,
    title: "Quality Delivery",
    description: "High-quality building projects",
  },
  {
    icon: <MapPin className='w-6 h-6 text-primary' />,
    title: "Local Presence",
    description: "Serving North Canterbury & Christchurch",
  },
  {
    icon: <ArrowUpRight className='w-6 h-6 text-primary' />,
    title: "Expert Execution",
    description: "Seamless project implementation",
  },
] as const;

export default function AboutSection() {
  return (
    <section id='about' className='bg-white py-24'>
      <div className='section-container'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          <RevealAnimation>
            <span className='section-subtitle'>Who Are We</span>
            <h2 className='section-title'>Exclusive Construction Firm for Chance Voight Investment Corporation</h2>
            <p className='text-muted-foreground text-lg mb-8'>
              CVI Projects carries out construction and development work on behalf of Chance Voight Investment Partners,
              ensuring seamless execution of their building initiatives.
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8'>
              {FEATURE_ITEMS.map((item, index) => (
                <div key={index} className='flex items-start gap-4'>
                  <div className='rounded-lg bg-primary/5 p-3 flex-shrink-0'>{item.icon}</div>
                  <div>
                    <h3 className='text-xl font-bold text-primary'>{item.title}</h3>
                    <p className='text-muted-foreground'>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </RevealAnimation>

          <RevealAnimation>
            <div className='grid grid-cols-2 gap-4 lg:gap-6'>
              <div className='space-y-4 lg:space-y-6 pt-8'>
                <div className='image-container aspect-[3/4] relative overflow-hidden'>
                  <Image
                    src='/images/56cloudesley1.jpg'
                    alt='Before renovation'
                    fill
                    className='object-cover transition-transform duration-700 hover:scale-105'
                    sizes='(max-width: 768px) 100vw, 50vw'
                    quality={85}
                  />
                  <div className='image-overlay absolute inset-0 bg-black/20'>
                    <span className='text-white text-sm font-medium absolute bottom-4 left-4'>
                      56 Cloudesley Street, Bealey{" "}
                    </span>
                  </div>
                </div>
                <div className='image-container aspect-square'>
                  <Image
                    src='/images/541.jpg'
                    alt='After renovation'
                    fill
                    className='object-cover transition-transform duration-700 hover:scale-105'
                    sizes='(max-width: 768px) 100vw, 50vw'
                    quality={85}
                  />
                  <div className='image-overlay'>
                    <span className='text-white text-sm font-medium'>54 Cloudesley Street, Bealey</span>
                  </div>
                </div>
              </div>
              <div className='space-y-4 lg:space-y-6'>
                <div className='image-container aspect-square'>
                  <Image
                    src='/images/solar.jpg'
                    alt='Before renovation interior'
                    fill
                    className='object-cover transition-transform duration-700 hover:scale-105'
                    sizes='(max-width: 768px) 100vw, 50vw'
                    quality={85}
                  />
                  <div className='image-overlay'>
                    <span className='text-white text-sm font-medium'>56 Cloudesley Street, Bealey</span>
                  </div>
                </div>
                <div className='image-container aspect-[3/4]'>
                  <Image
                    src='/images/54cloudesley1.jpg'
                    alt='After renovation interior'
                    fill
                    className='object-cover object-left transition-transform duration-700 hover:scale-105'
                    sizes='(max-width: 768px) 100vw, 50vw'
                    quality={85}
                  />
                  <div className='image-overlay'>
                    <span className='text-white text-sm font-medium'>56 Cloudesley Street, Bealey</span>
                  </div>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
}
