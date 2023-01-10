import React from "react";
import PropTypes from "prop-types";
import "./Display.css";


class Display extends React.Component{

    static propTypes = {
        valor: PropTypes.string,
        dado: PropTypes.string
    }

    render(){

        return(
            <div className="display">
                <div className="placeholder-simbolos">{this.props.dado}</div>
                {this.props.valor}
            </div>
        )
    }


}

export default Display;