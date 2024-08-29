import React, { useEffect, useState } from 'react'
import TopNavigation from './TopNavigation';

function Carts() {

    let [carts, setCarts] = useState([]);

  let getCartsFromServer =  async ()=>{
    let reqOptions = {
      method : "GET",
    };

    let JSONData = await fetch("https://fakestoreapi.com/products", reqOptions);
  let JSOData = await JSONData.json();
  setCarts(JSOData);
  console.log(JSOData);
  };

  useEffect(()=>{
    getCartsFromServer();
  },[]);


  return (
    <div className="App">
        <TopNavigation/>
     
    <div className="cartsContainer">
    {carts.map((ele,i)=>{
      return(
        <div className="cartsDiv">
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>userId</th>
                        <th>date</th>
                        <th>products</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{ele.id}</td>
                        <td>{ele.userId}</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
      );
    })}
    </div>
    </div>
  )
}

export default Carts