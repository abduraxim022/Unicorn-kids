"use client"
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SlideArrowButton from "@/components/Getstarted";

const mentors = [
  { 
    id: 1, 
    name: "Robert David", 
    role: "UI/UX Designer", 
    color: "bg-red-100",
    skills: ["Figma", "Wireframe", "Notion"] 
  },
  { 
    id: 2, 
    name: "Ethan Samuel", 
    role: "Developer", 
    color: "bg-emerald-100",
    skills: ["Figma", "Wireframe", "Notion"] 
  },
  { 
    id: 3, 
    name: "Alexander Paul", 
    role: "Project Manager", 
    color: "bg-yellow-100",
    skills: ["Figma", "Wireframe", "Notion"] 
  },
  { 
    id: 4, 
    name: "William Henry", 
    role: "Digital Marketer", 
    color: "bg-pink-100",
    skills: ["Figma", "Wireframe", "Notion"] 
  },
  { 
    id: 5, 
    name: "James Robert", 
    role: "Project Manager", 
    color: "bg-orange-100",
    skills: ["Figma", "Wireframe", "Notion"] 
  },
  { 
    id: 6, 
    name: "Brandon Michael", 
    role: "Digital Marketer", 
    color: "bg-teal-100",
    skills: ["Figma", "Wireframe", "Notion"] 
  },
  { 
    id: 7, 
    name: "Matthew John", 
    role: "Software Engineer", 
    color: "bg-amber-100",
    skills: ["Figma", "Wireframe", "Notion"] 
  },
  { 
    id: 8, 
    name: "Joseph Andrew", 
    role: "UI/UX Designer", 
    color: "bg-rose-100",
    skills: ["Figma", "Wireframe", "Notion"] 
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function MentorsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-teal-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
            Meet the Next Generation of<br />Masterful Mentors
          </h2>
          <p className="text-gray-600">
            Connect with the next wave of expert mentors, guiding you with fresh
            perspectives, innovative insights, and proven expertise.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {mentors.map((mentor) => (
            <motion.div key={mentor.id} variants={itemVariants}>
              <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex flex-col items-center">
                  <div className={`w-16 h-16 rounded-full ${mentor.color} mb-4 flex items-center justify-center`}>
                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{mentor.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{mentor.role}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {mentor.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="bg-white text-gray-600 font-normal">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-10"
        >
          <SlideArrowButton text=" View all menotrs"/>
        </motion.div>
      </div>
    </section>
  );
}