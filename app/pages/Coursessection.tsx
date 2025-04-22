"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, FileText, User } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Java Foundation",
    category: "Foundation",
    duration: "2 soat",
    lectures: "48 ta ma'ruza",
    instructor: "Abdugafforov M.",
    price: "1 400 000 so'm",
    image: "/java-foundation.png",
    color: "bg-blue-200"
  },
  {
    id: 2,
    title: "Python Foundation",
    category: "Foundation",
    duration: "2 soat",
    lectures: "48",
    instructor: "Giyosov R.",
    price: "1 400 000 so'm",
    image: "/python-foundation.png",
    color: "bg-blue-100"
  },
  {
    id: 3,
    title: "JS Foundation",
    category: "Foundation",
    duration: "2 soat",
    lectures: "48 ta ma'ruza",
    instructor: "Rasulmatov M.",
    price: "1 400 000 so'm",
    image: "/js-foundation.png",
    color: "bg-teal-100"
  },
];


export default function PopularCoursesSection() {
  return (
    <section id="courses" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">
            Bizning mashhur kurslarimiz
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
            >
              <Card className="overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className={`${course.color} p-6 flex items-center justify-center h-64 relative`}>
                  {/* 3D Illustration Placeholder */}
                  <div className="w-48 h-48 bg-white/20 rounded flex items-center justify-center">
                    {index === 0 ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#ff6b6b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 15V8h18v7"></path>
                        <path d="M12 12v6"></path>
                        <path d="M8 18h8"></path>
                        <rect x="7" y="3" width="10" height="5"></rect>
                      </svg>
                    ) : index === 1 ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#4cabdb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 9v6m3-3H9"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#ffc107" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 4v12A4 4 0 0 1 16 20H8a4 4 0 0 1-4-4V4"></path>
                        <polyline points="12 12 12 8"></polyline>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                      </svg>
                    )}
                  </div>
                  <Badge className="absolute top-4 right-4 bg-white text-gray-700 hover:bg-gray-100">
                    {course.category}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-3">{course.title}</h3>
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FileText size={14} />
                      <span>{course.lectures}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                      <User size={14} />
                    </div>
                    <span className="text-sm font-medium">{course.instructor}</span>
                  </div>
                </CardContent>
                <CardFooter className="px-4 py-3 border-t border-gray-100 flex justify-between items-center">
                  <span className="font-bold text-pink-500">{course.price}</span>
           
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}