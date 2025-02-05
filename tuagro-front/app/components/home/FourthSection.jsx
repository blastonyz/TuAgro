'use client'
import { useCategoriesContext } from "../context/CategoriesContext";
import SectionTitle from "../ui/title/SectionTitle";
import CategorieCard from "../categories/CategorieCard";
import './styles/fourth.css'



const FourthSection = () => {
  const { loading, categories } = useCategoriesContext();


  return (
    <section className="categoriesMain">
      <SectionTitle size={'35px'} text={'Productos'} />
     {categories ?
        <CategorieCard categories={categories} />
        :
        <h3>Error al Cargar Categorias</h3>
      }
      

    </section>
  );
}

export default FourthSection