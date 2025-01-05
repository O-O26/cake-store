import { Routes, Route} from "react-router-dom"
import Home from "./routes/home/home.component"
import Navigation from "./routes/navigation/navigation.component"

const App = () => {

  const Shop = () => {
    return<h1>This is a shop page</h1>
  }

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} /> {/* Index = true means
        that when the path="/" is just the slash, then this current
        element is the home element*/}
        <Route path="shop" element={<Shop />}/>
      </Route>
    </Routes>
  )
}

export default App
