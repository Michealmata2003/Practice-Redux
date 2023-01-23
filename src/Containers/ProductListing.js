import React, { useEffect } from 'react'
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux'
import ProductComponent from './ProductComponent';
import { setProducts } from './../redux/actions/productActions';

const ProductListing = () => {
  const Products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products")
    .catch((err) =>{
      console.log("Error", err)
    })
    dispatch(setProducts(res.data))  
  };
  useEffect(() =>{
    fetchProducts();
  }, [])
  console.log( "products", Products)

  return (
    <div className='four_column_wide'>
      <ProductComponent />
    </div>
  )
}

export default ProductListing