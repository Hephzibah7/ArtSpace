import { useState } from "react"
import StoryUI from "./StoryUI"


function StoryComponent() {

  const [selected, setSelected]=useState(0);
  const ansData=[
    {
      id:1,
      question:"What inspired your artwork?",
      answer:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    },{
      id:2,
      question:"What emotions do you hope viewers experience?",
      answer:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    },
    {
      id:3,
      question:"What makes this artwork unique?",
      answer:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    },
    {
      id:4,
      question:"Is there a personal story behind this piece? ",
      answer:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    },
    {
      id:5,
      question:"Any special techniques used",
      answer:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    }
    
  ]

  const handleClick=(index:number)=>{
    if(selected==index){
      setSelected(0);
    }
    else{
      setSelected(index);
    }
  }
  return (
    <div>
      <StoryUI
      ansData={ansData}
      selected={selected}
      handleClick={handleClick}
      />
    </div>
  )
}

export default StoryComponent
