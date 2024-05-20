
import 'bootstrap/dist/css/bootstrap.min.css';
//import { BrowserRouter,Route,Routes } from "react-router-dom"
import { Navigation } from "./component/Navigation";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AboutUs } from './component/AboutUs';
//import { AboutUs } from "./component/AboutUs";
import { ContactUs } from "./component/ContactUs";
import { Home } from "./component/Home";
import RegistrationForm from './component/ResistrationForm';
import Login from './component/login';
import AddRecepie from './component/addrecepie';
//import  { UserCards } from './component/showRecipies';
import { AddedRecipesList } from './component/listOfRecipies';



//import SearchBar from './component/SearchBar';



function App() {
  return (
    <div className="background">
      <BrowserRouter>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about-us" element={<AboutUs/>}></Route>
        <Route path="/contact" element={<ContactUs/>}></Route>
        <Route path="/resister" element={<RegistrationForm/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/addrecipe" element={<AddRecepie/>}></Route>
        <Route path="/recipieList" element={<AddedRecipesList/>}></Route>
       
        
       
      </Routes>
      </BrowserRouter>
    </div>
    
   

  );
}

export default App;