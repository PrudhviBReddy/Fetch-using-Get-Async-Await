import { useEffect, useState } from 'react';
import React from 'react'
import TopNavigation from './TopNavigation';

function Products() {
    let [products, setProducts] = useState([]);

  let getProductsFromServer =  async ()=>{
    let reqOptions = {
      method : "GET",
    };

    let JSONData = await fetch("https://fakestoreapi.com/products", reqOptions);
  let JSOData = await JSONData.json();
  setProducts(JSOData);
  console.log(JSOData);
  };

  useEffect(()=>{
    getProductsFromServer();
  },[]);

  return (
    
    <div className="App">
        <TopNavigation/>
     
    <div className="productsContainer">
    {products.map((ele,i)=>{
      return(
        <div className="productDiv">
        <img src={ele.image} className="productPic" title={ele.description}></img>
        <p>{ele.title}</p>
        <p>Price: ₹ {ele.price}</p>
        </div>
        
      );
    })}
    </div>
    </div>
  )
}

export default Products