import Image from "next/image"
const Loading = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh' 
    }}>
      <Image
       src={'/leaf.webp'}
       width={256}
       height={256}
       alt="Planta creciendo con riego"
       unoptimized
      />
    </div>
  )
}

export default Loading