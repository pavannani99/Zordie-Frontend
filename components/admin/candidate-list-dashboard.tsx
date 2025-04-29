"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Eye, MoreHorizontal, Search, Star, UserPlus } from "lucide-react"
import { motion } from "framer-motion"

const candidates = [
  {
    id: "C001",
    name: "Alex Johnson",
    role: "Senior Frontend Developer",
    location: "San Francisco, CA",
    appliedDate: "2023-04-15",
    status: "Screening",
    matchScore: 92,
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "AJ",
  },
  {
    id: "C002",
    name: "Maria Rodriguez",
    role: "Product Manager",
    location: "New York, NY",
    appliedDate: "2023-04-12",
    status: "Interview",
    matchScore: 88,
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "MR",
  },
  {
    id: "C003",
    name: "David Kim",
    role: "UX Designer",
    location: "Remote",
    appliedDate: "2023-04-10",
    status: "Offer",
    matchScore: 95,
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "DK",
  },
  {
    id: "C004",
    name: "Sarah Patel",
    role: "Data Scientist",
    location: "Chicago, IL",
    appliedDate: "2023-04-08",
    status: "Applied",
    matchScore: 78,
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "SP",
  },
  {
    id: "C005",
    name: "James Wilson",
    role: "DevOps Engineer",
    location: "Austin, TX",
    appliedDate: "2023-04-05",
    status: "Rejected",
    matchScore: 65,
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "JW",
  },
]

export function CandidateListDashboard() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <div className="flex justify-between items-center mb-6">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search candidates..." className="pl-8 bg-background/50" />
        </div>
        <Button className="gradient-bg">
          <UserPlus className="mr-2 h-4 w-4" /> Add Candidate
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Candidate</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Applied Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Match Score</TableHead>
              <TableHead className="w-[80px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {candidates.map((candidate) => (
              <TableRow key={candidate.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={candidate.avatar || "/placeholder.svg"} alt={candidate.name} />
                      <AvatarFallback>{candidate.initials}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{candidate.name}</span>
                  </div>
                </TableCell>
                <TableCell>{candidate.role}</TableCell>
                <TableCell>{candidate.location}</TableCell>
                <TableCell>{candidate.appliedDate}</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      candidate.status === "Offer"
                        ? "bg-green-500/10 text-green-500 hover:bg-green-500/20 hover:text-green-500"
                        : candidate.status === "Interview"
                          ? "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 hover:text-blue-500"
                          : candidate.status === "Screening"
                            ? "bg-purple-500/10 text-purple-500 hover:bg-purple-500/20 hover:text-purple-500"
                            : candidate.status === "Applied"
                              ? "bg-amber-500/10 text-amber-500 hover:bg-amber-500/20 hover:text-amber-500"
                              : "bg-gray-500/10 text-gray-500 hover:bg-gray-500/20 hover:text-gray-500"
                    }
                  >
                    {candidate.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <Star
                      className={`h-4 w-4 mr-1 ${
                        candidate.matchScore >= 85 ? "text-yellow-500" : "text-muted-foreground"
                      }`}
                      fill={candidate.matchScore >= 85 ? "currentColor" : "none"}
                    />
                    <span className={candidate.matchScore >= 85 ? "text-yellow-500 font-medium" : ""}>
                      {candidate.matchScore}%
                    </span>
                  </div>
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
                        <Eye className="mr-2 h-4 w-4" /> View Profile
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Star className="mr-2 h-4 w-4" /> Add to Favorites
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
          Showing <strong>5</strong> of <strong>24</strong> candidates
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
