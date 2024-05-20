/*import React from "react";
import { Container, Form, InputGroup, Row } from "react-bootstrap";

const SearchBar=(props)=>{
    return(
       <Container>
        <Row>
        <InputGroup size="sm" className="mb-3 border-dark">
        <InputGroup.Text id="inputGroup-sizing-sm">Search</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
        </Row>
       </Container>
    )
}

export default SearchBar;*/

// src/components/SearchBar.js
import React, { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <InputGroup className="mb-2">
            <FormControl
                placeholder="Search for a recipe"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="outline-secondary" onClick={handleSearch}>
                Search
            </Button>
        </InputGroup>
    );
};

export default SearchBar;
