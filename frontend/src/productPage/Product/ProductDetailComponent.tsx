import {useState} from 'react'
import ProductDetailUI from './ProductDetailUI'

function ProductDetailComponent() {
  const [selected, setSelected]=useState("");
  return (
    <div>
      <ProductDetailUI
      selected={selected}
      setSelected={setSelected}
      />
    </div>
  )
}

export default ProductDetailComponent
