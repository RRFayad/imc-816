import { Component } from "react";
import './style.css';

class Button extends Component {

    render() {

        return (
            <button className="button">
                {this.props.banana}
            </button>
        )
    }
}

export { Button };