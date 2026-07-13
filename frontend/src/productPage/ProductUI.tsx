import React from 'react'
import ProductDetailComponent from './Product/ProductDetailComponent';

function ProductUI() {
  return (
    <div className='w-full h-contain flex flex-col gap-[100] p-3 md:p-10'>
      <ProductDetailComponent/>
    </div>
  )
}

export default ProductUI;
