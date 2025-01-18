import DirectoryItem from '../directory-item/directory-item.component'
import "./directory.styles.scss"

const categories = [
  {
    "id": 1,
    "title": "Chocolate Cake",
    "imageUrl": "https://i.ibb.co/cvpntL1/hats.png",
    "route": "shop/breads"
  },
  {
    "id": 2,
    "title": "Vanilla Cake",
    "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png",
    "route": "shop/cakes"
  },
  {
    "id": 3,
    "title": "Black Forest Cake",
    "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png",
    "route": "shop/sweet%20treats"
  },
  {
    "id": 4,
    "title": "Red Velvet Cake",
    "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png",
    "route": "shop/sweet%20treats"

  },
  {
    "id": 5,
    "title": "Victoria Sponge Cake",
    "imageUrl": "https://i.ibb.co/R70vBrQ/men.png",
    "route": "shop/breads"
  }
]

const Directory = () => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id}
        category={category}
        />
      ))}
    </div>
  )
}

export default Directory