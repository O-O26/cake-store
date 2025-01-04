import { Outlet, Link } from "react-router-dom"
import { Fragment } from "react"
import CakeLogo from "../../assets/cake.svg"
import "./navigation.styles.scss"
// import { ReactComponent as CakeLogo } from "../../assets/cake.svg"

const Navigation = () => {
    return(
      <Fragment> {/* Fragment is used if you don't want to load a wrapping
      div around the code, that React forces you to do by default*/}
        <div className="navigation">
          <Link className="logo-container" to="/">
            {/* <div>Logo</div> */}
            <img src={CakeLogo} style={{height: "2.5em", width:"2.5em"}}/>
            {/* <CakeLogo className="logo"/> */}
          </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to="/shop">
              Shop
            </Link>
          </div>
        </div>
        <Outlet />
      </Fragment>
    )
  }

export default Navigation