import { Outlet } from "react-router-dom"
import { Fragment, useContext } from "react"
import CakeLogo from "../../assets/cake.svg"
import CartIcon from "../../Components/cart-icon/cart-icon.component"
import CartDropDown from "../../Components/cart-drop-down/cart-dropdown.component"
import { UserContext } from "../../contexts/user.context"
import { CartContext } from "../../contexts/cart.context"
import { signOutUser } from "../../utils/firebase/firebase.utils"
import { NavigationContainer, LogoContainer, 
  NavLinks, NavLink
 } from "./navigation.styles"

// import { ReactComponent as CakeLogo } from "../../assets/cake.svg"

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)
  // const signOutHandler = async () => {
  //   await signOutUser()
  //   setCurrentUser(null)
  // }
    return(
      <Fragment> {/* Fragment is used if you don't want to load a wrapping
      div around the code, that React forces you to do by default*/}
        <NavigationContainer>
          <LogoContainer to="/">
            {/* <div>Logo</div> */}
            <img src={CakeLogo} className="logo" style={{height: "2.5em", width:"2.5em"}}/>
            {/* <CakeLogo className="logo"/> */}
          </LogoContainer>
          <NavLinks>
            <NavLink to="/shop">
              Shop
            </NavLink>
            {
              // When the user is signed in, put a sign out nav-link
              // When the user is signed out, put a sign in nav-link
              currentUser ?
                (<NavLink as="span" onClick={signOutUser}>Sign Out</NavLink>)
              : (<NavLink to="/auth">
              Sign In
            </NavLink>)
            }
            <NavLink to="/gallery">
              Gallery
            </NavLink>
            {/* <Link className="nav-link" to="/gallery">
              <img src={ShoppingCartLogo} className="cart-logo"
              style={{height: "2em", width: "2em"}}/>
            </Link> */}
            <CartIcon />
            <NavLink to="/checkout">
            Checkout</NavLink>
          </NavLinks>
          {/* Short circuit operator, both values have to be true for this
          to run. If isCartOpen is false then there is no CartDropDown.
          If isCartOpen is true then CartDropDown will appear. Components are
          all truthy values as they are functions. If both values are true,
          they it will evaluate the last value */}
          {isCartOpen && <CartDropDown />}
        </NavigationContainer>
        <Outlet />
      </Fragment>
    )
  }

export default Navigation