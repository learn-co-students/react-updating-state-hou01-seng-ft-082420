// Code ClickityClick Component Here

import React, {Component} from 'react'

class ClickityClick extends Component {
    
    constructor() {
        super()
        this.state = {
            hasBeenClicked: false
        };
    }

    //shows optional second argument to appear in console log accurately
    // handleClick = () => {
    //     this.setState({
    //         hasBeenClicked: !this.state.hasBeenClicked
    //     },
    //     () => console.log(this.state.hasBeenClicked))
    // }

    //shows built-in previous State feature
    handleClick = () => {
        this.setState(previousState => {
            return {
            hasBeenClicked: !previousState.hasBeenClicked
            }
        },
        () => console.log(this.state.hasBeenClicked))
    }
    
    render() {
        return (
        <div>
            <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
            <button onClick={this.handleClick}>Click me!</button>
        </div>
        )
    }
}

export default ClickityClick