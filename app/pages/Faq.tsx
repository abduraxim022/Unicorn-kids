"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
  {
    question: "Can I Track My Assignments and Grades?",
    answer:
      "Yes, the LMS offers a 'Gradebook' where students can view their grades, monitor feedback on assignments, and check upcoming due dates. Instructors can also post grades and comments for each submission.",
  },
  {
    question: "Does the LMS support video lessons and live classes?",
    answer:
      "Absolutely! Our platform supports both pre-recorded and live video lessons for an interactive learning experience.",
  },
  {
    question: "How can I communicate with my instructor?",
    answer:
      "Students can communicate with instructors via in-platform messaging, discussion boards, and scheduled virtual meetings.",
  },
  {
    question: "What support is available for students and instructors?",
    answer:
      "We provide 24/7 technical support, a comprehensive knowledge base, and community forums for both students and instructors.",
  },
  {
    question: "Are there interactive features for students?",
    answer:
      "Yes, students can participate in quizzes, polls, and interactive discussions to enhance their learning journey.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-4xl font-semibold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mb-10">
          Frequently Asked Questions offers quick answers to common queries,
          guiding users through features and functionalities effortlessly.
        </p>
      </motion.div>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`bg-white shadow-md p-4 rounded-lg cursor-pointer ${
              openIndex === index && "shadow-lg"
            }`}
            onClick={() => toggle(index)}
          >
            <div className="flex justify-between items-center">
              <h3
                className={`font-medium text-lg ${
                  openIndex === index ? "text-teal-600" : "text-gray-900"
                }`}
              >
                {item.question}
              </h3>
              <FaChevronDown
                className={`h-5 w-5 text-gray-400 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>
            {openIndex === index && (
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="mt-2 text-gray-600"
              >
                {item.answer}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}