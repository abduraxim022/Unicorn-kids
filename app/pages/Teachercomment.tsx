"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

const TestimonialSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Brandon Michael",
      role: "UI/UX Designer",
      image: "/api/placeholder/400/400", 
      quote:
        "An exceptional platform for career development! The current curriculum, skilled instructors, and hands-on learning ensure every moment is impactful, enriching, and truly rewarding.",
      rating: 5,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Software Developer",
      image: "/api/placeholder/400/400", 
      quote:
        "The courses completely transformed my career path. I went from knowing basics to landing my dream job in just 6 months. The community support is incredible!",
      rating: 5,
    },
    {
      id: 3,
      name: "Alex Wong",
      role: "Data Analyst",
      image: "/api/placeholder/400/400", 
      quote:
        "What sets these courses apart is the real-world projects. I gained practical experience that I could immediately add to my portfolio and discuss in interviews.",
      rating: 5,
    },
  ];

  const [activeTestimonial, setActiveTestimonial] = React.useState(0);

  return (
    <div className="bg-purple-50 py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Happy Students Say About Our Courses
              </h2>
              <p className="text-gray-600">
                Read how our courses have transformed students journeys! Hear firsthand
                experiences from happy students who gained knowledge, confidence, and
                new opportunities.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-lg font-medium mb-4">
                  We Have <span className="text-pink-500 font-bold">120K</span> Global Graduates
                </p>
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((index) => (
                    <Avatar key={index} className="border-2 border-white h-10 w-10">
                      <AvatarImage
                        src={`/api/placeholder/40/40`} 
                        alt={`Graduate ${index}`}
                      />
                      <AvatarFallback>G{index}</AvatarFallback>
                    </Avatar>
                  ))}
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-200 border-2 border-white text-xs font-medium">
                    +
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4 items-start md:items-center mb-4">
                  <Avatar className="h-16 w-16 rounded-md border">
                    <AvatarImage
                      src={testimonials[activeTestimonial].image}
                      alt={testimonials[activeTestimonial].name}
                    />
                    <AvatarFallback>
                      {testimonials[activeTestimonial].name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-bold text-lg">{testimonials[activeTestimonial].name}</h3>
                    <p className="text-gray-500 text-sm">{testimonials[activeTestimonial].role}</p>
                  </div>
                </div>

                <p className="text-gray-700 mt-4 mb-6">
                  {testimonials[activeTestimonial].quote}
                </p>

                <div className="flex items-center">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, index) => (
                    <Star key={index} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-4 gap-2">
              {testimonials.map((_, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className={`h-2 w-2 rounded-full p-0 ${index === activeTestimonial ? 'bg-pink-500' : 'bg-gray-300'}`}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
