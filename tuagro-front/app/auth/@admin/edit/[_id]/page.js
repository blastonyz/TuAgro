import '../../../../components/admin/edit/edit.form.css'
import EditForm from '@/app/components/admin/edit/EditForm'

export default async function Edit({ params }) {
  const { _id } = await params; 
  const res = await fetch(`/api/product/${_id}`);
  const product = await res.json()

  return (

    <div className="editFormMain">
      <EditForm product={product} />
    </div>
  )
}