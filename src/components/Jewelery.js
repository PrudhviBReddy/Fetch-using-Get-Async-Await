import React, { useEffect, useState } from 'react'
import TopNavigation from './TopNavigation';

function Jewelery() {

  let [jewelery, setJewelery] = useState([]);

  let getJeweleryFromServer =  async ()=>{
    let reqOptions = {
      method : "GET",
    };

    let JSONData = await fetch("https://fakestoreapi.com/products/category/jewelery", reqOptions);
  let JSOData = await JSONData.json();
  setJewelery(JSOData);
  console.log(JSOData);
  };

  useEffect(()=>{
    getJeweleryFromServer();
  },[]);


  return (
    <div className="App">
    <TopNavigation/>
 
<div className="jeweleryContainer">
{jewelery.map((ele,i)=>{
  return(
    <div className="jeweleryDiv">
    <img src={ele.image} className="jeweleryPic" title={ele.description}></img>
    <p>{ele.title}</p>
    <p>Price: ₹ {ele.price}</p>
    <p>Category: {ele.category}</p>
    </div>
    
  );
})}
</div>
</div>
      )
    }
    
 export default Jewelery