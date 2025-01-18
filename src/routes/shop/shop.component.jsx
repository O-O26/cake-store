import { Routes, Route } from "react-router-dom"
import CategoriesPreview from "../categories-preview/categories-preview.component"
import Category from "../category/category.component"
// import { ProductsContainer } from "./shop.styles"
import "./shop.styles.scss"

const Shop = () => {
    return(
        // <ProductsContainer>
            <Routes>
                <Route index element={<CategoriesPreview />} />
                    {/* Below we are passing the category component as
                    a variable for the route /shop/category the category
                    will be a variable that changes based off the name of the
                    category*/}
                <Route path=":category" element={<Category />} />
            </Routes>
        // </ProductsContainer>
    )
}

export default Shop