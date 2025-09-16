import Hero from "./components/home/Hero";
import SecondSection from "./components/home/SecondSection";
import ThirdSection from "./components/home/ThirdSection";
import FourthSection from "./components/home/FourthSection";
import BloemenSection from "./components/home/BloemenSection";

export default function Home() {

  return (
    <div className='page'>
      <main className='main'>
        {/*<Hero/>*/}
        <BloemenSection />
        <FourthSection />
        <ThirdSection />
        <SecondSection />
      </main>
    </div>
  );
}
