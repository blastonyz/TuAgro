import './section.title.css';

const SectionTitle = ({size,text}) => {
  return (
   <div className="titleContainer"> <h2 style={{fontSize:`${size}`}} className="sectionTitle">{text}</h2></div>
  )
}

export default SectionTitle