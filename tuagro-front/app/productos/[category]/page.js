import CategoryProducts from "@/app/components/products/CategoryProducts"


export default async function page({params}){
    const {category} = await params
    
    return(
        <CategoryProducts category={category}  />
    )
}