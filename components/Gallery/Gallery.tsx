"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const GallerySection = () => {
  const mobileImages = [
    "/851e55691d1b5a305b044d74a91efcbb.jpg",
    "/851e55691d1b5a305b044d74a91efcbb.jpg",
    "/851e55691d1b5a305b044d74a91efcbb.jpg",
    "/851e55691d1b5a305b044d74a91efcbb.jpg",
  ];

  const desktopImages = [
    "/851e55691d1b5a305b044d74a91efcbb.jpg",
    "/851e55691d1b5a305b044d74a91efcbb.jpg",
    "/851e55691d1b5a305b044d74a91efcbb.jpg",
    "/851e55691d1b5a305b044d74a91efcbb.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Improved autoplay with proper cleanup
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mobileImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [mobileImages.length]);

  return (
    <section className="py-12 md:py-16 px-4 md:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 md:mb-8 gap-2">
        <h2 className="text-3xl md:text-4xl font-semibold text-center md:text-left">Gallery</h2>
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

      {/* Mobile Carousel with 3:4 aspect ratio */}
      <div className="relative h-[250px] overflow-hidden mb-6 md:hidden touch-action-none">
        <div
          className="flex h-full transition-transform duration-500 ease-in-out will-change-transform"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${mobileImages.length * 100}%`
          }}
        >
          {mobileImages.map((image: string, index: number) => (
            <div key={index} className="w-full h-full relative flex-shrink-0 aspect-[3/4]">
              <img
                src={image}
                alt={`slide-${index}`}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => setSelectedImage(image)}
              />
            </div>
          ))}
        </div>

        {/* Improved Dots */}
        <div className="absolute bottom-4 w-full flex justify-center gap-2">
          {mobileImages.map((_: string, index: number) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-black scale-125"
                  : "bg-black/50 scale-100"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Grid with 1:1 aspect ratio */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-1 md:gap-2">
        {desktopImages.map((image: string, index: number) => (
          <div key={index} className="relative group aspect-square h-auto overflow-hidden ">
            <img
              src={image}
              alt={`gallery-image-${index}`}
              className="w-full h-full object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
              onClick={() => setSelectedImage(image)}
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="selected"
            className="max-h-[90vh] max-w-[90vw] w-auto h-auto object-contain rounded-lg shadow-xl"
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
