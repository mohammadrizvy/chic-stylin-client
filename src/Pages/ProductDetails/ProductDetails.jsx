import React from 'react';
import { useParams } from 'react-router-dom';
import useProductDetails from '../../Hooks/useProductDetails';

const ProductDetails = () => {
    const { id } = useParams();
    console.log(`Product ID from URL: ${id}`);
    const { product, isLoading, error } = useProductDetails(id);
  
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error fetching product details</p>;
  
    console.log("Product data:", product);
  
    return (
      <div>
        <h1>{product.productName}</h1>
        <img src={product.image} alt=""/>
      </div>
    );
  };
export default ProductDetails;