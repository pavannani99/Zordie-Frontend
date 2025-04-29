"use client"

import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"

const testimonials = [
  {
    quote:
      "Zordie AI has completely transformed our hiring process. We've reduced time-to-hire by 60% while finding better-matched candidates.",
    author: "Sarah Johnson",
    role: "Head of Talent Acquisition",
    company: "TechGlobal Inc.",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "SJ",
  },
  {
    quote:
      "The AI-powered interview practice helped me prepare for tough questions and gave me the confidence to ace my interviews.",
    author: "Michael Chen",
    role: "Software Engineer",
    company: "Recently hired at CodeCorp",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "MC",
  },
  {
    quote:
      "As a startup founder, I needed to build a team quickly. Zordie AI helped us find the right talent that aligned with our mission and culture.",
    author: "Alex Rivera",
    role: "CEO & Founder",
    company: "InnovateLabs",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "AR",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 w-full bg-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What Our <span className="gradient-text">Users Say</span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Success stories from companies and job seekers using our platform
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full glass-card p-6 flex flex-col">
                <div className="flex-1">
                  <p className="text-lg mb-6">"{testimonial.quote}"</p>
                </div>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-4">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                    <AvatarFallback className="bg-primary/20 text-primary">{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
