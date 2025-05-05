"use client";
import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const images = [
  "/gal/1.jpg",
  "/gal/2.jpg",
  "/gal/3.jpg",
  "/gal/4.jpg",
];

const GallerySection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  // Auto-slide effect
  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    emblaApi.on("select", () => setCurrentIndex(emblaApi.selectedScrollSnap()));
    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <section className="py-12 md:py-16 px-4 md:px-6 lg:px-8 bg-black text-white">
      <p className="flex items-center justify-center text-yellow-400 uppercase tracking-widest mb-2 gap-3">
        <span className="block w-16 h-px bg-yellow-400" />
        Gallery
        <span className="block w-16 h-px bg-yellow-400" />
      </p>
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 md:mb-8 gap-2">
        <h2 className="text-3xl md:text-4xl font-semibold text-center md:text-left">Gallery</h2>
        <Link href="/gallery" className="inline-flex items-center text-yellow-400 font-medium hover:underline">
          Learn More
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>

      {/* Mobile Embla Carousel */}
      <div className="md:hidden overflow-hidden rounded-lg" ref={emblaRef}>
        <div className="flex">
          {images.map((img, idx) => (
            <div key={idx} className="flex-[0_0_100%] h-[300px]">
              <img
                src={img}
                alt={`carousel-${idx}`}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => setSelectedImage(img)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Dots */}
      <div className="md:hidden flex justify-center gap-2 mt-4">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollTo(idx)}
            className={`w-2 h-2 rounded-full transition ${currentIndex === idx ? "bg-yellow-200" : "bg-white/30"
              }`}
          />
        ))}
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="aspect-square overflow-hidden  bg-neutral-900 flex items-center justify-center"
          >
            <img
              src={img}
              alt={`gallery-${idx}`}
              className="w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => setSelectedImage(img)}
            />
          </div>
        ))}
      </div>

      {/* Lightbox Preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="preview"
            className="max-w-[90vw] max-h-[90vh] rounded-lg object-contain"
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
