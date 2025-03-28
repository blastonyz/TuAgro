export default async function Edit({ params }) {
    const { _id } = await params
  
    return (
      <h1>
        Editando producto con ID: {_id}
      </h1>
    )
  }