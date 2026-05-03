import Hero from "@/components/Hero";
import LearningTips from "@/components/LearningTips";
import PopularCourses from "@/components/PopularCourses";
import TopInstructors from "@/components/TopInstructors";
import TrendingCourses from "@/components/TrendingCourses";
import Image from "next/image";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div>
      <Hero></Hero>
      <PopularCourses></PopularCourses>
      <LearningTips></LearningTips>
      <TopInstructors></TopInstructors>
      <TrendingCourses></TrendingCourses>
    </div>
  );
}
