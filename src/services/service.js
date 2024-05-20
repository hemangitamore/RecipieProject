import axios from "axios";
import {apiKey,includeQueryParameter,searchTerm} from "../constant/ApiConst";
export function fetchRecipies(){
  return axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}${includeQueryParameter ? `&query=${searchTerm}` : ''}`)
  
}