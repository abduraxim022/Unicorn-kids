'use client';
import React from 'react';
import Slider from "react-slick";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './carousel.css'
import Image from 'next/image';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bgColor: string;
}

const TeamShowcase: React.FC = () => {
  const teamMembers: TeamMember[] = [
    { id: 1, name: "Robert David", role: "UI/UX Designer", image: "/api/placeholder/400/400", bgColor: "bg-orange-50" },
    { id: 2, name: "Ethan Samuel", role: "Developer", image: "/api/placeholder/400/400", bgColor: "bg-emerald-50" },
    { id: 3, name: "Alexander Paul", role: "Project Manager", image: "/api/placeholder/400/400", bgColor: "bg-amber-50" },
    { id: 4, name: "William Henry", role: "Digital Marketer", image: "/api/placeholder/400/400", bgColor: "bg-pink-50" },
    { id: 5, name: "James Robert", role: "Project Manager", image: "/api/placeholder/400/400", bgColor: "bg-gray-100" },
    { id: 6, name: "Brandon Michael", role: "Digital Marketer", image: "/api/placeholder/400/400", bgColor: "bg-emerald-50" },
    { id: 7, name: "Matthew John", role: "Software Engineer", image: "/api/placeholder/400/400", bgColor: "bg-amber-50" },
    { id: 8, name: "Joseph Andrew", role: "UI/UX Designer", image: "/api/placeholder/400/400", bgColor: "bg-pink-50" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay:true,
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
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Learn from the Best Talent</h1>
        <h2 className="text-3xl font-bold tracking-tight mb-8">in the Industry</h2>
      </div>

      <Slider {...settings}>
        {teamMembers.map((member) => (
          <div key={member.id} className="px-2">
            <Card className={cn("overflow-hidden", member.bgColor)}>
              <CardContent className="p-4 flex flex-col items-center">
                <div className="w-full aspect-square mb-4 rounded-md overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg text-center">{member.name}</h3>
                <p className="text-sm text-gray-600 text-center">{member.role}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TeamShowcase;
