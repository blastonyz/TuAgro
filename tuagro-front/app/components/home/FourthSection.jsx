
import SectionTitle from "../ui/title/SectionTitle";
import CategorieCard from "../categories/CategorieCard";
import './styles/fourth.css'



const FourthSection = () => {

  return (
    <section className="categoriesMain">
      <SectionTitle size={'35px'} text={'Productos'} />
        <CategorieCard/>
    </section>
  );
}

export default FourthSection