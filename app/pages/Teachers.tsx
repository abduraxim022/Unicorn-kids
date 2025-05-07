'use client';
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './carousel.css';
import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';
import A from '../../public/a.jpg'
import B from '../../public/b.jpg'
import C from '../../public/c.jpg'
import D from '../../public/d.jpg'

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: StaticImageData;
  }

const TeamShowcase: React.FC = () => {
  const teamMembers: TeamMember[] = [
    { id: 1, name: "Sharifboyev MuhammadYasin", role: "Software Developer", image: A },
    { id: 2, name: "Dilmurod Normurodov", role: " Software Engineer", image: B},
    { id: 3, name: " Abdugafforov Muhammadsolih ", role: "Software Developer", image: C},
    { id: 4, name: "Islamova Sevan", role: "Software Developer", image: D  },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div id='mentors' className="container mx-auto px-8 py-12">
  <motion.div
  className="text-center mb-12"
  initial={{ opacity: 0, y: -30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <h1 className="text-4xl font-bold tracking-tight">
    Learn from the Best Talent
  </h1>
  <h2 className="text-3xl font-bold tracking-tight mb-8">
    in the Industry
  </h2>
</motion.div>

      <Slider {...settings}>
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="px-2"
          >
              <div className="pb-4  rounded-[8px] ">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="h-full object-cover rounded-[8px] w-full aspect-square mb-4 overflow-hidden"
                  />
                <h3 className="font-semibold text-lg text-center">{member.name}</h3>
                <p className="text-sm text-gray-600 text-center">{member.role}</p>
              </div>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};

export default TeamShowcase;
