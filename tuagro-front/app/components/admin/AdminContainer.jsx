import ProductsTable from "./ProductsTable"
import SectionTitle from "../ui/title/SectionTitle"

const AdminContainer = () => {


  return (
    <main className="adminMain">
          <div className="titleCont">
                <SectionTitle text={'Panel de Administracion'} size={26}/>
           </div>
        <ProductsTable/>
    </main>
  )
}

export  default AdminContainer