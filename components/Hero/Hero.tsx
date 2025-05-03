import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-10 mt-10 lg:mt-0 ">
      <div className="max-w-7xl mx-auto px-6 md:px-16 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">

          {/* Text Content - Now comes first in mobile */}
          <div className="md:w-1/2 text-center md:text-left space-y-4 md:space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              “ Knowing is not enough, we must apply. ”
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mt-2 md:mt-4 whitespace-pre-line">
              Willing is not enough, we must do.
              <br />— <span className="text-white font-semibold">Bruce Lee</span>
            </p>

            <p className="text-base md:text-lg text-gray-200 max-w-xl mx-auto md:mx-0">
              Start your fitness journey today with our expert trainers and personalized programs. Achieve your goals faster with science-backed workouts and nutrition plans.
            </p>
            <div className="flex justify-center md:justify-start mt-4">
              <Link
                href="/gallery"
                className="inline-flex items-center text-yellow-400 font-medium hover:underline"
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
              </Link>
            </div>
          </div>

          {/* Image Container - Adjusted for mobile */}
          <div className="md:w-1/2 w-full max-w-sm mx-auto mt-8 md:mt-0 md:max-w-lg">
            <div className="relative w-full h-[300px] md:h-[490px] rounded-2xl overflow-hidden">
              <img
                src="/851e55691d1b5a305b044d74a91efcbb-removebg-preview.png"
                alt="Bruce Lee"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
