import Footer from "./Components/Footer/Footer";
import HeaderSection from "./Components/Header/Header";
import HeroSection from "./Components/Hero/HeroSection";
import TaskBoard from "./Components/Task/TaskBoard";

export default function App() {
  return (
    <>
      <HeaderSection />
      <div className="flex flex-col justify-center items-center">
        <HeroSection />
        <TaskBoard />
      </div>
      <Footer />
    </>
  );
}


// 50.00