import { Routes, Route} from "react-router-dom"
import Home from "../../src/routes/home/home.component"
import Navigation from "../../src/routes/navigation/navigation.component"

const App = () => {

  const Shop = () => {
    return(
      <div>
        <h1>This is a shop page</h1>
      </div>
    )
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
