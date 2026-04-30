import Hero from "@/components/Hero";
import PopularCourses from "@/components/PopularCourses";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <PopularCourses></PopularCourses>
    </div>
  );
}
