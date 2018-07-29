import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './App.css';

const Stars = (props) => {  
    return(
      <div className="col-5">
        {Array.from(Array(props.numberOfStars).keys()).map(i =>
         <FontAwesomeIcon icon={faStar} key={i}/>)}
      </div>
    );
  }

export default Stars;