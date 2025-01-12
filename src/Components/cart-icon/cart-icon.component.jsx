import { useContext } from "react"
import { CartContext } from "../../contexts/cart.context"
import ShoppingIcon from "../../assets/shopping-bag.svg"

import "./cart-icon.styles.scss"

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
        // This function reverses the isCartOpen value so if isCartOpen
        // originally is false then it now becomes true and vice versa

    return(
        <div className="cart-icon-container" onClick={toggleIsCartOpen}>
            <img src={ShoppingIcon} alt="Shopping icon" 
            className="shopping-icon"/>
            <span className="item-count">{cartCount}</span>
        </div>
    )
}

export default CartIcon