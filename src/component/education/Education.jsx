import React from 'react';
import "../education/Education.css";
import "../../App.css";
import {Button} from "../button/Button";

export default function Education() {
  return (
    <div className="hero-container">
      <video
        src="https://firebasestorage.googleapis.com/v0/b/isstracker-190613.appspot.com/o/videos%2Fvideo-2.mp4?alt=media&token=ea178112-dbe7-4b8f-93d8-e675c2c82723"
        autoPlay
        loop
        muted
      />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for ?</p>
      <div className="hero-btns">
        <Button className="btns"
                buttonStyle="btn--outline"
                buttonSize="btn--large">
          Get Started</Button>
        <Button className="btns"
                buttonStyle="btn--primary"
                buttonSize="btn--large">
          Watch Trailer<i className='far fa-play-circle'/>
        </Button>
      </div>
    </div>
  )
}
