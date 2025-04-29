import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Github, ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">Zordie AI</h3>
            <p className="text-muted-foreground">Next-generation AI platform for recruitment and career advancement.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">For Companies</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/post-job" className="text-muted-foreground hover:text-foreground transition-colors">
                  Post a Job
                </Link>
              </li>
              <li>
                <Link href="/ai-screening" className="text-muted-foreground hover:text-foreground transition-colors">
                  AI Screening
                </Link>
              </li>
              <li>
                <Link href="/verification" className="text-muted-foreground hover:text-foreground transition-colors">
                  Verification
                </Link>
              </li>
              <li>
                <Link href="/enterprise" className="text-muted-foreground hover:text-foreground transition-colors">
                  Enterprise Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">For Job Seekers</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/find-jobs" className="text-muted-foreground hover:text-foreground transition-colors">
                  Find Jobs
                </Link>
              </li>
              <li>
                <Link href="/verify-profile" className="text-muted-foreground hover:text-foreground transition-colors">
                  Verify Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/practice-interviews"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Practice Interviews
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-muted-foreground hover:text-foreground transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Subscribe to our newsletter</h4>
            <p className="text-muted-foreground mb-4">Stay updated with the latest features and announcements.</p>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Enter your email" className="bg-background/50" />
              <Button size="icon" className="gradient-bg">
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border/40 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Zordie AI. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
