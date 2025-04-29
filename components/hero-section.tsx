"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <div className="relative w-full py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 glow-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="gradient-text">Revolutionize</span> Your Hiring
            <br />
            With <span className="gradient-text">AI-Powered</span> Recruitment
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Connect the right talent with the right opportunities using our advanced AI matching algorithms and skill
            verification tools.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 w-full justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button size="lg" className="gradient-bg text-lg px-8 py-6">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="gradient-border text-lg px-8 py-6">
              Watch Demo
            </Button>
          </motion.div>

          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {[
              { label: "Companies", value: "2,500+" },
              { label: "Job Seekers", value: "1M+" },
              { label: "Successful Matches", value: "500K+" },
              { label: "Time Saved", value: "85%" },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
    </div>
  )
}
