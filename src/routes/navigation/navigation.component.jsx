import { Outlet, Link } from "react-router-dom"
import { Fragment, useContext } from "react"
import CakeLogo from "../../assets/cake.svg"
import CartIcon from "../../Components/cart-icon/cart-icon.component"
import CartDropDown from "../../Components/cart-drop-down/cart-dropdown.component"
import { UserContext } from "../../contexts/user.context"
import { CartContext } from "../../contexts/cart.context"
import { signOutUser } from "../../utils/firebase/firebase.utils"
import "./navigation.styles.scss"

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
        <div className="navigation">
          <Link className="logo-container" to="/">
            {/* <div>Logo</div> */}
            <img src={CakeLogo} className="logo" style={{height: "2.5em", width:"2.5em"}}/>
            {/* <CakeLogo className="logo"/> */}
          </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to="/shop">
              Shop
            </Link>
            {
              // When the user is signed in, put a sign out nav-link
              // When the user is signed out, put a sign in nav-link
              currentUser ?
                (<span className="nav-link" onClick={signOutUser}>Sign Out</span>)
              : (<Link className="nav-link" to="/auth">
              Sign In
            </Link>)
            }
            <Link className="nav-link" to="/gallery">
              Gallery
            </Link>
            {/* <Link className="nav-link" to="/gallery">
              <img src={ShoppingCartLogo} className="cart-logo"
              style={{height: "2em", width: "2em"}}/>
            </Link> */}
            <CartIcon />
          </div>
          {/* Short circuit operator, both values have to be true for this
          to run. If isCartOpen is false then there is no CartDropDown.
          If isCartOpen is true then CartDropDown will appear. Components are
          all truthy values as they are functions. If both values are true,
          they it will evaluate the last value */}
          {isCartOpen && <CartDropDown />}
        </div>
        <Outlet />
      </Fragment>
    )
  }

export default Navigation