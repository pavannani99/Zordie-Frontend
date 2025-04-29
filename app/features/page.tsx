"use client"

import { FeatureCard } from "@/components/feature-card"
import { PageHeader } from "@/components/page-header"
import { motion } from "framer-motion"
import { Brain, Briefcase, CheckCircle, FileText, LineChart, Shield, Users } from "lucide-react"

const features = [
  {
    title: "AI-Powered Matching",
    description:
      "Our advanced algorithms match candidates with the perfect opportunities based on skills, experience, and preferences.",
    icon: Brain,
  },
  {
    title: "Automated Screening",
    description: "Save time with AI-driven candidate screening that identifies top talent quickly and efficiently.",
    icon: CheckCircle,
  },
  {
    title: "Skill Verification",
    description: "Verify candidate skills with our comprehensive assessment tools to ensure the perfect fit.",
    icon: Shield,
  },
  {
    title: "Interview Practice",
    description:
      "Candidates can prepare for interviews with our AI-powered practice sessions tailored to specific roles.",
    icon: FileText,
  },
  {
    title: "Enterprise Solutions",
    description: "Custom solutions for large organizations with specific hiring needs and compliance requirements.",
    icon: Briefcase,
  },
  {
    title: "Analytics Dashboard",
    description: "Gain insights into your hiring process with detailed analytics and reporting tools.",
    icon: LineChart,
  },
  {
    title: "Collaborative Hiring",
    description: "Involve your entire team in the hiring process with collaborative tools and feedback mechanisms.",
    icon: Users,
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function FeaturesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <PageHeader
        title="Our Features"
        description="Discover the powerful tools that make Zordie AI the leading platform for AI-driven recruitment and career advancement."
      />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {features.map((feature, index) => (
          <FeatureCard key={index} title={feature.title} description={feature.description} icon={feature.icon} />
        ))}
      </motion.div>
    </div>
  )
}
