import React from 'react';
import styled from "styled-components";

const Grid = styled.div`
display: grid;`

const Container = styled.div`
background: white;
opacity: 0.6;
width: 40%;
height: 60%;`

const Title = styled.div`
font-size: 20px;
color: orange;`
  
        
 const SwCard = (props) => {
     return (
      <div className="grid">
        <Container className="container">
         <Title key={props.id}>
            <h3> {props.name}</h3>
            <p>Gender: {props.gender}</p>
            <p>Birth Year: {props.birth_year}</p>
            <p>Weight: {props.weight}</p>
        </Title>
        </Container>
      </div>  
     )
 }
 export default SwCard;