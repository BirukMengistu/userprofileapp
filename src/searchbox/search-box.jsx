import React from 'react';
import './search-box-style.css';
export const SearchBox = ({placeholder , onSearchChange})=>(
    <div >
    <input  className ='search' typeof='search'  
    placeholder={placeholder} 
    onChange={onSearchChange}/> 
    </div>
    
);