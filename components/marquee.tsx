"use client";
import Marquee from "react-fast-marquee";

const MarqueeDemo = () => {
  const technologies = [
    "Scratch",
    "Photoshop",
    "Arduino",
    "Gaming",
    "Python",
    "3D Modellashtirish",
  ];

  return (
    <div className="w-full  bg-sky-200/75   py-2 h-[120px] flex  ">
      <Marquee
        gradient={false}
        speed={30}
        pauseOnHover={true}
      >
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="mx-3 text-3xl  font-semibold leading-[40px] text-[rgb(1, 24, 19)]"
          >
            {tech} <span className="text-[rgb(1, 24, 19)] mx-4">✱</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeDemo;
