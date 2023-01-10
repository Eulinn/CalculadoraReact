import React from "react";
import PropTypes from "prop-types";
import "./Teclado.css"

import Botao from "./Botao.js";


class Teclado extends React.Component{

    static propTypes = {
        funcao: PropTypes.func,
    }

    NumeroClicou = BotaoValor => {
        this.props.funcao(BotaoValor);
    };


    render(){
        
        let Dados = ["0","1","2","3","4","5","6","7","8","9",".","+","-","*","/","="];


        return (
            <div className="teclado">

                <div className="Container-Botao">

                    <Botao funcao={this.NumeroClicou} Nome='7' />
                    <Botao funcao={this.NumeroClicou} Nome='8' />
                    <Botao funcao={this.NumeroClicou} Nome='9' />
                    <Botao funcao={this.NumeroClicou} Nome='x²' />
                    <Botao funcao={this.NumeroClicou} Nome='√' />

                </div>

                <div className="Container-Botao">

                    <Botao funcao={this.NumeroClicou} Nome='4' />
                    <Botao funcao={this.NumeroClicou} Nome='5' />
                    <Botao funcao={this.NumeroClicou} Nome='6' />
                    <Botao funcao={this.NumeroClicou} Nome='×' />
                    <Botao funcao={this.NumeroClicou} Nome='÷' />

                </div>

                <div className="Container-Botao">

                    <Botao funcao={this.NumeroClicou} Nome='1' />
                    <Botao funcao={this.NumeroClicou} Nome='2' />
                    <Botao funcao={this.NumeroClicou} Nome='3' />
                    <Botao funcao={this.NumeroClicou} Nome='+' />
                    <Botao funcao={this.NumeroClicou} Nome='-' />

                </div>

                <div className="Container-Botao">

                    <Botao funcao={this.NumeroClicou} Nome=',' />
                    <Botao funcao={this.NumeroClicou} Nome='0' />
                    <Botao funcao={this.NumeroClicou} Nome='' />
                    <Botao funcao={this.NumeroClicou} Nome='%' />
                    <Botao funcao={this.NumeroClicou} Nome='=' />


                </div>

            </div>
        )
    }
}

export default Teclado;




