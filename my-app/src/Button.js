import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes, faRedo } from '@fortawesome/free-solid-svg-icons'
import './App.css';

const Button = (props) => {
    let button;
    switch (props.answerIsCorrect) {
      case true:
        button = 
          <button className="btn btn-success" onClick={props.acceptAnswer}>
            <FontAwesomeIcon icon={faCheck} />
          </button>;
        break;
      case false:
        button = 
          <button className="btn btn-danger">
            <FontAwesomeIcon icon={faTimes} />
          </button>;
        break;
      default:
      button =
        <button className="btn" 
                onClick={props.checkAnswer}
                disabled={props.selectedNumbers.length === 0}
                >=</button>;
        break;
    }
    return(
      <div className="col-2 text-center">
        {button}
        <br /> <br/>
        <div>
          <button className="btn btn-warning btn-sm"
                  onClick={props.redraw}
                  disabled={props.redraws === 0}> 
            <FontAwesomeIcon icon={faRedo} />{props.redraws}
          </button>
        </div>
      </div>
    );
  }

  export default Button;
  