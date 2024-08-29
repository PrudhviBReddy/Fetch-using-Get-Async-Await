import React, { useEffect, useState } from 'react'
import TopNavigation from './TopNavigation';

function Cars() {

    let [cars, setCars] = useState([]);

    let getCarsFromServer =  async ()=>{
      let reqOptions = {
        method : "GET",
      };
  
      let JSONData = await fetch("https://freetestapi.com/api/v1/cars", reqOptions);
    let JSOData = await JSONData.json();
    setCars(JSOData);
    console.log(JSOData);
    };
  
    useEffect(()=>{
      getCarsFromServer();
    },[]);


  return (
    <div className="App">
        <TopNavigation/>
     
    <div className="carsContainer">
    {cars.map((ele,i)=>{
      return(
        <div className="carsDiv">
        <img src={ele.image} className="carsPic"></img>
        <p>{ele.make}</p>
        <p>Model: {ele.model}</p>
        <p>Year: {ele.year}</p>
        <p>Color: {ele.color}</p>
        <p>Mileage: {ele.mileage}</p>
        <p>Price: ₹ {ele.price}</p>
        <p>FuleType:  {ele.fuelType}</p>
        <p>Transmission:  {ele.transmission}</p>
        <p>Engine:  {ele.engine}</p>
        <p>HorsePower:  {ele.horsepower}</p>
        <p>Features:  {ele.features}</p>
        </div>
        
      );
    })}
    </div>
    </div>
  )
}

export default Cars