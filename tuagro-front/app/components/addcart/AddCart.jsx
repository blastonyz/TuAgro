'use client'
import './counter.css'
import { useAuthContext } from '../context/AuthContext'
import { useCartContext } from '../context/CartContext'
import { useState } from "react"
import RegisterModal from '@/app/producto/(..)auth/register/page'
import Counter from './Counter'
import Button from '../ui/button/Button'
import AddModal from '../ui/add-modal/AddModal'


const AddCart = ({ item }) => {
    const { user } = useAuthContext()
    const { addToCart } = useCartContext()

    const [quantity, setQuantity] = useState(1)
    const [addMessage, setAddMessage] = useState(false)
    const [showModal, setShowModal] = useState(false);


    const addHandler = () => {
        console.log('user: ', user);

        if (!user.email || user.email == '') {
            setShowModal(true);
        } else {
            addToCart({ ...item, quantity })
            setAddMessage(!addMessage)
        }
    }

    return (
        <>
            {showModal && <RegisterModal onClose={() => setShowModal(false)} />}
            {addMessage ? <AddModal onCloseModal={setAddMessage} addMessage={addMessage} setAddMessage={setAddMessage} /> : null}

            <div className="counterContainer">

                <div className='quantityMain'>
                    <Counter onQuantityChange={setQuantity} />
                </div>

                <div className='addCont'>
                    <Button onClick={addHandler} text={'Agregar'} />
                </div>
                {showModal && <RegisterModal onClose={() => setShowModal(false)} />}
            </div>

        </>
    )
}

export default AddCart