import Image from 'next/image';
import React from 'react';

interface Service {
    id: number;
    title: string;
    description: string;
    imageSrc: string;
    link: string;
}

const services: Service[] = [
    {
        id: 1,
        title: 'Cardio Strength',
        description:
            'The Cardio/Strength classes aim to improve cardiovascular health, muscular strength, and endurance. These classes utilize a variety of equipment to help keep your fitness routine fun and fresh.',
        imageSrc: '/851e55691d1b5a305b044d74a91efcbb.jpg',
        link: '/services/cardio-strength',
    },
    {
        id: 2,
        title: 'Basic Yoga',
        description:
            'In this class, postures are practiced to align, strengthen and promote flexibility in the body. Breathing techniques and meditation are also integrated. You can expect an emphasis on simplicity, repetition, and ease of movement.',
        imageSrc: '/851e55691d1b5a305b044d74a91efcbb.jpg',
        link: '/services/basic-yoga',
    },
    {
        id: 3,
        title: 'Muscle Building',
        description:
            'Definitions of muscle building: exercise that builds muscles through tension. Synonyms: anabolic exercise, bodybuilding, musculaturebuilding.',
        imageSrc: '/851e55691d1b5a305b044d74a91efcbb.jpg',
        link: '/services/muscle-building',
    },
    {
        id: 4,
        title: 'Beginner Pilates',
        description:
            'Pilates is a system of exercise and movement that is designed to increase strength, flexibility, and balance. It integrates breath and movement within proper body mechanics to increase awareness.',
        imageSrc: '/851e55691d1b5a305b044d74a91efcbb.jpg',
        link: '/services/beginner-pilates',
    },
];

const Services: React.FC = () => {
    return (
        <section id="services" className="bg-black text-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center uppercase mb-4">
                    Our Services
                </h2>
                <p className="text-center max-w-3xl mx-auto mb-12">
                    To provide adequate knowledge and skills necessary for critical thinking
                    regarding diet and health so the individual can make healthy food
                    choices from an increasingly complex food supply.
                </p>
                      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">

                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="relative group overflow-hidden rounded-lg h-96"
                        >
                            <Image
                                src={service.imageSrc}
                                alt={service.title}
                                layout="fill"
                                objectFit="cover"
                                className="transform group-hover:scale-105 transition duration-500"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition duration-300"></div>
                            <div className="absolute bottom-0 p-6">
                                <h3 className="text-xl font-bold uppercase mb-2">
                                    {service.title}
                                </h3>
                                <a
                                    href={service.link}
                                    className="inline-flex items-center text-yellow-400 font-medium"
                                >
                                    Learn More
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
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
