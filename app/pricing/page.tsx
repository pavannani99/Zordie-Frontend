"use client"

import { PageHeader } from "@/components/page-header"
import { PricingCard } from "@/components/pricing-card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"

const companyPlans = [
  {
    name: "Starter",
    price: "$99",
    period: "per month",
    description: "Perfect for small businesses just getting started with AI recruitment.",
    features: ["Up to 5 job postings", "Basic AI screening", "Email support", "Candidate tracking", "Basic analytics"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    price: "$299",
    period: "per month",
    description: "Ideal for growing companies with regular hiring needs.",
    features: [
      "Up to 20 job postings",
      "Advanced AI screening",
      "Priority support",
      "Team collaboration tools",
      "Comprehensive analytics",
      "Custom branding",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "Tailored solutions for large organizations with complex requirements.",
    features: [
      "Unlimited job postings",
      "Premium AI screening",
      "Dedicated account manager",
      "API access",
      "Advanced analytics & reporting",
      "Custom integrations",
      "Compliance tools",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

const jobSeekerPlans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with basic job search and profile tools.",
    features: ["Create a profile", "Apply to jobs", "Basic skill assessment", "Job alerts"],
    cta: "Sign Up Free",
    popular: false,
  },
  {
    name: "Premium",
    price: "$19",
    period: "per month",
    description: "Enhance your job search with advanced tools and priority features.",
    features: [
      "Priority application status",
      "Advanced skill verification",
      "Unlimited practice interviews",
      "AI resume optimization",
      "Personalized job recommendations",
      "Career coaching session (1/month)",
    ],
    cta: "Upgrade Now",
    popular: true,
  },
  {
    name: "Career Pro",
    price: "$49",
    period: "per month",
    description: "Comprehensive career advancement tools for professionals.",
    features: [
      "All Premium features",
      "Executive profile visibility",
      "Advanced career analytics",
      "Weekly coaching sessions",
      "Industry networking events",
      "Executive job opportunities",
    ],
    cta: "Go Pro",
    popular: false,
  },
]

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <PageHeader
        title="Pricing Plans"
        description="Choose the perfect plan for your needs. Whether you're a job seeker or a company, we have options designed for you."
      />

      <div className="mt-12">
        <Tabs defaultValue="companies" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="companies">For Companies</TabsTrigger>
              <TabsTrigger value="jobseekers">For Job Seekers</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="companies">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {companyPlans.map((plan, index) => (
                <PricingCard key={index} plan={plan} />
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="jobseekers">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {jobSeekerPlans.map((plan, index) => (
                <PricingCard key={index} plan={plan} />
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="mt-20 text-center">
        <h3 className="text-2xl font-bold mb-4">Need a custom solution?</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Our team can create a tailored plan that perfectly fits your organization's unique requirements.
        </p>
        <Button size="lg" variant="outline" className="gradient-border">
          Contact Our Sales Team
        </Button>
      </div>
    </div>
  )
}
