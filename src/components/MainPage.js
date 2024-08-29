import React from 'react'
import { Link } from 'react-router-dom'

function MainPage() {
  return (
    <div className="App"> 
    <Link className="underline" to="/Products">Products</Link> 
    <br></br>
    <Link className="underline" to="/Jewelery">Jewelery</Link> 
    <br></br>
    <Link className="underline" to="/Movies">Movies</Link> 
    <br></br>
    <Link className="underline" to="/Cars">Cars</Link> 
    <br></br>
    <Link className="underline" to="/Animals">Animals</Link> 
    </div> 
  )
}

export default MainPage