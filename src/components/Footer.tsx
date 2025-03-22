import Link from "next/link";
import { cn } from "@/lib/utils";
import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Who Are We", href: "/about" },
    { name: "What We Do", href: "/what-we-do" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact Us", href: "/contact" },
  ];

  const services = [
    { name: "Project Planning", href: "/services#project-planning" },
    { name: "Construction Management", href: "/services#construction-management" },
    { name: "Cost Optimization", href: "/services#cost-optimization" },
    { name: "Quality Assurance", href: "/services#quality-assurance" },
    { name: "Post-Construction Support", href: "/services#post-construction" },
  ];

  return (
    <footer className='bg-primary text-white'>
      <div className='section-container py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div>
            <h3 className='text-xl font-display font-bold mb-4'>CVI Projects Limited</h3>
            <p className='text-white/80 mb-6'>
              Transforming construction challenges into seamless realities through expert project management and
              innovative solutions.
            </p>
            <div className='flex space-x-4'>
              <a
                href='#'
                className='bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors'
                aria-label='Facebook'
              >
                <Facebook size={18} />
              </a>
              <a
                href='#'
                className='bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors'
                aria-label='Twitter'
              >
                <Twitter size={18} />
              </a>
              <a
                href='#'
                className='bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors'
                aria-label='LinkedIn'
              >
                <Linkedin size={18} />
              </a>
              <a
                href='#'
                className='bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors'
                aria-label='Instagram'
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className='text-lg font-semibold mb-4'>Quick Links</h4>
            <ul className='space-y-2'>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className='text-white/80 hover:text-white transition-colors inline-block'>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className='text-lg font-semibold mb-4'>Services</h4>
            <ul className='space-y-2'>
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className='text-white/80 hover:text-white transition-colors inline-block'>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className='text-lg font-semibold mb-4'>Contact</h4>
            <ul className='space-y-4'>
              <li className='flex items-start gap-3'>
                <Mail size={18} className='text-white/80 mt-1' />
                <a href='mailto:info@voightbuild.com' className='text-white/80 hover:text-white transition-colors'>
                  info@voightbuild.com
                </a>
              </li>
              <li className='flex items-start gap-3'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='18'
                  height='18'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='text-white/80 mt-1'
                >
                  <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
                </svg>
                <a href='tel:+15551234567' className='text-white/80 hover:text-white transition-colors'>
                  (555) 123-4567
                </a>
              </li>
              <li className='flex items-start gap-3'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='18'
                  height='18'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='text-white/80 mt-1'
                >
                  <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z' />
                  <circle cx='12' cy='10' r='3' />
                </svg>
                <address className='text-white/80 not-italic'>
                  123 Construction Way
                  <br />
                  Building City, CA 90210
                </address>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-white/10'>
        <div className='container mx-auto px-6 py-6'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-white/70 text-sm'>
              &copy; {currentYear} VoightBuild Construction Management. All rights reserved.
            </p>
            <div className='flex space-x-6 mt-4 md:mt-0'>
              <Link href='/privacy' className='text-white/70 hover:text-white text-sm transition-colors'>
                Privacy Policy
              </Link>
              <Link href='/terms' className='text-white/70 hover:text-white text-sm transition-colors'>
                Terms of Service
              </Link>
              <Link href='/sitemap' className='text-white/70 hover:text-white text-sm transition-colors'>
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
