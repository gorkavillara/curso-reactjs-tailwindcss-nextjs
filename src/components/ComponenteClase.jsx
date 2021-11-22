import React from "react";

class ComponenteClase extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return <>
        <h1>{this.props.texto}</h1>
        </>
    }
}

export default ComponenteClase;