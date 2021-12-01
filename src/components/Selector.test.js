import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Selector from './Selector'

describe('probamos renderizado del componente', () => {
    test('debería renderizar el componente', () => {
        render(<Selector paises={["Canadá", "Mexico", "Guatemala"]} paisSeleccionado="Canadá" />)
    })

    test('debería renderizar INCLUSO sin pasarle ningún prop', () => {
        render(<Selector />);
    })

    test('debería seleccionar algún país INCLUSO sin pasarle ningún país seleccinado', () => {
        const component = render(<Selector />);
        const span = component.getByRole('pais-seleccionado');
        expect(span.textContent).not.toBe("");
    })
})
test('cuando hacemos click debería lanzarse la función', () => {
    const mockHandler = jest.fn();
    const component = render(<Selector muestraAlerta={mockHandler} />);
    const alertaButton = component.getByText('Alerta');
    fireEvent.click(alertaButton);

    expect(mockHandler).toBeCalled();
    expect(mockHandler).toBeCalledTimes(1);
})

// test('probar diferentes parámetros en el Selector', () => {
//     const parametros = [
//         {
//             paises: [],
//             paisSeleccionado: "Uganda",
//             muestraAlerta: null
//         },
//         {
//             paises: ["Uganda", "Senegal"],
//             paisSeleccionado: undefined,
//             muestraAlerta: undefined
//         }
//     ]
//     parametros.map((params) => {
//         render(<Selector paises={params.paises} paisSeleccionado={params.paisSeleccionado} muestraAlerta={params.muestraAlerta} />)
//     })
// })

const parametros = [
    {
        paises: [],
        paisSeleccionado: "Uganda",
        muestraAlerta: null
    },
    {
        paises: ["Uganda", "Senegal"],
        paisSeleccionado: undefined,
        muestraAlerta: undefined
    },
    {
        paises: ["Uganda", "Senegal"],
        paisSeleccionado: undefined,
        muestraAlerta: undefined
    },
    {
        paises: ["Uganda", "Senegal"],
        paisSeleccionado: undefined,
        muestraAlerta: undefined
    },
    {
        paises: ["Uganda", "Senegal"],
        paisSeleccionado: undefined,
        muestraAlerta: undefined
    },
    {
        paises: ["Uganda", "Senegal"],
        paisSeleccionado: undefined,
        muestraAlerta: undefined
    },
    {
        paises: ["Uganda", "Senegal"],
        paisSeleccionado: undefined,
        muestraAlerta: undefined
    },
    {
        paises: ["Uganda", "Senegal"],
        paisSeleccionado: undefined,
        muestraAlerta: undefined
    },
    {
        paises: ["Uganda", "Senegal"],
        paisSeleccionado: undefined,
        muestraAlerta: undefined
    },
    {
        paises: ["Uganda", "Senegal"],
        paisSeleccionado: undefined,
        muestraAlerta: undefined
    },
    {
        paises: ["Uganda", "Senegal"],
        paisSeleccionado: undefined,
        muestraAlerta: undefined
    },
    {
        paises: ["Uganda", "Senegal"],
        paisSeleccionado: undefined,
        muestraAlerta: undefined
    },
    {
        paises: ["Uganda", "Senegal"],
        paisSeleccionado: undefined,
        muestraAlerta: undefined
    },
    {
        paises: ["Uganda", "Senegal"],
        paisSeleccionado: undefined,
        muestraAlerta: undefined
    },
    {
        paises: ["Uganda", "Senegal"],
        paisSeleccionado: undefined,
        muestraAlerta: undefined
    },
    {
        paises: ["Uganda", "Senegal"],
        paisSeleccionado: undefined,
        muestraAlerta: undefined
    },
    {
        paises: ["Uganda", "Senegal"],
        paisSeleccionado: undefined,
        muestraAlerta: undefined
    },
    {
        paises: ["Uganda", "Senegal"],
        paisSeleccionado: undefined,
        muestraAlerta: undefined
    },
    {
        paises: ["Uganda", "Senegal"],
        paisSeleccionado: undefined,
        muestraAlerta: undefined
    }
]
describe('test parametrizados', () => {
    parametros.map((params, i) => {
        test(`probar diferentes parámetros en el Selector. Param: ${i}`, () => {
            render(<Selector paises={params.paises} paisSeleccionado={params.paisSeleccionado} muestraAlerta={params.muestraAlerta} />)
        })
    })
})
