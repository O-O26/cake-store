import Directory from "./Components/directory/directory.component"

const App = () => {

  const categories = [
    {
      "id": 1,
      "title": "Chocolate Cake",
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png",
      "imageUrl2": "https://pixabay.com/photos/cake-chocolate-chocolate-cake-1850011/"
    },
    {
      "id": 2,
      "title": "Vanilla Cake",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png",
      "imageUrl2": "https://pixabay.com/photos/cake-chocolate-chocolate-cake-1850011/"
    },
    {
      "id": 3,
      "title": "Black Forest Cake",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png",
      "imageUrl2": "https://pixabay.com/photos/cake-cakes-cream-cake-cream-yummy-1227842/"
    },
    {
      "id": 4,
      "title": "Red Velvet Cake",
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png",
      "imageUrl2": "https://pixabay.com/photos/red-velvet-cake-cake-dessert-4917734/"
    },
    {
      "id": 5,
      "title": "Victoria Sponge Cake",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png",
      "imageUrl2": "https://pixabay.com/photos/cakes-victoria-sponge-dessert-jam-2680415/"
    }
  ]

  return (
    <div className="categories-container">
      <Directory categories={categories}/>
    </div>
  )
}

export default App
