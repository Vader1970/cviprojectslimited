"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import { RxChevronDown } from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type NavLink = {
  url: string;
  title: string;
  subMenuLinks?: NavLink[];
};

type ButtonItem = {
  title: string;
  variant?: "default" | "outline";
  href?: string;
};

type Props = {
  logo: ImageProps;
  navLinks: NavLink[];
  buttons: ButtonItem[];
};

export type NavbarProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Navbar = (props: NavbarProps) => {
  const { logo, navLinks, buttons } = {
    ...NavbarDefaults,
    ...props,
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 flex w-full items-center lg:min-h-18 lg:px-[5%] z-50 bg-white transition-all duration-200",
        isScrolled ? "bg-white/40 backdrop-blur-md shadow-sm" : ""
      )}
    >
      <div className='mx-auto size-full lg:grid lg:grid-cols-[0.375fr_1fr_0.375fr] lg:items-center lg:justify-between lg:gap-4'>
        <div className='flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0'>
          <Link href={logo.url || "#"}>
            <Image src={logo.src} alt={logo.alt || ""} width={120} height={40} className='h-auto w-auto' priority />
          </Link>
          <div className='flex items-center gap-4 lg:hidden'>
            <div>
              {buttons.map((button, index) => (
                <Button key={index} variant={button.variant || "default"} asChild={!!button.href} className='w-full'>
                  {button.href ? <a href={button.href}>{button.title}</a> : button.title}
                </Button>
              ))}
            </div>
            <button
              className='-mr-2 flex size-12 flex-col items-center justify-center'
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <motion.span
                className='my-[3px] h-0.5 w-6 bg-black'
                animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
                variants={topLineVariants}
              />
              <motion.span
                className='my-[3px] h-0.5 w-6 bg-black'
                animate={isMobileMenuOpen ? "open" : "closed"}
                variants={middleLineVariants}
              />
              <motion.span
                className='my-[3px] h-0.5 w-6 bg-black'
                animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
                variants={bottomLineVariants}
              />
            </button>
          </div>
        </div>
        <motion.div
          variants={{
            open: {
              height: "var(--height-open, 100dvh)",
            },
            close: {
              height: "var(--height-closed, 0)",
            },
          }}
          animate={isMobileMenuOpen ? "open" : "close"}
          initial='close'
          exit='close'
          transition={{ duration: 0.4 }}
          className='overflow-hidden px-[5%] text-center lg:flex lg:items-center lg:justify-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]'
        >
          {navLinks.map((navLink, index) => (
            <div key={index} className='first:pt-4 lg:first:pt-0'>
              {navLink.subMenuLinks && navLink.subMenuLinks.length > 0 ? (
                <SubMenu navLink={navLink} isMobile={isMobile} setIsMobileMenuOpen={setIsMobileMenuOpen} />
              ) : (
                <Link
                  href={navLink.url}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className='block py-3 lg:px-4 lg:py-2 lg:text-base text-primary/80 hover:text-primary text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full'
                >
                  {navLink.title}
                </Link>
              )}
            </div>
          ))}
        </motion.div>
        <div className='hidden justify-self-end lg:block'>
          {buttons.map((button, index) => (
            <Button key={index} variant={button.variant || "default"} asChild={!!button.href}>
              {button.href ? <a href={button.href}>{button.title}</a> : button.title}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};

const SubMenu = ({
  navLink,
  isMobile,
  setIsMobileMenuOpen,
}: {
  navLink: NavLink;
  isMobile: boolean;
  setIsMobileMenuOpen: (value: boolean) => void;
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLinkClick = () => {
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      onMouseEnter={() => !isMobile && setIsDropdownOpen(true)}
      onMouseLeave={() => !isMobile && setIsDropdownOpen(false)}
    >
      <button
        className='flex w-full items-center justify-center gap-4 py-3 text-center lg:w-auto lg:flex-none lg:justify-start lg:gap-2 lg:px-4 lg:py-2 lg:text-base text-primary/80 hover:text-primary text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full'
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <span>{navLink.title}</span>
        <motion.span
          animate={isDropdownOpen ? "rotated" : "initial"}
          variants={{
            rotated: { rotate: 180 },
            initial: { rotate: 0 },
          }}
          transition={{ duration: 0.3 }}
        >
          <RxChevronDown />
        </motion.span>
      </button>
      {isDropdownOpen && (
        <AnimatePresence>
          <motion.nav
            animate={isDropdownOpen ? "open" : "close"}
            initial='close'
            exit='close'
            variants={{
              open: {
                visibility: "visible",
                opacity: "var(--opacity-open, 100%)",
                y: 0,
              },
              close: {
                visibility: "hidden",
                opacity: "var(--opacity-close, 0)",
                y: "var(--y-close, 0%)",
              },
            }}
            transition={{ duration: 0.2 }}
            className='bg-background-primary lg:absolute lg:z-50 lg:border lg:border-border-primary lg:p-2 lg:[--y-close:25%]'
          >
            {navLink.subMenuLinks?.map((subMenuLink, index) => (
              <Link
                key={index}
                href={subMenuLink.url}
                onClick={handleLinkClick}
                className='block py-3 text-center lg:px-4 lg:py-2 lg:text-left text-primary/80 hover:text-primary text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full'
              >
                {subMenuLink.title}
              </Link>
            ))}
          </motion.nav>
        </AnimatePresence>
      )}
    </nav>
  );
};

export const NavbarDefaults: Props = {
  logo: {
    url: "#hero",
    src: "/logos/cvi-projects-logo.png",
    alt: "CVI Projects Logo",
  },
  navLinks: [
    { title: "Who Are We", url: "#about" },
    { title: "Who We Work With", url: "#services" },
    { title: "Current Projects", url: "#current-projects" },
  ],
  buttons: [
    {
      title: "Contact",
      variant: "default",
      href: "#contact",
    },
  ],
};

const topLineVariants = {
  open: {
    translateY: 8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: -45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};

const middleLineVariants = {
  open: {
    width: 0,
    transition: { duration: 0.1 },
  },
  closed: {
    width: "1.5rem",
    transition: { delay: 0.3, duration: 0.2 },
  },
};

const bottomLineVariants = {
  open: {
    translateY: -8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: 45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};
