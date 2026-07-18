import React from 'react'
import ProductDetailComponent from './Product/ProductDetailComponent';
import CommunityUI from './Community/CommunityUI';
import CommunityComponent from './Community/CommunityComponent';
import ArtistAdComponent from './ArtistAd/ArtistAdComponent';
import CommissionComponent from '../Artist/Commission/CommissionComponent';

function ProductUI() {
  return (
    <div className='w-full h-contain flex flex-col gap-[100] p-3 md:p-10'>
      <ProductDetailComponent/>
      <CommunityComponent/>
      <ArtistAdComponent/>
      <CommissionComponent/>
    </div>
  )
}

export default ProductUI;
