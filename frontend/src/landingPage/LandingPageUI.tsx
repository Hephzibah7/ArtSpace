import ArtComponent from "./Art/ArtComponent"
import ArtistComponent from "./Artist/ArtistComponent"
import CategoryComponent from "./Category/CategoryComponent"
import HomeComponent from "./Home/HomeComponent"

function LandingPageUI() {
  return (
    <div>
       <HomeComponent/>
       <ArtComponent/>
       <CategoryComponent/>
       <ArtistComponent/>
       
    </div>
  )
}

export default LandingPageUI
