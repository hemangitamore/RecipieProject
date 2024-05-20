/*import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { fetchRecepie } from "./recipeAddService";

export function AdedRecipiesList(){

    const [recipies,setRecipies]=useState([]);
    const getAllrecipies=async()=>{
        const response=await fetchRecepie();
        setRecipies(response.data);
    }

    useEffect(()=>{
      getAllrecipies()
    },[])
    return(
        <Container>
            <h3>Here you can view added recipies</h3>
            <Container className="mt-4">
                <Table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>name</th>
                            <th>type</th>
                            <th>userName</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </Table>
            </Container>
        </Container>
    )
}
*/

import { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { fetchRecepie, removeRecepie } from "./recipeAddService.js";

export function AddedRecipesList() {
    const [recipes, setRecipes] = useState([]);

    const getAllRecipes = async () => {
        const response = await fetchRecepie();
        setRecipes(response.data);
    }

   
    
   
    useEffect(() => {
        getAllRecipes();
    }, []);

    return (
        <Container>
            <h3 className="text-white">Here you can view added recipes</h3>
            <Container className="mt-4">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Username</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            recipes.map((r)=>{
                                return(
                                    <tr>
                                        <td>{r.id}</td>
                                        <td>{r.name}</td>
                                        <td>{r.type}</td>
                                        <td>{r.userName}</td>
                                        <td>
                                            <Button variant="danger"  >Delete</Button><Button variant="primary">Edit</Button>
                                            
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                   
                </Table>
            </Container>
        </Container>
    );
};

export default AddedRecipesList;
