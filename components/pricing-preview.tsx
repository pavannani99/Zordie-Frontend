"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const pricingPlans = [
  {
    name: "For Companies",
    description: "Streamline your hiring process with AI-powered tools.",
    price: "$299",
    period: "per month",
    features: [
      "AI candidate matching",
      "Automated screening",
      "Skill verification",
      "Team collaboration tools",
      "Analytics dashboard",
    ],
    cta: "Start Hiring",
    href: "/pricing?tab=companies",
  },
  {
    name: "For Job Seekers",
    description: "Advance your career with AI-powered tools and resources.",
    price: "$19",
    period: "per month",
    features: [
      "AI job matching",
      "Skill verification",
      "Practice interviews",
      "Resume optimization",
      "Career coaching",
    ],
    cta: "Find Jobs",
    href: "/pricing?tab=jobseekers",
  },
]

export function PricingPreview() {
  return (
    <section className="py-20 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Choose the plan that works best for you
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full glass-card p-8 flex flex-col border-purple-500/20">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground"> {plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check size={18} className="text-primary mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href={plan.href} passHref>
                  <Button className="w-full gradient-bg">{plan.cta}</Button>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/pricing" passHref>
            <Button variant="outline" className="gradient-border">
              View All Pricing Options
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
