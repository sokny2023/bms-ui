import HeroSection from "@/component/HeroSection";
import { HeroVideoDialogDemo } from "@/component/HeroVideoSection";


export default function Home() {
  return (
    <main className="w-full h-full flex flex-col justify-center items-center">
        <div className="mt-[200px]"> 
            <HeroSection />
        </div>
        <div className="mt-[200px] w-[50%] mb-[100px]">
          <h2 className="text-4xl font-bold text-center ">Discover Our Video</h2>
          <div className="mt-[40px]">
            <HeroVideoDialogDemo />
          </div>
        </div>
    </main>
  
  );
}
