import React from 'react';
import styled from "styled-components";


const Container = styled.div`
background: white;
opacity: 0.6;
margin: 0 auto;
width: 40%;
height: 200px;`

const Title = styled.div`
font-size: 25px;
color: #CC5500;`

const Gender = styled.p`
font-size: 20px;
color: #A64500;`

const Birth = styled.p`
font-size: 20px;
color: #803500;`

const Weight = styled.p`
font-size: 20px;
color: #592500;`
  
        
 const SwCard = (props) => {
     return (
      <div className="grid">
        <Container className="container">
         <Title key={props.id}>
            <h3> {props.name}</h3>
            <Gender>Gender: {props.gender}</Gender>
            <Birth>Birth Year: {props.birth_year}</Birth>
            <Weight>Weight: {props.weight}lbs</Weight>
        </Title>
        </Container>
      </div>  
     )
 }
 export default SwCard;