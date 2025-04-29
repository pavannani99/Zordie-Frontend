"use client"

import { PageHeader } from "@/components/page-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { JobPostingDashboard } from "@/components/admin/job-posting-dashboard"
import { CandidateListDashboard } from "@/components/admin/candidate-list-dashboard"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function AdminDashboard() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <PageHeader title="Admin Dashboard" description="Manage your job postings and review candidate applications." />
      </motion.div>

      <Card className="mt-8 p-6 bg-background/50 backdrop-blur-sm border-purple-500/20">
        <Tabs defaultValue="job-posting" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
            <TabsTrigger value="job-posting">Job Posting</TabsTrigger>
            <TabsTrigger value="candidate-list">Candidate List</TabsTrigger>
          </TabsList>

          <TabsContent value="job-posting">
            <JobPostingDashboard />
          </TabsContent>

          <TabsContent value="candidate-list">
            <CandidateListDashboard />
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  )
}
