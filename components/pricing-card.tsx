"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"
import { motion } from "framer-motion"

interface PricingPlan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  popular?: boolean
}

interface PricingCardProps {
  plan: PricingPlan
}

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
      <Card
        className={`h-full relative overflow-hidden glass-card p-8 flex flex-col border-purple-500/20 ${
          plan.popular ? "ring-2 ring-primary" : ""
        }`}
      >
        {plan.popular && (
          <div className="absolute top-0 right-0">
            <div className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">Popular</div>
          </div>
        )}

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

        <Button className={plan.popular ? "gradient-bg w-full" : "w-full"}>{plan.cta}</Button>
      </Card>
    </motion.div>
  )
}
