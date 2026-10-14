import Hero from '../components/sections/Hero/Hero';
import BestCoursesSection from '../components/sections/BestCoursesSection';
import PopularCategories from '../components/sections/PopularCategories';
import RoadmapSection from '../components/sections/RoadmapSection';
import TopInstructors from '../components/sections/TopInstructors';
import StudentReviewsSection from '../components/sections/StudentReviewsSection';
import WhyUsSection from '../components/sections/WhyUsSection';
import LatestNewsSection from '../components/sections/LatestNewsSection';
import CoursesSlider from '../components/sections/Courses/CoursesSlider';

export default function Home() {
  return (
    <main>
      <Hero />
      <CoursesSlider />
     <TopInstructors />
      <WhyUsSection />
      <RoadmapSection />
      <BestCoursesSection />
      <PopularCategories />
      <StudentReviewsSection />
      <LatestNewsSection />
    </main>
  );
}
