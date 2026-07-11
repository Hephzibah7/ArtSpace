import NavBarUI from "./NavBarUI"
import { useState } from "react"

function NavBarComponent() {
  const [navCheck, setNavCheck]=useState(false);
  return (
    <div>
      <NavBarUI
      navCheck={navCheck}
      setNavCheck={setNavCheck}
      />
    </div>
  )
}

export default NavBarComponent
