import React from "react";
import PropTypes from "prop-types";
import "./Botao.css"


class Teclado extends React.Component{

    static propTypes = {
        Nome: PropTypes.string,
        funcao: PropTypes.func,
    }

    NumeroClicou = () =>{
        this.props.funcao(this.props.Nome)
    }

    render(){
        return(<div onClick={this.NumeroClicou} className="bot">
            {this.props.Nome}
        </div>)
    }
}

export default Teclado;
