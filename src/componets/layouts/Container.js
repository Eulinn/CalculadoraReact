import React from "react";
import PropTypes from "prop-types";
import "./Container.css";



class Container extends React.Component {

    static propTypes = {
        tamanhoTodo: PropTypes.bool,
        itensMeio: PropTypes.bool,
        fundo: PropTypes.bool,
        item: PropTypes.bool,

    }

    render(){


        const possiveisClasses = [
            "container",
            this.props.tamanhoTodo ? "tamanhoTodo" : "",
            this.props.itensMeio ? "itensMeio" : "",
            this.props.fundo ? "fundo" : "",
            this.props.item ? "item" : "",
        ]


        return (
            <div className={possiveisClasses.join(" ").trim()}>
                {this.props.children}
            </div>
        )
    }

}


export default Container;