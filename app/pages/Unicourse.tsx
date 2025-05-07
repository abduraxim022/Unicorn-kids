"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Course from "../../public/course.png";

interface CourseDetails {
  price: string;
  level: string;
  lessons: number;
  duration: string;
  timePerWeek: string;
  students: string;
}

export default function Unicourse() {
  const headerRef = useRef(null);
  const mainContentRef = useRef(null);
  const courseDetailsRef = useRef(null);
  const courseDescriptionRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
  const mainContentInView = useInView(mainContentRef, {
    once: true,
    amount: 0.3,
  });
  const courseDetailsInView = useInView(courseDetailsRef, {
    once: true,
    amount: 0.3,
  });
  const courseDescriptionInView = useInView(courseDescriptionRef, {
    once: true,
    amount: 0.3,
  });
  



  const courseDetails: CourseDetails = {
    price: "690 000 so'm",
    level: "Boshlang'ich o'rta",
    lessons: 96,
    duration: "12 hafta",
    timePerWeek: "3 soat",
    students: "100+ talabalar",
  };

  return (
    <div className="h-max bg-gradient-to-r from-blue-50 to-blue-100 p-6 font-sans overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <motion.h1
          ref={headerRef}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: headerInView ? 1 : 0, y: headerInView ? 0 : -50 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-10 "
        >
          Unicorn Kids
        </motion.h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div
            ref={mainContentRef}
            initial={{ opacity: 0, x: -100 }}
            animate={{
              opacity: mainContentInView ? 1 : 0,
              x: mainContentInView ? 0 : -100,
            }}
            transition={{ duration: 0.8 }}
            className="lg:w-3/5"
          >
              <Image
                src={Course}
                alt="course image"
                className="w-full h-auto  rounded-lg  "
              />
          </motion.div>

          <motion.div
            ref={courseDetailsRef}
            initial={{ opacity: 0, x: 100 }}
            animate={{
              opacity: courseDetailsInView ? 1 : 0,
              x: courseDetailsInView ? 0 : 100,
            }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/5"
          >
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: courseDetailsInView ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl font-bold text-blue-600 mb-6"
              >
                {courseDetails.price}
              </motion.div>
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: courseDetailsInView ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-xl font-semibold  mb-6"
              >
              Kurs haqida ma’lumot
              </motion.h3>

              <div className="space-y-4">
                {Object.entries({
                  Daraja: courseDetails.level,
                  "Ma'ruzalar": `${courseDetails.lessons} ma'ruza`,
                  Davomiyligi: courseDetails.duration,
                  "Haftalik vaqt": courseDetails.timePerWeek,
                  Talabalar: courseDetails.students,
                }).map(([key, value], index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{
                      opacity: courseDetailsInView ? 1 : 0,
                      x: courseDetailsInView ? 0 : 50,
                    }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex justify-between items-center"
                  >
                    <div className="flex items-center ">
                      <svg
                        className="w-5 h-5 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {key === "Daraja" && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        )}
                        {key === "Ma'ruzalar" && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                          />
                        )}
                        {key === "Davomiyligi" && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        )}
                        {key === "Haftalik vaqt" && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        )}
                        {key === "Talabalar" && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        )}
                      </svg>
                      <span>{key}</span>
                    </div>
                    <span className="">{value}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: courseDetailsInView ? 1 : 0,
                  y: courseDetailsInView ? 0 : 20,
                }}
                transition={{ duration: 0.5, delay: 0.9 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 cursor-pointer w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center transition-colors"
              >
                <span>Kursga yozilish</span>
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Course Description */}
        <motion.div
          ref={courseDescriptionRef}
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: courseDescriptionInView ? 1 : 0,
            y: courseDescriptionInView ? 0 : 100,
          }}
          transition={{ duration: 0.8 }}
          className="p-6  mt-12"
        >
          <h2 className="text-2xl font-bold mb-6">Kurs haqida</h2>
          <p className=" mb-4">
            Unicorn Kids – 7-14 yoshdagi bolalarni zamonaviy texnologiyalar va
            ijodiy kasblar bilan tanishtiruvchi unikal platforma! Kursimizda
            bolalar 6 ta modul (HTML, CSS, JavaScript, Python, Arduino, 3D
            Modellashtirish) orqali texnologik dunyoga qadam qoʻyadi.
          </p>
          <p className=" mb-4">
            Har bir modul 2 oy davom etadi, darslar hafta kunlari 1,5 soatdan 2
            marta (haftasiga 3 soat) o’tkaziladi.
          </p>
          <p className="">
            Kurs yakunida har bir bola qaysi yoʻnalishda koʻprok qobiliyatga ega
            ekanligi aniqlanadi, ota-onalarga tavsiyalar bilan birga sertifikat
            taqdim etiladi. Maqsadimiz – bolalarning yashirin istedodlarini
            topib, ularni kelajakdagi kasb tanlashida yoʻnaltirish!
          </p>
        </motion.div>
      </div>
    </div>
  );
}
