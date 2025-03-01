import React, { useEffect, useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./components/Home"
import About from './components/About'
import Recipes from './components/subcomponents/Recipes'
import RecipeDetails from './components/RecipeDetails'
import data from './recipes.json'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  const [recipes,setRecipes] = useState([]);
  useEffect(()=>{
    setRecipes(data);
  },[]);

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path ='/' element={<Home recipes={recipes}/>}/>
        <Route path ='/about' element ={<About/>}/>
        <Route path ='/recipe/:id' element ={<RecipeDetails recipes={recipes}/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App
