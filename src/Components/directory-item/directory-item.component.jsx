import { useNavigate } from "react-router-dom"
import { DirectoryItemContainer, Body, BackgroundImage}
from "./directory-item.styles.jsx"
// import { useState } from "react"

const DirectoryItem = ({ category }) => {
  // const [backgroundImage, setBackgroundImage] = useState("")
  // let currentImage;
  // for(let i = 0; i < 5; i++){
  //   currentImage = backgroundImagesArray[i]
  //   console.log(currentImage)
  //   setBackgroundImage(currentImage)
  // } 

  // const backgroundImagesArray = [BlackForestCake, ChocolateCake,
  //   VictoriaSpongeCake, VanillaCake, RedVelvetCake]
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
          {/* style={{
            backgroundImage: `url(${imageUrl})`
            backgroundImage: url("/src/assets/images/cake-1850011_640.jpg")
            backgroundImage: selectBackgroundImage
            backgroundImage: `url(${ChocolateCake})`
            backgroundImage: setBackgroundImage(`url(${selectBackgroundImage})`)
          }} */}
      <Body>
        <h2>{title}</h2>
        <p>Buy now</p>
      </Body>
    </DirectoryItemContainer>
  )
}
export default DirectoryItem