import React, { useContext } from 'react'
import "./CartButton.css"
import { CartContext } from '../../context/CartContext'


const CartButton = ({buttontext}) => {

   const {addToCart} = useContext(CartContext)

    return (
        <button className="add-btn" onClick={addToCart}>
            Add to Cart
        </button>
    )
}

export default CartButton