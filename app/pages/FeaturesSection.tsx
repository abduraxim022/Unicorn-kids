"use client"
import * as React from "react"; 
import { motion, useInView, useMotionValue, animate, AnimationPlaybackControls } from "framer-motion";
import { JSX, useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card"; 


interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
}

interface FeatureCardProps {
  iconPath: React.ReactNode; 
  title: string;
  description: string;
  colorClass: string;
}

interface StatItemProps {
  value: number;
  label: string;
  suffix?: string;
}

interface ModuleItem {
    id: number;
    title: string;
    description: string;
    colorClass: string;
    iconColor: string;
    icon: (color: string) => React.ReactNode; 
}


const Counter: React.FC<CounterProps> = ({ from = 0, to, duration = 2, suffix = "" }) => {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(from); 
  const [display, setDisplay] = useState<number>(from); 

  useEffect(() => {
    let controls: AnimationPlaybackControls | undefined; 
    if (isInView) {
      controls = animate(count, to, {
        duration,
        onUpdate(value: number) { 
          setDisplay(Math.floor(value));
        },
      });
    }
    return () => {
        controls?.stop();
    };
  }, [isInView, count, to, duration]); 

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold">
      {display}
      {suffix}
    </span>
  );
};

const FeatureCard: React.FC<FeatureCardProps> = ({ iconPath, title, description, colorClass }) => {
  return (
    <Card className={`overflow-hidden border-0 shadow-sm h-full ${colorClass}`}>
      <CardContent className="p-6 flex flex-col items-center h-full">
        <div className="w-12 h-12 mb-4 flex items-center justify-center">
          {iconPath}
        </div>
        <h3 className="font-semibold text-2xl mb-3 text-center leading-[24px]">{title}</h3>
        <p className="text-gray-600 text-base leading-[24px] text-[rgb(78, 82, 85)] text-center font-normal">{description}</p>
      </CardContent>
    </Card>
  );
};

const StatItem: React.FC<StatItemProps> = ({ value, label, suffix = "" }) => {
  return (
    <div className="text-center">
      <div className="mb-2">
        <Counter from={0} to={value} duration={2.5} suffix={suffix} />
      </div>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

export default function SkillsMasterySection(): JSX.Element { 
  const moduleData: ModuleItem[] = [ 
    {
      id: 1,
      title: "Scratch",
      description: "Dasturlashga ilk qadam! Farzandingiz Scratch orqali interaktiv o‘yinlar va animatsiyalar yaratib, dasturlash asoslarini o‘rganadi.",
      colorClass: "bg-red-50",
      iconColor: "#ff4d8b",
      icon: (color: string): React.ReactNode => ( 
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
          <circle cx="12" cy="10" r="3"></circle>
          <line x1="8" y1="18" x2="16" y2="18"></line>
        </svg>
      )
    },
    {
      id: 2,
      title: "Photoshop",
      description: "Grafik dizayn va tasvirlarni tahrirlash! Bolalar Photoshop orqali kreativ dizayn yaratishni va tasvirlarni professional tarzda ishlashni o‘rganadilar.",
      colorClass: "bg-purple-50",
      iconColor: "#6366f1",
      icon: (color: string): React.ReactNode => ( 
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 16 C 8 12 8 8 12 8 C 16 8 16 12 12 16"></path>
          <circle cx="12" cy="12" r="1"></circle>
        </svg>
      )
    },
    {
      id: 3,
      title: "Arduino",
      description: "Robototexnika va elektronika asoslari! Ushbu modul bolalarga turli elektron qurilmalarni yaratish va dasturlash imkonini beradi.",
      colorClass: "bg-green-50",
      iconColor: "#10b981",
      icon: (color: string): React.ReactNode => ( 
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 6 L9 17 l-5-5"></path>
          <path d="M22 10 L17 5 l-1 1"></path>
        </svg>
      )
    },
    {
      id: 4,
      title: "3D Modellashtirish",
      description: "Virtual dunyoni yaratish! Ushbu modulda bolalar 3D modellashtirish asoslarini o‘rganib, o‘z virtual muhitlarini yaratishlari mumkin",
      colorClass: "bg-orange-50",
      iconColor: "#f59e0b",
      icon: (color: string): React.ReactNode => ( 
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z"/>
          <path d="M12 12l8-4.5M12 12v9M12 12L4 7.5"/>
        </svg>
      )
    },
    {
      id: 5,
      title: "Python",
      description: "Katta imkoniyatlar dasturlash tili! Bolalar Python orqali mantiqiy fikrlashni rivojlantirib, dasturlar yaratishni o‘rganadilar",
      colorClass: "bg-blue-50",
      iconColor: "#3b82f6",
      icon: (color: string): React.ReactNode => ( 

<svg width="40" height="40" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 12H8C7.46957 12 6.96086 12.2107 6.58579 12.5858C6.21071 12.9609 6 13.4696 6 14V18C6 18.5304 6.21071 19.0391 6.58579 19.4142C6.96086 19.7893 7.46957 20 8 20H11" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> {/* Use color prop */}
<path d="M15 18H22C22.5304 18 23.0391 17.7893 23.4142 17.4142C23.7893 17.0391 24 16.5304 24 16V12C24 11.4696 23.7893 10.9609 23.4142 10.5858C23.0391 10.2107 22.5304 10 22 10H19" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> {/* Use color prop */}
<path d="M11 12V8C11 7.46957 11.2107 6.96086 11.5858 6.58579C11.9609 6.21071 12.4696 6 13 6H17C17.5304 6 18.0391 6.21071 18.4142 6.58579C18.7893 6.96086 19 7.46957 19 8V13C19 13.5304 18.7893 14.0391 18.4142 14.4142C18.0391 14.7893 17.5304 15 17 15H13C12.4696 15 11.9609 15.2107 11.5858 15.5858C11.2107 15.9609 11 16.4696 11 17V22C11 22.5304 11.2107 23.0391 11.5858 23.4142C11.9609 23.7893 12.4696 24 13 24H17C17.5304 24 18.0391 23.7893 18.4142 23.4142C18.7893 23.0391 19 22.5304 19 22V18" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> {/* Use color prop */}
<path d="M14 9V9.01" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> 
<path d="M16 21V21.01" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      )
    },
    {
      id: 6,
      title: "Video Montaj",
      description: "Raqamli media dunyosiga ilk qadam! Farzandingiz videolarni professional tarzda montaj qilish, effektlar qo‘shish va kreativ kontent yaratishni o‘rganadi",
      colorClass: "bg-pink-50",
      iconColor: "#ec4899",
      icon: (color: string): React.ReactNode => ( 
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="23 7 16 12 23 17 23 7"/>
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
              Bizda qanday Kids
              <br />
              Modullari bor?
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-600">
              Farzandingizning qiziqishlarini aniqlash va uning kelajagini
              to‘g‘ri yo‘naltirish uchun biz 6 ta muhim modul asosida o‘qitish
              jarayonini tashkil qildik. Har bir modul bolalarning qiziqishlari
              va qobiliyatlarini rivojlantirishga yordam beradi.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 md:mb-16">
          {moduleData.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-full"
            >
              <FeatureCard
                iconPath={module.icon(module.iconColor)}
                title={module.title}
                description={module.description}
                colorClass={module.colorClass}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 p-4 md:p-8 lg:p-10 bg-[#f8f8f8] rounded-2xl"
        >
          <StatItem value={1200} label="Muvaffaqiyatli tamomlagan" suffix="+" />
          <StatItem
            value={88}
            label="Keyingi modulni davom ettirish istagi"
            suffix="%"
          />
          <StatItem value={90} label="Kursni yakunlash darajasi" suffix="%" />
          <StatItem
            value={11}
            label="Eng ko‘p yosh qatnashuvchilari"
            suffix="" 
          />
        </motion.div>
      </div>
    </section>
  );
}
