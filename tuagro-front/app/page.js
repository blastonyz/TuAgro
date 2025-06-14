import Hero from "./components/home/Hero";
import SecondSection from "./components/home/SecondSection";
import ThirdSection from "./components/home/ThirdSection";
import FourthSection from "./components/home/FourthSection";

export default function Home() {

  return (
    <div className='page'>
      <main className='main'>
        <Hero/>
        <SecondSection/>
        <ThirdSection/>
        <FourthSection/>
      </main>
    </div>
  );
}
