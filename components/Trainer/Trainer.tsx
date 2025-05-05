"use client";

import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
  DrawerOverlay,
} from "@/components/ui/drawer";

interface Coach {
  name: string;
  title: string;
  imgSrc: string;
  socials: {
    icon: React.ReactNode;
    href: string;
  }[];
  age: number;
  yearsOfExperience: number;
  bio: string[];
  certifications: string[];
  experience?: string[];
  achievements?: string[]
}

const coaches: Coach[] = [
  {
    name: "Shariq Nazir",
    title:
      "International Boxing Coach, S.K Boxing Promotion | Affiliated with Pakistan Boxing Council",
    imgSrc: "/gal/5.jpg",
    socials: [
      { icon: <FaFacebookF />, href: "#" },
      { icon: <FaInstagram />, href: "#" },
      { icon: <FaTwitter />, href: "#" },
    ],
    age: 35,
    yearsOfExperience: 24,
    bio: [
      "International Boxing Coach – S.K Boxing Promotion, affiliated with Pakistan Boxing Council",
      "Won 3 Asian Championships in Thailand as International Boxing Coach (Jul–Aug 2022)",
      "Head Coach of Fitness Flow – Boxing & Martial Arts Club",
    ],
    certifications: [
      "Diploma in Physical Education - Coaching Style and Technique",
      "Black Belt 3rd Dan Taekwondo – World Taekwondo Federation Koki Won, Korea",
      "Black Sash Wushu Kung Fu (Chinese Kick Boxing, China)",
      "Boxing Coaching and Cut Man Course – Pakistan Professional Boxing Federation",
      "Emergency First Aid & Sports Injuries – Integrated Health Service",
      "Brazilian Jujitsu 3-Day Training Camp – Supervised by PAK MMA",
      "Close Protection Training – Supported by Wackenhut.pl, WPPL & Security and Management Services",
      "5th Level Chief Instructor of TDS – Dragon Society of Pakistan",
      "Affiliated with Pakistan Wushu (Kung Fu) Federation",
    ],
    achievements: [
      "68th Punjab Olympics 1999 (Lahore) – Silver Medal in Wushu (Kick Boxing)",
      "10th South Asian Games – Participated as TDS Club Chief Instructor (Reg#0128), Srilanka 2006",
      "6th National Wushu Championship (Lahore) – Gold Medal",
      "7th National Wushu Championship (Lahore) – Silver Medal",
      "8th National Wushu Championship – Bronze Medal",
      "Wushu Official Technical Referee/Judges & Coaching Course – Passed on 5th March 2006",
      "3rd TDS Top 10 Kung Fu Championship – Chief Referee",
      "Islamabad Convent School H-8/4 – Ranked 6th among Top 15 Teachers (2014–2015)",
      "Junior National Badminton Championship 2005 – Team Coach",
      "Islamabad Convent School H-8/4 – Value Award for 'Most Devoted', April 3, 2015",
      "Islamabad Dashers Marathon Relay 2015 – Team 3rd Position",
      "Gold Medal – Kick Boxing (Pakistan Wushu Federation)",
      "Gold Medal – Taekwondo (Islamabad Taekwondo Federation, 2000)",
    ],
    experience: [
      "Physical Education Coordinator (2000 – Present), Islamabad Convent School, H-8/4 Campus",
      "Responsible for developing physical fitness, coordination, and mental focus programs for students",
    ],
  }

];

const ExpertCoaches: React.FC = () => {
  const [selectedTrainer, setSelectedTrainer] = React.useState<Coach | null>(
    null
  );

  return (
    <>
      <section className=" text-white py-16  px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="flex items-center justify-center text-yellow-400 uppercase tracking-widest mb-2 gap-3">
            <span className="block w-16 h-px bg-yellow-400" />
            Our Team
            <span className="block w-16 h-px bg-yellow-400" />
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 relative inline-block">
            Expert Coaches
          </h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {coaches.map((coach) => (
              <div
                key={coach.name}
                className="group relative overflow-hidden cursor-pointer "
                onClick={() => setSelectedTrainer(coach)}
              >
                <div
                  className="w-full h-72 sm:h-72 bg-cover bg-center"
                  style={{ backgroundImage: `url(${coach.imgSrc})` }}
                />
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent opacity-90" />
                <div className="absolute top-6 left-4 flex flex-col items-start space-y-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {coach.socials.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      className="text-white text-lg p-2 bg-[#FF9900] rounded-full hover:bg-[#ff7700] transition"
                      aria-label="Social Link"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
                <div className="relative p-4 text-center z-20 ">
                  <h3 className="text-xl font-semibold mb-1">{coach.name}</h3>
                  <p className="text-gray-400 text-sm">{coach.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedTrainer && (
        <Drawer
          open={!!selectedTrainer}
          modal
          onOpenChange={() => setSelectedTrainer(null)}
        >
          <DrawerOverlay className="fixed inset-0 z-40" />
          <DrawerContent className="fixed inset-8 z-50 rounded-2xl bg-[#0D0D0D] text-white shadow-2xl overflow-hidden border border-gray-700">

            {/* Header with circular image */}
            <DrawerHeader className="relative h-52 p-0 flex items-center justify-center flex-col gap-2 rounded-t-2xl">
              <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-yellow-400 shadow-md">
                <Image
                  src={selectedTrainer.imgSrc}
                  alt={`${selectedTrainer.name} avatar`}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="z-10 text-center px-4">
                <DrawerTitle className="text-2xl font-bold">
                  {selectedTrainer.name}
                </DrawerTitle>
                <DrawerDescription className="text-yellow-400 text-sm">
                  {selectedTrainer.title}
                </DrawerDescription>
              </div>
            </DrawerHeader>

            {/* Drawer body */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1 space-y-4">
                  <div className="flex gap-6 text-left text-sm text-gray-300">
                    <div>
                      <strong>Age:</strong> {selectedTrainer.age}
                    </div>
                    <div>
                      <strong>Experience:</strong> {selectedTrainer.yearsOfExperience} years
                    </div>
                  </div>

                  <section aria-labelledby="bio-heading">
                    <h4 id="bio-heading" className="uppercase text-xs font-semibold tracking-wide mb-1">
                      Biography
                    </h4>
                    <p className="leading-relaxed italic text-gray-300 text-sm">
                      {selectedTrainer.bio.join(' ')}
                    </p>
                  </section>

                  <section aria-labelledby="certs-heading">
                    <h4 id="certs-heading" className="uppercase text-xs font-semibold tracking-wide mb-1">
                      Certifications
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedTrainer.certifications.map((cert, idx) => (
                        <span key={idx} className="rounded-full px-2 py-0.5 text-[10px] font-medium text-yellow-400 border border-yellow-400">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </section>

                  {/* Add Achievements Section */}
                  <section aria-labelledby="achievements-heading">
                    <h4 id="achievements-heading" className="uppercase text-xs font-semibold tracking-wide mb-1">
                      Achievements
                    </h4>
                    <ul className="list-inside list-disc text-gray-300 text-sm">
                      {selectedTrainer.achievements?.map((achieve, idx) => (
                        <li key={idx}>{achieve}</li>
                      ))}
                    </ul>
                  </section>

                  {/* Add Experience Section */}
                  <section aria-labelledby="experience-heading">
                    <h4 id="experience-heading" className="uppercase text-xs font-semibold tracking-wide mb-1">
                      Experience
                    </h4>
                    <ul className="list-inside list-disc text-gray-300 text-sm">
                      {selectedTrainer.experience?.map((exp, idx) => (
                        <li key={idx}>{exp}</li>
                      ))}
                    </ul>
                  </section>
                </div>
              </div>
            </div>

            {/* Drawer footer */}
            <footer className="p-4 border-t border-gray-800">
              <button
                className="w-full rounded-full text-yellow-400 hover:bg-yellow-300 hover:text-black py-2 text-xs font-semibold uppercase transition"
                onClick={() => console.log("Hire", selectedTrainer.name)}
              >
                Hire This Trainer
              </button>
            </footer>
          </DrawerContent>
        </Drawer>

      )}
    </>
  );
};

export default ExpertCoaches;
