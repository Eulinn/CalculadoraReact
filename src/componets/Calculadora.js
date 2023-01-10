import React from "react";
import "./Calculadora.css"


class Calculadora extends React.Component{



    render(){

        return(
            <div className="calculadora">
                {this.props.children}
            </div>
        )
    }




}



export default Calculadora;