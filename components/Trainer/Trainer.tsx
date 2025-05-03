"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
  DrawerOverlay,
} from '@/components/ui/drawer';

interface Trainer {
  id: number;
  name: string;
  role: string;
  imageSrc: string;
  age: number;
  yearsOfExperience: number;
  bio: string;
  certifications: string[];
}

const trainers: Trainer[] = [
  {
    id: 1,
    name: 'Ivan',
    role: 'Strength training expert',
    imageSrc: '/Brurcelee.png',
    age: 32,
    yearsOfExperience: 10,
    bio: 'Ivan specializes in compound movements and functional strength training, helping clients build power and resilience.',
    certifications: ['CSCS', 'Nutrition Coach'],
  },
  {
    id: 2,
    name: 'Hanna',
    role: 'Yoga trainer',
    imageSrc: '/Brurcelee.png',
    age: 28,
    yearsOfExperience: 6,
    bio: 'Hanna brings mindfulness and flexibility to every session, focusing on breath work and alignment.',
    certifications: ['RYT-200', 'Prenatal Yoga'],
  },
];

// Custom arrow components to ensure z-index clarity
const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} text-white`}
      style={{ ...style, zIndex: 10 }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} text-white`}
      style={{ ...style, zIndex: 10 }}
      onClick={onClick}
    />
  );
};

const TrainerSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const selectedTrainer = trainers.find((t) => t.id === openId);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,          // show only one trainer at a time
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section id="trainer-section" className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Intro */}
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold uppercase">
              Our certified trainers will help you achieve your goals.
            </h2>
            <p className="text-gray-300">
              Click on a trainer to view their full profile, including biography,
              certifications, and stats. Get to know the expert behind your
              training plan.
            </p>
            {/* Link without <a> child */}
            <Link
              href="/coaches"
              className="inline-flex items-center text-yellow-400 font-medium hover:underline"
            >
              View All Coaches
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          {/* Carousel */}
          <div className="w-full ">
            <Slider {...settings} className="relative">
              {trainers.map((trainer) => (
                <div key={trainer.id} className="px-2 ">
                  <div
                    className="bg-black rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition border border-gray-950"
                    onClick={() => setOpenId(trainer.id)}
                  >
                    <div className="relative h-64 w-full">
                      <Image
                        src={trainer.imageSrc}
                        alt={trainer.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="p-4 relative bg-black/70 -mt-16">
                      <h3 className="text-lg font-bold uppercase text-center text-white">
                        {trainer.name}
                      </h3>
                      <p className="text-gray-400 text-sm text-center">
                        {trainer.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* Drawer for trainer details */}
      {selectedTrainer && (
        <Drawer open={!!selectedTrainer} modal onOpenChange={() => setOpenId(null)}>
          <DrawerOverlay className="fixed inset-0 bg-black/60 z-40" />
          <DrawerContent className="fixed inset-8 z-50 rounded-2xl bg-black text-white shadow-2xl overflow-hidden border border-gray-700">
            <DrawerHeader className="relative h-52 p-0">
              <Image
                src={selectedTrainer.imageSrc}
                alt={`${selectedTrainer.name} header`}
                fill
                className="object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-black/70 z-10 flex items-center px-8">
                <div>
                  <DrawerTitle className="text-4xl font-bold">
                    {selectedTrainer.name}
                  </DrawerTitle>
                  <DrawerDescription className="text-red-500 text-lg">
                    {selectedTrainer.role}
                  </DrawerDescription>
                </div>
              </div>
              <DrawerClose
                aria-label="Close trainer details"
                className="absolute top-4 right-4 text-3xl text-white hover:text-red-500 z-20 transition"
              >
                ×
              </DrawerClose>
            </DrawerHeader>

            <div className="flex-1 overflow-y-auto p-8 space-y-6">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <p className="text-3xl font-bold text-red-500">
                    {selectedTrainer.age}
                  </p>
                  <p className="mt-1 uppercase text-xs text-gray-400">Age</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-red-500">
                    {selectedTrainer.yearsOfExperience}
                  </p>
                  <p className="mt-1 uppercase text-xs text-gray-400">
                    Experience
                  </p>
                </div>
              </div>

              <section aria-labelledby="bio-heading">
                <h4
                  id="bio-heading"
                  className="uppercase text-sm font-semibold tracking-wide mb-2"
                >
                  Biography
                </h4>
                <p className="leading-relaxed italic text-gray-300">
                  {selectedTrainer.bio}
                </p>
              </section>

              <section aria-labelledby="certs-heading">
                <h4
                  id="certs-heading"
                  className="uppercase text-sm font-semibold tracking-wide mb-2"
                >
                  Certifications
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedTrainer.certifications.map((cert, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-red-600/20 px-3 py-1 text-xs font-medium text-red-500"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            <footer className="p-6 border-t border-gray-800">
              <button
                className="w-full rounded-full bg-red-600 py-3 text-sm font-semibold hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 transition uppercase"
                onClick={() => console.log('Hire', selectedTrainer.name)}
              >
                Hire This Trainer
              </button>
            </footer>
          </DrawerContent>
        </Drawer>
      )}
    </section>
  );
};

export default TrainerSection;
