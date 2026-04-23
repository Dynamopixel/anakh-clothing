import { createContext, useState } from "react";

// create context
export const CartContext = createContext()

// provider context
export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([])

    const addToCart = (product) => {
         if (!product) return;
        setCartItems((prev) => {
            const existingCartItems = prev.find(item => item.id === product.id)

            if (existingCartItems) {
                return prev.map(item =>
                    item.id === product.id ? { ...item, qty: item.qty + 1 } : item

                );
            } else {
                return [...prev, { ...product, qty: 1 }]
            }
        })
    }

    const updateQty = (id, qty) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, qty: Number(qty) } : item
            )
        );
    };

    const clearCart = ()=>{
        setCartItems([])
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, updateQty, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}




