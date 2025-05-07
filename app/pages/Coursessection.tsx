"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, FileText, User } from "lucide-react";
import Image from "next/image";
import alpha from '../../public/alpha.jpg'
import beta from '../../public/beta.jpg'
import delta from '../../public/delta.jpg'

const courses = [
  {
    id: 1,
    title: "Java Foundation",
    category: "Foundation",
    duration: "2 soat",
    lectures: "48 ta ma'ruza",
    instructor: "Abdugafforov M.",
    price: "1 400 000 so'm",
    image: alpha,
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
    image: beta,
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
    image: delta,
    color: "bg-teal-100"
  },
];


export default function PopularCoursesSection() {
  return (
    <section id="courses" className="py-8">
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
              <Card className="p-0 rounded-[8px]">
                    <Image
                      src={course.image}
                      alt={course.title}
                      className=" w-full h-full object-contain  rounded-[8px]"
                      priority={index === 0}
                    />
                  <Badge className="absolute top-4 right-4 bg-white text-gray-700 hover:bg-gray-100">
                    {course.category}
                  </Badge>
                <CardContent className="">
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