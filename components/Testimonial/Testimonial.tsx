'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, maxime! Quibusdam neque, similique iusto fuga ad, aliquam eaque rem officia cumque voluptate omnis quasi ea a illum nemo quisquam delectus.`,
        name: 'Mia Brown',
        role: 'Marketer',
        avatar: 'https://images.unsplash.com/photo-1499470932971-a90681ce8530?...',
    },
    {
        id: 2,
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa cumque quaerat libero enim animi natus maxime fuga at? Eos ab dicta itaque sapiente repellendus consequatur perspiciatis ipsum. Assumenda, excepturi? Minima!`,
        name: 'Mia Browndsfkj',
        role: 'Marketer',
        avatar: 'https://images.unsplash.com/photo-1499470932971-a90681ce8530?...',
    },
];

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <section className="bg-black">
            <div className="container px-6 py-10 mx-auto">
                <p className="flex items-center justify-center text-yellow-400 uppercase tracking-widest mb-2 gap-3">
                    <span className="block w-16 h-px bg-yellow-400" />
                    Our Clients
                    <span className="block w-16 h-px bg-yellow-400" />
                </p>
                <h2 className="text-4xl font-bold text-center uppercase mb-4 text-white">
                    Our Clients
                </h2>

                <div className="flex items-center justify-center gap-6 max-w-4xl mx-auto mt-16">
                    <button
                        onClick={prevSlide}
                        title="Previous"
                        className="p-2 border border-yellow-400 rounded-full text-yellow-400 hover:bg-yellow-400 hover:text-black"
                    >
                        &#8592;
                    </button>

                    <div className="px-8 py-6 rounded-lg text-center w-full max-w-3xl">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={testimonials[currentIndex].id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.4 }}
                            >
                                <p className="text-white leading-relaxed text-center mb-6">
                                    {testimonials[currentIndex].content}
                                </p>
                                <div className="flex flex-col items-center justify-center">
                                    <motion.img
                                        src={testimonials[currentIndex].avatar}
                                        alt={testimonials[currentIndex].name}
                                        className="object-cover rounded-full w-14 h-14"
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0.8, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <div className="mt-4 text-center">
                                        <h3 className="font-semibold text-white">
                                            {testimonials[currentIndex].name}
                                        </h3>
                                        <span className="text-sm text-white">
                                            {testimonials[currentIndex].role}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <button
                        onClick={nextSlide}
                        title="Next"
                        className="p-2 border border-yellow-400 rounded-full text-yellow-400 hover:bg-yellow-400 hover:text-black"
                    >
                        &#8594;
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
