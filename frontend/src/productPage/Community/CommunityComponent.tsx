import { useState } from "react"
import CommunityUI from "./CommunityUI"

function CommunityComponent() {
  const [selected, setSelected]=useState("buyer");

  return (
    <div>
      <CommunityUI
      selected={selected}
      setSelected={setSelected}
      />
    </div>
  )
}

export default CommunityComponent
