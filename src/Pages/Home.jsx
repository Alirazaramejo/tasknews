import React from 'react'
import Navbar from '../Components/Navbar'
import Card from '../Components/card/Card'
import ProductListing from '../Components/ProductListing/ProductListing'
function Home() {
  return (
    <div>
        <Navbar/>
        <Card/>
        <ProductListing/>
    </div>
  )
}

export default Home