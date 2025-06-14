import ProductDetailContainer from "@/app/components/products/ProductDetailContainer";

export default async function page({params}) {
    const {_id} =  await params 
    console.log('id params: ',_id);
    
    return (
     <div>
        <ProductDetailContainer id={_id} />
     </div>
      
    );
  }
  