import axios from "axios";
import { GET_USER_API_ROUTE, SAVE_USER_API_ROUTE, USER_API_BASE_URL } from "../constant/Api2Const";
export function saveDataOfUser(dataOfUser){
    return axios.post(SAVE_USER_API_ROUTE,dataOfUser);

}

export function getDataOfUser(){
    return axios.get(GET_USER_API_ROUTE);

}