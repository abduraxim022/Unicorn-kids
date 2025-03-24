"use client"
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  { 
    id: 1, 
    name: "John Doe", 
    role: "Web Developer", 
    feedback: "This platform completely transformed how I build websites. It's fast, reliable, and easy to use." 
  },
  { 
    id: 2, 
    name: "Jane Smith", 
    role: "Product Designer", 
    feedback: "Absolutely love the flexibility and performance. It’s now my go-to for every project." 
  },
  { 
    id: 3, 
    name: "Michael Lee", 
    role: "Marketing Specialist", 
    feedback: "The UI components and animations are just perfect. It gives a professional touch to my websites." 
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md text-center text-gray-800"
            >
              <FaQuoteLeft className="text-blue-500 text-4xl mb-4 mx-auto" />
              <p className="mb-4 italic">"{testimonial.feedback}"</p>
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <span className="text-gray-500">{testimonial.role}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
