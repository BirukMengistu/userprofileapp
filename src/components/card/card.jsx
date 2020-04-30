import React from 'react';
import './card-style.css';
export const Card = props =>(
    <div className='card-container'>
     <img alt = "Profile-card " src={`https://robohash.org/${props.pro.id}?set=set2&size=180x180`}/>
     <h2> {props.pro.name}</h2>
     <h2> {props.pro.email}</h2>
    </div>
    
);