import { Alert, Container } from "react-bootstrap";

export function Header(props){
    return(
        <Container className="text-white">
            <Alert variant="sucess"><h5>{props.title}</h5></Alert>
            <p>This is a recipi digital book</p>
        </Container>
    )
}