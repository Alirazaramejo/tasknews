// ProductDetailPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductData } from '../../services/products.service';

function SinglePage() {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProductData(id);
        console.log(data)
        
      
        setProductData(data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      {/* Render product data here */}
      {productData && (
        <div>
          {/* Render product details using productData */}
          <h2>{productData[0]}</h2>
          <p>{productData[1]}</p>
          <p>{productData[2]}</p>
          <p>{productData[3]}</p>
          <p>{productData[4]}</p>
          <p>{productData[5]}</p>
          {/* Add other product details rendering here */}
        </div>
      )}
    </>
  );
}

export default SinglePage;
