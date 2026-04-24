import React, { useContext, useState } from 'react';
import "./CartButton.css";
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartButton = ({ buttontext, product }) => {

    const { addToCart } = useContext(CartContext);

    // 👇 track if product added or not
    const [added, setAdded] = useState(false);

    const handleAddToCart = () => {
        addToCart(product);
        setAdded(true);
    };

    return (
        <div className='w-100'>

            {/* Add to cart button */}
            <button className="add-btn" onClick={handleAddToCart}>
                {/* {buttontext || "Add to Cart"} */}
                ADD TO CART
            </button>

            {/* 👇 show only after click */}
            {added && (
                <div style={{ marginTop: "12px" }}>
                    <Link to="/cart" className="view-cart-link text-decoration-none">
                        View Cart →
                    </Link>
                </div>
            )}

        </div>
    );
};

export default CartButton;