'use client'
import { useState,useEffect } from "react"

const ContactList = () => {
    const [messages, setMessages] = useState([])

    const getMessages = async () => {

        try {
            const response = await fetch('/api/consult', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include'
        })

        const res = await response.json()
        console.log('data: ',res.data.consultsList);
        setMessages(res.data.consultsList)
        } catch (error) {
            console.log('error al pedir consutlas',error)
        }
    }

    useEffect(() => {
       getMessages();
    }, [])
    
   
    return (
        <div className="contactListMain">
            <div className="contactListContainer">
                {messages.map((item,index) => (
                    
                        <div key={index}>
                            <h2>{item.firstName}</h2>
                            <h2>{item.email}</h2>
                            <h2>{item.phone}</h2>
                            <h2>{item.consult}</h2>
                        </div>
                    )
                )

                }
            </div>

        </div>
    )
}

export default ContactList