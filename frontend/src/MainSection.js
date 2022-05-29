import React, {Component} from 'react';
import './app.css';
import { Button } from './Button';
import './MainSection.css';

export default class MainSection extends Component {
    render() {
  return (
    <div className='main-container'>
        <video src="video-2.mp4" autoPlay loop muted />
        <h1>THE FUTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className='main-btns'>
            <Button 
            className='btns' 
            buttonStyle='btn--outline'
            buttonSize='btn--large'>
            GET STARTED
            </Button>
            
            
        </div>
    </div>
  )
}
}