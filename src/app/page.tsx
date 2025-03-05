import Featuredcourses from "@/components/Featuredcourses";
import HeroSection from "@/components/HeroSection";
import WhychooseUs from "@/components/WhychooseUs";
import MusicTestimonialsCards from "@/components/TestimonialsCards";
import Image from "next/image";
import HoverCard from "@/components/HoverCard";

export default function Home() {
  return (
    <main className="min-h-screen antialiased bg-grid-white/[0.02]">     
      <HeroSection/>
      <Featuredcourses/>
      <WhychooseUs/>
      <MusicTestimonialsCards />
      <HoverCard/>
    </main> 
  );
}
