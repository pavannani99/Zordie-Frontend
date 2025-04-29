"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Edit, MoreHorizontal, Plus, Search, Trash } from "lucide-react"
import { motion } from "framer-motion"

const jobPostings = [
  {
    id: "JP001",
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote",
    postedDate: "2023-04-15",
    applicants: 24,
    status: "Active",
  },
  {
    id: "JP002",
    title: "Product Manager",
    department: "Product",
    location: "New York, NY",
    postedDate: "2023-04-10",
    applicants: 18,
    status: "Active",
  },
  {
    id: "JP003",
    title: "UX Designer",
    department: "Design",
    location: "San Francisco, CA",
    postedDate: "2023-04-05",
    applicants: 12,
    status: "Closed",
  },
  {
    id: "JP004",
    title: "Data Scientist",
    department: "Data",
    location: "Remote",
    postedDate: "2023-04-01",
    applicants: 15,
    status: "Draft",
  },
  {
    id: "JP005",
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Austin, TX",
    postedDate: "2023-03-28",
    applicants: 9,
    status: "Active",
  },
]

export function JobPostingDashboard() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <div className="flex justify-between items-center mb-6">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search job postings..." className="pl-8 bg-background/50" />
        </div>
        <Button className="gradient-bg">
          <Plus className="mr-2 h-4 w-4" /> New Job Posting
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Job Title</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Posted Date</TableHead>
              <TableHead>Applicants</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[80px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {jobPostings.map((job) => (
              <TableRow key={job.id}>
                <TableCell className="font-medium">{job.title}</TableCell>
                <TableCell>{job.department}</TableCell>
                <TableCell>{job.location}</TableCell>
                <TableCell>{job.postedDate}</TableCell>
                <TableCell>{job.applicants}</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      job.status === "Active"
                        ? "bg-green-500/10 text-green-500 hover:bg-green-500/20 hover:text-green-500"
                        : job.status === "Draft"
                          ? "bg-amber-500/10 text-amber-500 hover:bg-amber-500/20 hover:text-amber-500"
                          : "bg-gray-500/10 text-gray-500 hover:bg-gray-500/20 hover:text-gray-500"
                    }
                  >
                    {job.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" /> Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive focus:text-destructive">
                        <Trash className="mr-2 h-4 w-4" /> Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-muted-foreground">
          Showing <strong>5</strong> of <strong>12</strong> job postings
        </p>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
