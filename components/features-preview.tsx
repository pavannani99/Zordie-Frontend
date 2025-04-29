"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Brain, CheckCircle, Shield } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Matching",
    description:
      "Our advanced algorithms match candidates with the perfect opportunities based on skills, experience, and preferences.",
  },
  {
    icon: CheckCircle,
    title: "Automated Screening",
    description: "Save time with AI-driven candidate screening that identifies top talent quickly and efficiently.",
  },
  {
    icon: Shield,
    title: "Skill Verification",
    description: "Verify candidate skills with our comprehensive assessment tools to ensure the perfect fit.",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function FeaturesPreview() {
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
            <span className="gradient-text">Key Features</span> That Set Us Apart
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover how our AI-powered platform transforms the recruitment process
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="glass-card rounded-xl p-6 flex flex-col items-center text-center"
              variants={item}
            >
              <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mb-6">
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/features" passHref>
            <Button size="lg" variant="outline" className="gradient-border">
              Explore All Features
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
