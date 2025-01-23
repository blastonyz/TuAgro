
import Hero from "./components/home/Hero";
import SecondSection from "./components/home/SecondSection";
import ThirdSection from "./components/home/ThirdSection";
import FourthSection from "./components/home/FourthSection";
export default function Home() {
  /*
  const items = async () => {
    try {
      await fetch('http://localhost:3000/api/products',{cache:"no-store"}).then(res=>res.json())
    console.log(items);
    } catch (error) {
      console.log(error);
      
    }
    
    
  }*/
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
