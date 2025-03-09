'use client'
import { useCategoriesContext } from '../context/CategoriesContext'
import CategorieCardItem from './CategorieCardItem'

 const CategorieCard = () => {
  const { loading, categories } = useCategoriesContext();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='categoriesContainer'>
      {categories.map((cat) => (
        <CategorieCardItem key={cat._id} cat={cat} />
      ))}
    </div>
  );
}


export default CategorieCard
