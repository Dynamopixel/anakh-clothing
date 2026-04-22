import { createContext, useState } from "react";

// create context
export const CartContext = createContext()

// provider context
export const CartProvider = ({children}) =>{

   const [cartCount, setCartCount] = useState(0)

   const addToCart = ()=>{
     setCartCount((prev)=> prev + 1)
   }

    return(
        <CartContext.Provider value={{cartCount, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}




