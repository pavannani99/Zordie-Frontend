"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section className="py-20 w-full">
      <div className="container mx-auto px-4">
        <motion.div
          className="glass-card rounded-2xl p-12 text-center max-w-4xl mx-auto relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Background gradient blobs */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Ready to <span className="gradient-text">Transform</span> Your Hiring Process?
          </motion.h2>

          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Join thousands of companies and job seekers who are already benefiting from our AI-powered platform.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button size="lg" className="gradient-bg text-lg px-8">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="gradient-border text-lg px-8">
              Schedule a Demo
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
