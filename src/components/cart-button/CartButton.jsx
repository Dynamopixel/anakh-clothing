import React, { useContext } from 'react'
import "./CartButton.css"
import { CartContext } from '../../context/CartContext'


const CartButton = ({buttontext, product}) => {

   const {addToCart} = useContext(CartContext)

    return (
        <button className="add-btn" onClick={()=> addToCart(product)}>
            Add to Cart
        </button>
    )
}

export default CartButton