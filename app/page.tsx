import Hero from "@/components/Hero/Hero";
import GallerySection from "@/components/Gallery/Gallery";
import TrainerSection from "@/components/Trainer/Trainer";
import Services from "@/components/Services/Service";
import ProductsSection from "@/components/Products/Products";
import Testimonials from "@/components/Testimonial/Testimonial";


export default function Home() {
  return (
<>
      <Hero />
      <GallerySection />
      <TrainerSection />
      <Services />
      <ProductsSection />
      <Testimonials />
    </>);
}
