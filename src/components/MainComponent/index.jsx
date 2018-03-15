import React, { Component } from 'react';
import ReactTouchEvents from "react-touch-events";
export default class MainComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            direction: null,
            taped: false
        }
    }
    handleTap() {
        this.setState({
            taped: true
        })
    }

    handleSwipe(direction) {
        switch (direction) {
            case "top":
            case "bottom":
            case "left":
            case "right":
                this.setState({
                    direction: direction
                })
        }
    }
    render() {
        return (
            <section>
                <ReactTouchEvents
                    onTap={this.handleTap.bind(this)}
                    onSwipe={this.handleSwipe.bind(this)}
                >
                    <div data-element='main_component' className={`main_component ${this.state.direction}`} >
                        Tocuh this section
                </div>
                </ReactTouchEvents>

                <br />
                <div className='results'  >
                    {
                        this.state.direction ?
                            `Nos vamos para ${this.state.direction}`
                            : 'Aún no haces nada!!!'
                    }
                    <br/>
                    <br/>
                    {
                        this.state.taped ?
                            `Haz dado click!`
                            : ''
                    }
                </div>
            </section>
        )
    }

}