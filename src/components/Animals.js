import React, { useEffect, useState } from 'react'
import TopNavigation from './TopNavigation';

function Animals() {

    let [animals, setAnimals] = useState([]);

  let getAnimalsFromServer =  async ()=>{
    let reqOptions = {
      method : "GET",
    };

    let JSONData = await fetch("https://freetestapi.com/api/v1/animals", reqOptions);
  let JSOData = await JSONData.json();
  setAnimals(JSOData);
  console.log(JSOData);
  };

  useEffect(()=>{
    getAnimalsFromServer();
  },[]);

  return (
    <div className="App">
        <TopNavigation/>
     
    <div className="animalsContainer">
    {animals.map((ele,i)=>{
      return(
        <div className="animalsDiv">
        <img src={ele.image} className="animalsPic" title={ele.description}></img>
        <p>{ele.name}</p>
        <p>Species: {ele.species}</p>
        <p>Family: {ele.family}</p>
        <p>Habitat: {ele.habitat}</p>
        <p>Place of Found: {ele.place_of_found}</p>
        <p>Diet: {ele.diet}</p>
        <p>Weight kg: {ele.weight_kg}</p>
        <p>Height cm: {ele.height_cm}</p>
        </div>
        
      );
    })}
    </div>
    </div>
  )
}

export default Animals