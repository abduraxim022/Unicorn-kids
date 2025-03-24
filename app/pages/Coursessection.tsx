"use client"
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, FileText } from "lucide-react";
import SlideArrowButton from "@/components/Getstarted";

const courses = [
  {
    id: 1,
    title: "Effective Stakeholder Engagement",
    description: "Gain UI design mastery with hands-on expert mentorship, refining your skills through personalized guidance and feedback.",
    category: "Development",
    featured: true,
    price: 160.00,
    duration: "3hr 20min",
    lectures: "22 lectures",
    image: "/stakeholder-engagement.png", // Replace with your image path
    color: "bg-blue-100"
  },
  {
    id: 2,
    title: "Google Ads & PPC Campaigns",
    category: "Marketing",
    price: 140.00,
    duration: "2hr 15min",
    lectures: "18 lectures",
    image: "/google-ads.png", // Replace with your image path
    color: "bg-amber-100"
  },
  {
    id: 3,
    title: "Introduction to Design Systems",
    category: "UI/UX Design",
    price: 150.00,
    duration: "3hr 30min",
    lectures: "21 lectures",
    image: "/design-systems.png", // Replace with your image path
    color: "bg-purple-100"
  },
  {
    id: 4,
    title: "HTML, CSS, and Beyond",
    category: "Development",
    price: 180.00,
    duration: "4hr 10min",
    lectures: "30 lectures",
    image: "/html-css.png", // Replace with your image path
    color: "bg-indigo-100"
  }
];

const categories = [
  { id: "all", label: "All Categories" },
  { id: "development", label: "Development" },
  { id: "ui-ux-design", label: "UI/UX Design" },
  { id: "finance", label: "Finance" },
  { id: "project-management", label: "Project Management" },
  { id: "accounting", label: "Accounting" },
];

export default function CoursesSection() {
  return (
    <section id="courses" className="py-16 bg-gradient-to-r from-teal-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-slate-800">
            Become In Demand On the<br />Job Market Today!
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <Tabs defaultValue="all" className="w-full max-w-3xl">
            <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto pb-4">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className={`px-4 py-2 rounded-full border ${category.id === 'all' ? 'bg-emerald-500 text-white border-transparent' : 'bg-white text-gray-700 border-gray-200'} hover:bg-emerald-50`}
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>

        <div className="space-y-6">
          {/* Featured Course */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="overflow-hidden border-0 shadow-sm">
              <div className="grid md:grid-cols-3 gap-4">
                <div className={`${courses[0].color} p-6 flex items-center justify-center`}>
                  <div className="w-full h-40 bg-gray-200 rounded"></div>
                </div>
                <div className="md:col-span-2 p-6">
                  <div className="flex flex-col h-full">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <Badge className="bg-gray-100 text-gray-600 hover:bg-gray-200">{courses[0].category}</Badge>
                        <Badge className="bg-black text-white hover:bg-gray-800">Popular</Badge>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{courses[0].title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{courses[0].description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <Clock size={16} />
                          <span>{courses[0].duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FileText size={16} />
                          <span>{courses[0].lectures}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="font-bold text-lg text-emerald-600">${courses[0].price.toFixed(2)}</span>
                      <Button className="rounded-full bg-emerald-500 hover:bg-emerald-600 text-white">
                        View Details
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                          <path d="M7 7l10 10"/>
                          <path d="M17 7v10H7"/>
                        </svg>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Other Courses */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {courses.slice(1).map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
              >
                <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
                  <div className={`${course.color} p-6 flex items-center justify-center`}>
                    <div className="w-full h-32 bg-gray-200 rounded"></div>
                  </div>
                  <CardContent className="p-4">
                    <Badge className="mb-2 bg-gray-100 text-gray-600 hover:bg-gray-200">{course.category}</Badge>
                    <h3 className="font-bold mb-4">{course.title}</h3>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FileText size={14} />
                        <span>{course.lectures}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="px-4 py-3 bg-gray-50 flex justify-between items-center">
                    <span className="font-bold text-emerald-600">${course.price.toFixed(2)}</span>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center mt-10"
        >
           <SlideArrowButton text=" View all menotrs"/>
        </motion.div>
      </div>
    </section>
  );
}