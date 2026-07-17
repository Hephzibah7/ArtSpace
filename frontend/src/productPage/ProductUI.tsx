import React from 'react'
import ProductDetailComponent from './Product/ProductDetailComponent';
import CommunityUI from './Community/CommunityUI';
import CommunityComponent from './Community/CommunityComponent';

function ProductUI() {
  return (
    <div className='w-full h-contain flex flex-col gap-[100] p-3 md:p-10'>
      <ProductDetailComponent/>
      <CommunityComponent/>
    </div>
  )
}

export default ProductUI;
