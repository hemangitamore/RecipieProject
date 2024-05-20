import axios from "axios";
import { GET_USER_Recipe_API_ROUTE, SAVE_USER_recipe_API_ROUTE, USER_API_BASE_URL } from "../constant/ApiConst";
import { REMOVE_USER_API_ROUTE } from "../constant/Api2Const";
export function saveRecepie(dataOfAddedrecipe){
    return axios.post(SAVE_USER_recipe_API_ROUTE,dataOfAddedrecipe);

}

export function getDataOfUser(){
    return axios.get(GET_USER_Recipe_API_ROUTE);

}

export function fetchRecepie(){
    return axios.get(GET_USER_Recipe_API_ROUTE);

}

export function removeRecepie(recipieId){
    return axios.delete(`${REMOVE_USER_API_ROUTE}/${recipieId}`);

}

export function updateRecepie(){
    return axios.get(GET_USER_Recipe_API_ROUTE);

}