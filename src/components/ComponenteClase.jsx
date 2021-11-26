import React from "react";

class ComponenteClase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 5
        }
    }

    increment = () => {
        this.setState(prevState => (
            { ...this.state, 
                contador: prevState.contador + 1 
            }
        ))
    }

    decrement() {
        this.setState({ ...this.state, contador: this.state.contador - 1})
    }

    componentDidMount() {
        console.log(`Component did mount`);
        // Obtener base de datos de alumnos
        // Guardarlos dentro del estado
        // Conectarnos a una suscripción
    }

    shouldComponentUpdate() {
        console.log('Component will update');
        return true;
    }

    componentDidUpdate() {
        console.log('Component Did Update');
    }

    componentWillUnmount() {
        // Desuscribiríamos de cualquier suscripción
        console.log('Se está desmontando');
    }

    render() {
        const { contador } = this.state;
        return (
            <>
                {/* <h1>{this.props.texto}</h1> */}
                <h2>El valor del contador es: {contador}</h2>
                <button onClick={this.increment}>Incrementar</button>
                <button onClick={() => this.decrement()}>Decrementar</button>
            </>
        )
    }
}

export default ComponenteClase;