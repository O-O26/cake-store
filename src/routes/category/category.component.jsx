import { useContext, useState, useEffect, Fragment } from "react"
import { CategoriesContext } from "../../contexts/categories.context"
import ProductCard from "../../Components/product-card/product-card.component"
import { useParams } from "react-router-dom"
import "./category.styles.scss"

const Category = () => {
    const { category } = useParams()
    const { categoriesMap } = useContext(CategoriesContext)
    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])
    return (
        <Fragment>
            <div className="title-container">
                <h2 className="category-title">{category.toLocaleUpperCase()}</h2>
            </div>
            <div className="category-container">
                {/* We are getting the products asynchronously from firebase so
                it will take some time to render, so products is initially
                set to nothing before it gets its values. We only want to run when
                it has gathered all the values from firebase */}
                {products && products.map((product) =>
                <ProductCard key={product.id} product={product}/>)
                }
            </div>
        </Fragment>
    )
}

export default Category