import React from 'react'
import Header from '../componenets/Header'
import Banner from '../componenets/Banner'
import Collection from '../componenets/Collection'
import Footer from '../componenets/Footer'
import {Gents,Ladies} from '../componenets/Data'
import { useState } from 'react'
import WomensCollection from '../componenets/WomensCollection'    

const Mainpage = () => {
  //console.log(Gents); 
  //console.log(Ladies);

  const [gentsFashion,setGentsFashion]=useState(Gents);
  const [ladiesFashion,setLadiesFashion]=useState(Ladies);
  return (
    <div>
        <Header/>
        <Banner/>
        <Collection gentsdata={gentsFashion}/>
        <WomensCollection ladiesdata={ladiesFashion}/>
        <Footer/>
    </div>
  )
}

export default Mainpage