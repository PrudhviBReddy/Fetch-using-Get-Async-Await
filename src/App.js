
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import './App.css';
import MainPage from './components/MainPage';
import Products from './components/Products';
import Jewelery from './components/Jewelery';
import Movies from './components/Movies';
import Cars from './components/Cars';
import Animals from './components/Animals';


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<MainPage/>}></Route>
    <Route path="/products" element={<Products/>}></Route> 
    <Route path="/jewelery" element={<Jewelery/>}></Route> 
    <Route path="/movies" element={<Movies/>}></Route> 
    <Route path="/cars" element={<Cars/>}></Route> 
    <Route path="/animals" element={<Animals/>}></Route> 
   </Routes>
   </BrowserRouter> 
  )
}

export default App;
