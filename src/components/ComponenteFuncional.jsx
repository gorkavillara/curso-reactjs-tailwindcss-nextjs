import React from "react";
import PropTypes from "prop-types";

const ComponenteFuncional = ({ texto = "Este es el texto" }) => {
    const TextoTemplate = (props) => {
        // console.log(props.texto);
        return (<>
            <p>Inicio de template</p>
            <span>El texto que han pasado por props sería... </span>
            <span>{props.texto}</span>
            <p>Final de template</p>
        </>)
    }
    return <h1>
            <TextoTemplate texto="Texto del template" />
        </h1>
}

ComponenteFuncional.propTypes = {
    texto: PropTypes.string
};

export default ComponenteFuncional;