import React, { Component } from 'react';
import ReactTouchEvents from "react-touch-events";
export default class MainComponent extends Component {

    handleTap () {
    
        console.log("you have taped me");
    
    }
    
    handleSwipe (direction) {
    
        switch (direction) {
            case "top":
            case "bottom":
            case "left":
            case "right":
            
                console.log(`you swiped ${direction}`)
        
        }
    }
    render() {
        return (
            <ReactTouchEvents
                onTap={this.handleTap.bind(this)}
                onSwipe={this.handleSwipe.bind(this)}
            >
                <div data-element='main_component' className='main_component' >
                    Tocuh this section
                </div>
            </ReactTouchEvents>
        )
    }

}