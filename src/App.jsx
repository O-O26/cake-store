import { Routes, Route } from "react-router-dom"
import Home from "./routes/home/home.component"
import Navigation from "./routes/navigation/navigation.component"
import Authentication from "./routes/authentication/authentication.component.jsx"

import Shop from "./routes/shop/shop.component.jsx"

const Gallery = () => {
  return<h1>This is our gallery</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} /> {/* Index = true means
        that when the path="/" is just the slash, then this current
        element is the home element*/}
        <Route path="shop" element={<Shop />}/>
        <Route path="auth" element={<Authentication />}/>
        <Route path="gallery" element={<Gallery />} />
      </Route>
    </Routes>
  )
}

export default App
