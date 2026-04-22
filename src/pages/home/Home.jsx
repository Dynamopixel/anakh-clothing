import React from 'react';

import HomeBanner from './home-sections/HomeBanner';
import CollectionCards from '../../components/collection-card/CollectionCards';
import HomeMiddleBanner from './home-sections/HomeMiddleBanner';
import NewArrivals from '../../components/new-arrival/NewArrivals';
import HomeSale from './home-sections/HomeSale';
import SummerCollection from '../../components/summer-collection/SummerCollection';
import ImageCompare from '../../components/image-compare-sectiuon/ImageCompare';


const Home = () => {
  return (
 <>
 <HomeBanner/>
 <CollectionCards/>
 <HomeMiddleBanner/>
 <NewArrivals/>
 <HomeSale/>
 <SummerCollection/>
 {/* <ImageCompare/> */}
 

 </>
  );
};

export default Home;