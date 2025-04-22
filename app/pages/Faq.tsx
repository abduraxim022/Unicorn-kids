"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
  {
    question: "Topshiriqlarim va baholarimni kuzata olishim mumkinmi?",
    answer: `✅ Albatta! Har bir o‘quvchi va ota-ona unicornschool.uz platformasidagi shaxsiy kabinet orqali:

📝 Barcha uyga vazifalarni ko‘rish va topshirish

📊 O‘quvchining baholari va progressini kuzatish

📅 Dars davomati (qatnashgan/qatnashmagan kunlari)

💰 To‘lovlar tarixi haqida ma‘lumot olish

⚠️ Qo‘shimcha: Ota-onalar uchun maxsus mobil ilova orqali bolangizning barcha faoliyati haqida bildirishnomalar olish mumkin!`
  },
  {
    question: "Kompyuter bo‘lishi shartmi?",
    answer: "✅ Ha, shaxsiy kompyuter (noutbuk yoki monoblok) bo‘lishi tavsiya etiladi. Agar hozircha kompyuteringiz bo‘lmasa, biz 1 oy muddatga darslarda foydalanish uchun ijaraga monoblok berishimiz mumkin. Biroq, uyda mashq qilish uchun o‘zingizning qurilmangiz bo‘lishi yaxshiroq!"
  },
  {
    question: "Bir guruhda nechta o‘quvchi bo‘ladi?",
    answer: "📚 Har bir guruhda 12-15 ta o‘quvchi bo‘ladi. Bu bizga har bir bolaga individual yondashish imkonini beradi."
  },
  {
    question: "Darslar qaysi tillarda o‘tiladi?",
    answer: "🗣️ Darslar o‘zbek va rus tillaridagi alohida guruhlarda olib boriladi. Ota-onalar bolasi uchun qulay tilni tanlashi mumkin."
  },
  {
    question: "Kursga yozilish uchun qanday hujjatlar kerak?",
    answer: `📄 Bepul ochiq darsda qatnashib ko‘rish (birinchi dars bepul!). Keyin:

    Ota-ona va Unicorn shartnoma imzolaydi (bola 18 yoshdan kichik bo‘lgani uchun).
    
    Ota-ona passport nusxasi kerak bo‘ladi
    `
  },
  {
    question: "Saytda o‘quvchilar uchun qo‘shimcha imkoniyatlar bormi?",
    answer: `💻 Ha! Har bir o‘quvchining unicornschool.uz saytida shaxsiy kabineti mavjud. Unda:

    Barcha uyga vazifalar va materiallar joylashgan.

    Topshiriqlarni onlayn topshirish mumkin.

    Ota-onalar bolaning progressini real vaqtda ko‘rishlari mumkin.
    `
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
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
          Tez-tez so‘raladigan savollar
        </h2>
        <p className="text-gray-600 mb-10">
          Tez-tez so‘raladigan savollar umumiy so‘rovlarga tezkor javoblarni taklif qiladi va
          foydalanuvchilarni xususiyat va funksiyalar bo‘yicha osonlikcha yo‘naltiradi.
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
              openIndex === index ? "shadow-lg" : ""
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
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{duration:0.5,ease:"easeOut"}}
                className="mt-2 text-gray-600 whitespace-pre-line"
              >
                {item.answer}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
