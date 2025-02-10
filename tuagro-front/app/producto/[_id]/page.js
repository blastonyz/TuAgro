import ProductDetails from "@/app/components/products/ProductDetail";

export default async function page({params}) {
    const {_id} =  await params 
    console.log('id params: ',);
    
    return (
     <div>
        <ProductDetails id={_id} />
     </div>
      
    );
  }
  