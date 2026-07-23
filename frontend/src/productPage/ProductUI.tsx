import React from 'react'
import ProductDetailComponent from './Product/ProductDetailComponent';
import CommunityUI from './Community/CommunityUI';
import CommunityComponent from './Community/CommunityComponent';
import ArtistAdComponent from './ArtistAd/ArtistAdComponent';
import CommissionComponent from '../Artist/Commission/CommissionComponent';
import StoryComponent from '../Artist/Story/StoryComponent';

function ProductUI() {
  return (
    <div className='w-full h-contain flex flex-col gap-[100px] p-3 md:p-10'>
      <ProductDetailComponent/>
      <CommunityComponent/>
      <ArtistAdComponent/>
      <StoryComponent/>
      <CommissionComponent/>
    </div>
  )
}

export default ProductUI;
