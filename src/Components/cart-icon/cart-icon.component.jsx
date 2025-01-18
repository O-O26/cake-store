import { useContext } from "react"
import { CartContext } from "../../contexts/cart.context"
import ShoppingSvg from "../../assets/shopping-bag.svg"

import { CartIconContainer, ItemCount }
from "./cart-icon.styles"

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
        // This function reverses the isCartOpen value so if isCartOpen
        // originally is false then it now becomes true and vice versa

    return(
        <CartIconContainer onClick={toggleIsCartOpen}>
            <img src={ShoppingSvg} className="shopping-icon" alt="shopping-bag"/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon