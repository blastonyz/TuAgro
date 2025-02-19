'use client'
import './contact.form.css'
import { useState } from 'react'


const ContactForm = () => {
    const [data,setData] = useState({
        firstName:"",
        email:"",
        consult:""
    })

    const handleContact = (e) => {
      const{name,value} = e.target;
        setData({
            ...data,
            [name] : value
        })
        console.log(data);
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }


  return (
 
        <div className="contactContainer">

          <form className="contactForm">
                <input onChange={handleContact} type="text" name="firstName" placeholder="Nombre" value={data.firstName}/>
                <input onChange={handleContact} type="email" name="email" placeholder="email" value={data.email}/>
                <textarea onChange={handleContact} name="consult" value={data.consult}></textarea>
                <button type="submit"></button>
          </form>

        </div>
        

  )
}

export  default ContactForm