import React from 'react';
import './cardlist.css'
import {Card} from '../card/card';
export const CardList = props =>
{  
     
      return (
        <div className='card-list'>
          {props.prof.map(pro => (<Card key = {pro.id} pro ={pro}/> ))};   
       </div>);
};



