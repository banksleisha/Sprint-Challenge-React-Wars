import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SwCard from './SwCard';

export default function SwList () {
    const [peoples, setPeople] = useState([]);
    const [counter, setCounter] = useState(1);
    useEffect(() => {
        axios
        .get(`https://swapi.co/api/people/${counter}/`)
        .then(response =>{
            console.log(response.data);
            setPeople([...peoples, response.data]);
            setCounter(counter+1)
        })

        .catch(error =>{
            console.log("error");
        });
    }, [counter])
    return (
        
        <div>
            { peoples.map((people, index)=> {
                return (
                    <SwCard 
                        key={index} 
                        name={people.name}
                        gender={people.gender} 
                        birth_year={people.birth_year}
                        weight={people.mass}/>
                )
            })}
        </div>
    )
}