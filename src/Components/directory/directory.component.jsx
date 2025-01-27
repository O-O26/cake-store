import DirectoryItem from '../directory-item/directory-item.component'
import "./directory.styles.scss"

const categories = [
  {
    "id": 1,
    "title": "Homemade Cakes",
    "imageUrl": "https://i.postimg.cc/zfN9pyQ8/red-velvet-cake-4917734-640.jpg",
    "route": "shop/cakes"
  },
  {
    "id": 2,
    "title": "Oven Baked Breads",
    "imageUrl": "https://i.postimg.cc/x8SQ0SgS/image-asset.jpg",
    "route": "shop/breads"
  },
  {
    "id": 3,
    "title": "Savoury Pastries",
    "imageUrl": "https://i.postimg.cc/zB8JYgjk/images-7.jpg",
    "route": "shop/pastries"
  },
  {
    "id": 4,
    "title": "Sweet Treats",
    "imageUrl": "https://i.postimg.cc/28hsRdhn/muffin-4869934-1280.jpg",
    "route": "shop/sweet%20treats"
  },
  {
    "id": 5,
    "title": "Freshly Brewed Drinks",
    "imageUrl": "https://i.postimg.cc/9QjrMv81/Polar-Express-Hot-Chocolate-1-scaled.jpg",
    "route": "shop/drinks"
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