"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const companyLinks = [
  { title: "Post a Job", href: "/post-job" },
  { title: "AI Screening", href: "/ai-screening" },
  { title: "Verification", href: "/verification" },
  { title: "Enterprise Solutions", href: "/enterprise" },
]

const jobSeekerLinks = [
  { title: "Find Jobs", href: "/find-jobs" },
  { title: "Verify Profile", href: "/verify-profile" },
  { title: "Practice Interviews", href: "/practice-interviews" },
]

const resourceLinks = [
  { title: "Blog", href: "/blog" },
  { title: "Resources", href: "/resources" },
  { title: "Privacy Policy", href: "/privacy" },
  { title: "Terms of Service", href: "/terms" },
]

const aboutLinks = [
  { title: "About Us", href: "/about" },
  { title: "Contact Us", href: "/contact" },
  { title: "Careers", href: "/careers" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-xl gradient-text"
          >
            Zordie AI
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/features" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Features</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/pricing" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Pricing</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>For Companies</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {companyLinks.map((link) => (
                    <ListItem key={link.title} title={link.title} href={link.href} />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>For Job Seekers</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {jobSeekerLinks.map((link) => (
                    <ListItem key={link.title} title={link.title} href={link.href} />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {aboutLinks.map((link) => (
                    <ListItem key={link.title} title={link.title} href={link.href} />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href={"/sign-in"}>
          <Button variant="outline" className="gradient-border cursor-pointer">
            Log In
          </Button>
          </Link>
          <Link href={"/sign-up"}><Button className="gradient-bg cursor-pointer">Sign Up</Button></Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-lg"
          >
            <div className="container py-4 space-y-4">
              <div className="space-y-2">
                <Link
                  href="/features"
                  className="block px-4 py-2 hover:bg-accent rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="/pricing"
                  className="block px-4 py-2 hover:bg-accent rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  Pricing
                </Link>
              </div>

              <div className="space-y-1">
                <h3 className="px-4 text-sm font-medium text-muted-foreground">For Companies</h3>
                {companyLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="block px-4 py-2 hover:bg-accent rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>

              <div className="space-y-1">
                <h3 className="px-4 text-sm font-medium text-muted-foreground">For Job Seekers</h3>
                {jobSeekerLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="block px-4 py-2 hover:bg-accent rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>

              <div className="space-y-1">
                <h3 className="px-4 text-sm font-medium text-muted-foreground">About</h3>
                {aboutLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="block px-4 py-2 hover:bg-accent rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>

              <div className="pt-4 flex flex-col space-y-2">
                <Button variant="outline" className="w-full gradient-border">
                  Log In
                </Button>
                <Button className="w-full gradient-bg">Sign Up</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> & { title: string }>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

