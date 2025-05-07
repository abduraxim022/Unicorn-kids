"use client";
import * as React from "react";
import {
  motion,
  useInView,
  useMotionValue,
  animate,
  AnimationPlaybackControls,
} from "framer-motion";
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

const Counter: React.FC<CounterProps> = ({
  from = 0,
  to,
  duration = 2,
  suffix = "",
}) => {
  const ref = useRef<HTMLSpanElement>(null);
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

const FeatureCard: React.FC<FeatureCardProps> = ({
  iconPath,
  title,
  description,
  colorClass,
}) => {
  return (
    <Card className={`overflow-hidden border-0 shadow-sm h-full ${colorClass}`}>
      <CardContent className="p-6 flex flex-col items-center h-full">
        <div className="w-12 h-12 mb-4 flex items-center justify-center">
          {iconPath}
        </div>
        <h3 className="font-semibold text-2xl mb-3 text-center leading-[24px]">
          {title}
        </h3>
        <p className="text-gray-600 text-base leading-[24px] text-[rgb(78, 82, 85)] text-center font-normal">
          {description}
        </p>
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
      description:
        "Dasturlashga ilk qadam! Farzandingiz Scratch orqali interaktiv o‘yinlar va animatsiyalar yaratib, dasturlash asoslarini o‘rganadi.",
      colorClass: "bg-red-50",
      iconColor: "#ff4d8b",
      icon: (): React.ReactNode => (
        <svg
          width="40"
          height="40"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.3908 7.39009C18.5165 7.51592 18.6735 7.60594 18.8456 7.65089C19.0177 7.69583 19.1987 7.69406 19.3698 7.64577C19.541 7.59747 19.6962 7.50439 19.8194 7.37613C19.9427 7.24787 20.0294 7.08906 20.0708 6.91609C20.1746 6.48399 20.3918 6.08736 20.6998 5.76707C21.0079 5.44677 21.3957 5.21437 21.8235 5.09381C22.2512 4.97325 22.7033 4.96888 23.1333 5.08116C23.5633 5.19343 23.9556 5.41829 24.2697 5.73258C24.5839 6.04687 24.8087 6.43922 24.9208 6.86924C25.0329 7.29926 25.0284 7.75139 24.9077 8.17908C24.787 8.60677 24.5545 8.99456 24.2341 9.3025C23.9137 9.61045 23.517 9.82743 23.0848 9.93109C22.9119 9.97249 22.7531 10.0593 22.6248 10.1825C22.4965 10.3057 22.4035 10.4609 22.3552 10.6321C22.3069 10.8033 22.3051 10.9842 22.35 11.1563C22.395 11.3284 22.485 11.4854 22.6108 11.6111L24.2938 13.2931C24.518 13.5173 24.6958 13.7834 24.8172 14.0763C24.9385 14.3691 25.0009 14.6831 25.0009 15.0001C25.0009 15.3171 24.9385 15.631 24.8172 15.9239C24.6958 16.2168 24.518 16.4829 24.2938 16.7071L22.6108 18.3901C22.4851 18.5159 22.3281 18.6059 22.1561 18.6509C21.984 18.6958 21.803 18.6941 21.6318 18.6458C21.4607 18.5975 21.3055 18.5044 21.1822 18.3761C21.059 18.2479 20.9722 18.0891 20.9308 17.9161C20.827 17.484 20.6099 17.0874 20.3019 16.7671C19.9938 16.4468 19.606 16.2144 19.1782 16.0938C18.7505 15.9733 18.2984 15.9689 17.8684 16.0812C17.4384 16.1934 17.0461 16.4183 16.7319 16.7326C16.4178 17.0469 16.193 17.4392 16.0809 17.8692C15.9688 18.2993 15.9733 18.7514 16.094 19.1791C16.2147 19.6068 16.4472 19.9946 16.7676 20.3025C17.088 20.6104 17.4847 20.8274 17.9168 20.9311C18.0898 20.9725 18.2486 21.0593 18.3769 21.1825C18.5051 21.3057 18.5982 21.4609 18.6465 21.6321C18.6948 21.8033 18.6966 21.9842 18.6516 22.1563C18.6067 22.3284 18.5167 22.4854 18.3908 22.6111L16.7078 24.2931C16.4837 24.5173 16.2176 24.6951 15.9247 24.8164C15.6318 24.9377 15.3179 25.0002 15.0008 25.0002C14.6838 25.0002 14.3699 24.9377 14.077 24.8164C13.7841 24.6951 13.518 24.5173 13.2938 24.2931L11.6108 22.6101C11.4851 22.4843 11.3281 22.3942 11.1561 22.3493C10.984 22.3043 10.803 22.3061 10.6318 22.3544C10.4607 22.4027 10.3055 22.4958 10.1822 22.624C10.059 22.7523 9.97224 22.9111 9.93084 23.0841C9.82704 23.5162 9.60993 23.9128 9.30187 24.2331C8.99382 24.5534 8.60596 24.7858 8.17823 24.9064C7.7505 25.0269 7.29836 25.0313 6.86838 24.919C6.4384 24.8067 6.04612 24.5819 5.73194 24.2676C5.41776 23.9533 5.19303 23.561 5.08089 23.1309C4.96876 22.7009 4.97328 22.2488 5.09398 21.8211C5.21468 21.3934 5.44721 21.0056 5.76761 20.6977C6.08801 20.3897 6.4847 20.1728 6.91684 20.0691C7.08982 20.0277 7.24862 19.9409 7.37688 19.8177C7.50514 19.6945 7.59822 19.5393 7.64652 19.3681C7.69481 19.1969 7.69658 19.016 7.65164 18.8439C7.6067 18.6718 7.51667 18.5148 7.39084 18.3891L5.70784 16.7071C5.48367 16.4829 5.30584 16.2168 5.18452 15.9239C5.0632 15.631 5.00075 15.3171 5.00075 15.0001C5.00075 14.6831 5.0632 14.3691 5.18452 14.0763C5.30584 13.7834 5.48367 13.5173 5.70784 13.2931L7.39084 11.6101C7.51654 11.4843 7.67353 11.3942 7.84562 11.3493C8.01771 11.3043 8.19867 11.3061 8.36985 11.3544C8.54102 11.4027 8.69622 11.4958 8.81944 11.624C8.94266 11.7523 9.02944 11.9111 9.07084 12.0841C9.17465 12.5162 9.39175 12.9128 9.69981 13.2331C10.0079 13.5534 10.3957 13.7858 10.8235 13.9064C11.2512 14.0269 11.7033 14.0313 12.1333 13.919C12.5633 13.8067 12.9556 13.5819 13.2697 13.2676C13.5839 12.9533 13.8087 12.561 13.9208 12.1309C14.0329 11.7009 14.0284 11.2488 13.9077 10.8211C13.787 10.3934 13.5545 10.0056 13.2341 9.69767C12.9137 9.38973 12.517 9.17275 12.0848 9.06909C11.9119 9.02769 11.7531 8.94091 11.6248 8.81769C11.4965 8.69447 11.4035 8.53927 11.3552 8.36809C11.3069 8.19692 11.3051 8.01596 11.35 7.84387C11.395 7.67178 11.485 7.51479 11.6108 7.38909L13.2938 5.70709C13.518 5.48291 13.7841 5.30509 14.077 5.18377C14.3699 5.06244 14.6838 5 15.0008 5C15.3179 5 15.6318 5.06244 15.9247 5.18377C16.2176 5.30509 16.4837 5.48291 16.7078 5.70709L18.3908 7.39009Z"
            stroke="#82602D"
            strokeWidth="1.5"
            strokeLinecap="round"
           strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Photoshop",
      description:
        "Grafik dizayn va tasvirlarni tahrirlash! Bolalar Photoshop orqali kreativ dizayn yaratishni va tasvirlarni professional tarzda ishlashni o‘rganadilar.",
      colorClass: "bg-purple-100",
      iconColor: "#6366f1",
      icon: (): React.ReactNode => (
        <svg
          width="40"
          height="40"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.0547 13.927L20.1247 5.86702C20.3877 5.59546 20.7022 5.37896 21.0498 5.23013C21.3973 5.08129 21.771 5.00309 22.1491 5.00009C22.5271 4.99709 22.902 5.06934 23.2519 5.21263C23.6018 5.35593 23.9196 5.5674 24.187 5.83475C24.4543 6.10209 24.6658 6.41995 24.8091 6.76982C24.9524 7.11969 25.0246 7.49457 25.0216 7.87264C25.0186 8.2507 24.9404 8.62439 24.7916 8.97194C24.6427 9.31949 24.4262 9.63396 24.1547 9.89702L16.0947 17.977"
            stroke="#005FA4"
            strokeWidth="1.5"
            strokeLinecap="round"
           strokeLinejoin="round"
          />
          <path
            d="M10.0661 16.967C8.40612 16.967 7.06612 18.317 7.06612 19.987C7.06612 21.317 4.56612 21.507 5.06612 22.007C6.14612 23.107 7.55612 24.027 9.06612 24.027C11.2661 24.027 13.0661 22.227 13.0661 19.987C13.0674 19.5918 12.9909 19.2001 12.8408 18.8344C12.6908 18.4687 12.4702 18.1362 12.1916 17.8557C11.913 17.5753 11.5819 17.3525 11.2172 17.2C10.8525 17.0475 10.4614 16.9684 10.0661 16.967Z"
            stroke="#005FA4"
            strokeWidth="1.5"
            strokeLinecap="round"
           strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Arduino",
      description:
        "Robototexnika va elektronika asoslari! Ushbu modul bolalarga turli elektron qurilmalarni yaratish va dasturlash imkonini beradi.",
      colorClass: "bg-green-100",
      iconColor: "#10b981",
      icon: (): React.ReactNode => (
        <svg
          width="40"
          height="40"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 23V25"
            stroke="#1F625C"
            strokeWidth="1.5"
            strokeLinecap="round"
           strokeLinejoin="round"
          />
          <path
            d="M15 5V7"
            stroke="#1F625C"
            strokeWidth="1.5"
            strokeLinecap="round"
           strokeLinejoin="round"
          />
          <path
            d="M20 23V25"
            stroke="#1F625C"
            strokeWidth="1.5"
            strokeLinecap="round"
           strokeLinejoin="round"
          />
          <path
            d="M20 5V7"
            stroke="#1F625C"
            strokeWidth="1.5"
            strokeLinecap="round"
           strokeLinejoin="round"
          />
          <path
            d="M5 15H7"
            stroke="#1F625C"
            strokeWidth="1.5"
            strokeLinecap="round"
           strokeLinejoin="round"
          />
          <path
            d="M5 20H7"
            stroke="#1F625C"
            strokeWidth="1.5"
            strokeLinecap="round"
           strokeLinejoin="round"
          />
          <path
            d="M5 10H7"
            stroke="#1F625C"
            strokeWidth="1.5"
            strokeLinecap="round"
           strokeLinejoin="round"
          />
          <path
            d="M23 15H25"
            stroke="#1F625C"
            strokeWidth="1.5"
            strokeLinecap="round"
           strokeLinejoin="round"
          />
          <path
            d="M23 20H25"
            stroke="#1F625C"
            strokeWidth="1.5"
            strokeLinecap="round"
           strokeLinejoin="round"
          />
          <path
            d="M23 10H25"
            stroke="#1F625C"
            strokeWidth="1.5"
            strokeLinecap="round"
           strokeLinejoin="round"
          />
          <path
            d="M10 23V25"
            stroke="#1F625C"
            strokeWidth="1.5"
            strokeLinecap="round"
           strokeLinejoin="round"
          />
          <path
            d="M10 5V7"
            stroke="#1F625C"
            strokeWidth="1.5"
            strokeLinecap="round"
           strokeLinejoin="round"
          />
          <path
            d="M21 7H9C7.89543 7 7 7.89543 7 9V21C7 22.1046 7.89543 23 9 23H21C22.1046 23 23 22.1046 23 21V9C23 7.89543 22.1046 7 21 7Z"
            stroke="#1F625C"
            strokeWidth="1.5"
            strokeLinecap="round"
           strokeLinejoin="round"
          />
          <path
            d="M18 11H12C11.4477 11 11 11.4477 11 12V18C11 18.5523 11.4477 19 12 19H18C18.5523 19 19 18.5523 19 18V12C19 11.4477 18.5523 11 18 11Z"
            stroke="#1F625C"
            strokeWidth="1.5"
            strokeLinecap="round"
           strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "3D Modellashtirish",
      description:
        "Virtual dunyoni yaratish! Ushbu modulda bolalar 3D modellashtirish asoslarini o‘rganib, o‘z virtual muhitlarini yaratishlari mumkin",
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
          <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
          <path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" />
        </svg>
      ),
    },
    {
      id: 5,
      title: "Python",
      description:
        "Katta imkoniyatlar dasturlash tili! Bolalar Python orqali mantiqiy fikrlashni rivojlantirib, dasturlar yaratishni o‘rganadilar",
      colorClass: "bg-indigo-50",
      iconColor: "#3b82f6",
      icon: (): React.ReactNode => (
    
<svg width="40" height="40" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 12H8C7.46957 12 6.96086 12.2107 6.58579 12.5858C6.21071 12.9609 6 13.4696 6 14V18C6 18.5304 6.21071 19.0391 6.58579 19.4142C6.96086 19.7893 7.46957 20 8 20H11" stroke="#333E7F" strokeWidth="1.5" strokeLinecap="round"strokeLinejoin="round"/>
<path d="M15 18H22C22.5304 18 23.0391 17.7893 23.4142 17.4142C23.7893 17.0391 24 16.5304 24 16V12C24 11.4696 23.7893 10.9609 23.4142 10.5858C23.0391 10.2107 22.5304 10 22 10H19" stroke="#333E7F" strokeWidth="1.5" strokeLinecap="round"strokeLinejoin="round"/>
<path d="M11 12V8C11 7.46957 11.2107 6.96086 11.5858 6.58579C11.9609 6.21071 12.4696 6 13 6H17C17.5304 6 18.0391 6.21071 18.4142 6.58579C18.7893 6.96086 19 7.46957 19 8V13C19 13.5304 18.7893 14.0391 18.4142 14.4142C18.0391 14.7893 17.5304 15 17 15H13C12.4696 15 11.9609 15.2107 11.5858 15.5858C11.2107 15.9609 11 16.4696 11 17V22C11 22.5304 11.2107 23.0391 11.5858 23.4142C11.9609 23.7893 12.4696 24 13 24H17C17.5304 24 18.0391 23.7893 18.4142 23.4142C18.7893 23.0391 19 22.5304 19 22V18" stroke="#333E7F" strokeWidth="1.5" strokeLinecap="round"strokeLinejoin="round"/>
<path d="M14 9V9.01" stroke="#333E7F" strokeWidth="1.5" strokeLinecap="round"strokeLinejoin="round"/>
<path d="M16 21V21.01" stroke="#333E7F" strokeWidth="1.5" strokeLinecap="round"strokeLinejoin="round"/>
</svg>

      ),
    },
    {
      id: 6,
      title: "Video Montaj",
      description:
        "Raqamli media dunyosiga ilk qadam! Farzandingiz videolarni professional tarzda montaj qilish, effektlar qo‘shish va kreativ kontent yaratishni o‘rganadi",
      colorClass: "bg-pink-50",
      iconColor: "#ec4899",
      icon: (): React.ReactNode => (
 
<svg width="40" height="40" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 17.1402V11.7872C13 11.4477 13.376 11.2429 13.6612 11.4272L17.4848 13.8978C17.7349 14.0595 17.748 14.4207 17.5102 14.6L13.6866 17.4824C13.4042 17.6953 13 17.4939 13 17.1402Z" stroke="#624C9F" strokeWidth="1.2"/>
<path d="M24.9684 13.1111C24.9684 9.22222 25.623 7 20.9752 7C17.7802 7 10.991 7 7.99572 7C6.99684 7 5.00091 8.18544 5.00046 10.8889C5 13.6667 5 16.4444 5 18.1111C5 22 5.77027 22 10.2632 22" stroke="#624C9F" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M15.2734 19.5814C15.0422 19.4304 14.7324 19.4954 14.5814 19.7266C14.4304 19.9578 14.4954 20.2676 14.7266 20.4186L15.2734 19.5814ZM20.7266 24.3374L21.1452 24.6108L21.692 23.7735L21.2734 23.5001L20.7266 24.3374ZM14.7266 24.5814C14.4954 24.7324 14.4304 25.0422 14.5814 25.2734C14.7324 25.5046 15.0422 25.5696 15.2734 25.4186L14.7266 24.5814ZM21.2734 21.4999L21.692 21.2265L21.1452 20.3892L20.7266 20.6626L21.2734 21.4999ZM14.7266 20.4186L20.7266 24.3374L21.2734 23.5001L15.2734 19.5814L14.7266 20.4186ZM15.2734 25.4186L21.2734 21.4999L20.7266 20.6626L14.7266 24.5814L15.2734 25.4186Z" fill="#624C9F"/>
<mask id="path-5-inside-1_1025_3124" fill="white">
<path d="M23.9999 24.7991C23.9999 25.5723 23.3283 26.1991 22.4999 26.1991C21.6715 26.1991 21 25.5723 21 24.7991C21 24.0259 21.6715 23.3991 22.4999 23.3991C23.3283 23.3991 23.9999 24.0259 23.9999 24.7991ZM21.7491 24.7991C21.7491 25.1861 22.0852 25.4999 22.4999 25.4999C22.9146 25.4999 23.2508 25.1861 23.2508 24.7991C23.2508 24.412 22.9146 24.0982 22.4999 24.0982C22.0852 24.0982 21.7491 24.412 21.7491 24.7991Z"/>
<path d="M23.9999 20.2008C23.9999 19.4276 23.3283 18.8008 22.4999 18.8008C21.6715 18.8008 21 19.4276 21 20.2008C21 20.974 21.6715 21.6008 22.4999 21.6008C23.3283 21.6008 23.9999 20.974 23.9999 20.2008ZM21.7491 20.2008C21.7491 19.8138 22.0852 19.5 22.4999 19.5C22.9146 19.5 23.2508 19.8138 23.2508 20.2008C23.2508 20.5879 22.9146 20.9017 22.4999 20.9017C22.0852 20.9017 21.7491 20.5879 21.7491 20.2008Z"/>
</mask>
<path d="M22.9999 24.7991C22.9999 24.9561 22.8421 25.1991 22.4999 25.1991V27.1991C23.8145 27.1991 24.9999 26.1884 24.9999 24.7991H22.9999ZM22.4999 25.1991C22.1578 25.1991 22 24.9561 22 24.7991H20C20 26.1884 21.1853 27.1991 22.4999 27.1991V25.1991ZM22 24.7991C22 24.642 22.1578 24.3991 22.4999 24.3991V22.3991C21.1853 22.3991 20 23.4098 20 24.7991H22ZM22.4999 24.3991C22.8421 24.3991 22.9999 24.642 22.9999 24.7991H24.9999C24.9999 23.4098 23.8145 22.3991 22.4999 22.3991V24.3991ZM20.7491 24.7991C20.7491 25.8022 21.599 26.4999 22.4999 26.4999V24.4999C22.5466 24.4999 22.6026 24.5181 22.6513 24.5636C22.7012 24.6102 22.7491 24.6932 22.7491 24.7991H20.7491ZM22.4999 26.4999C23.4009 26.4999 24.2508 25.8022 24.2508 24.7991H22.2508C22.2508 24.6932 22.2986 24.6102 22.3485 24.5636C22.3973 24.5181 22.4532 24.4999 22.4999 24.4999V26.4999ZM24.2508 24.7991C24.2508 23.7959 23.4009 23.0982 22.4999 23.0982V25.0982C22.4532 25.0982 22.3973 25.08 22.3485 25.0345C22.2986 24.9879 22.2508 24.9049 22.2508 24.7991H24.2508ZM22.4999 23.0982C21.599 23.0982 20.7491 23.7959 20.7491 24.7991H22.7491C22.7491 24.9049 22.7012 24.9879 22.6513 25.0345C22.6026 25.08 22.5466 25.0982 22.4999 25.0982V23.0982ZM24.9999 20.2008C24.9999 18.8115 23.8145 17.8008 22.4999 17.8008V19.8008C22.8421 19.8008 22.9999 20.0438 22.9999 20.2008H24.9999ZM22.4999 17.8008C21.1853 17.8008 20 18.8115 20 20.2008H22C22 20.0438 22.1578 19.8008 22.4999 19.8008V17.8008ZM20 20.2008C20 21.5902 21.1853 22.6008 22.4999 22.6008V20.6008C22.1578 20.6008 22 20.3579 22 20.2008H20ZM22.4999 22.6008C23.8145 22.6008 24.9999 21.5902 24.9999 20.2008H22.9999C22.9999 20.3579 22.8421 20.6008 22.4999 20.6008V22.6008ZM22.7491 20.2008C22.7491 20.3067 22.7012 20.3897 22.6513 20.4363C22.6026 20.4818 22.5466 20.5 22.4999 20.5V18.5C21.599 18.5 20.7491 19.1977 20.7491 20.2008H22.7491ZM22.4999 20.5C22.4532 20.5 22.3973 20.4818 22.3485 20.4363C22.2986 20.3897 22.2508 20.3067 22.2508 20.2008H24.2508C24.2508 19.1977 23.4009 18.5 22.4999 18.5V20.5ZM22.2508 20.2008C22.2508 20.095 22.2986 20.012 22.3485 19.9654C22.3973 19.9199 22.4532 19.9017 22.4999 19.9017V21.9017C23.4009 21.9017 24.2508 21.204 24.2508 20.2008H22.2508ZM22.4999 19.9017C22.5466 19.9017 22.6026 19.9199 22.6513 19.9654C22.7012 20.012 22.7491 20.095 22.7491 20.2008H20.7491C20.7491 21.204 21.599 21.9017 22.4999 21.9017V19.9017Z" fill="#624C9F" mask="url(#path-5-inside-1_1025_3124)"/>
</svg>

      ),
    },
  ];

  return (
    <section className="py-16 md:py-10">
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
