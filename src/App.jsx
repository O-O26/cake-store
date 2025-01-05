import { Routes, Route} from "react-router-dom"
import Home from "./routes/home/home.component"
import Navigation from "./routes/navigation/navigation.component"
import SignIn from "./routes/sign-in/sign-in.component"

const Shop = () => {
  return<h1>This is a shop page</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} /> {/* Index = true means
        that when the path="/" is just the slash, then this current
        element is the home element*/}
        <Route path="shop" element={<Shop />}/>
        <Route path="sign-In" element={<SignIn />}/>
      </Route>
    </Routes>
  )
}

export default App
