import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import App from '../App';
import Contador from './Contador';

// const suma = (a, b) => a - b
// test('Suma es correcta: 2 + 3 = 5', () => {
//     let resultadoEsperado = 5;
//     let resultado = suma(2, 3);
//     // expect(suma(2, 3)).toBe(5);
//     expect(suma(2, 3) === 5).not.toBeTruthy();
// })


let component;
beforeEach(() => {
    component = render(<App />)
})

test('debería renderizar el componente App', () => {
    expect(component).toBeDefined();
})

// test('debería renderizar el botón de Incrementar', () => {
//     component.getByText('Incrementar');
//     // const incrementButton = component.container.querySelector('button.incrementar');
// })

// test('El botón de Incrementar debería incrementar el contador', () => {
//     const boton = component.getByText('Incrementar');
//     // Obtén el valor antes de hacer clic
//     const contador = component.getByTestId('contador');
//     const valorInicial = Number(contador.textContent);
//     // Haz clic
//     fireEvent.click(boton);
//     // Obtén el valor después de hacer clic
//     const valorFinal = Number(contador.textContent);
//     expect(valorFinal).toBeGreaterThan(valorInicial);
// })

// test('El botón de Decrementar debería Decrementar el contador', () => {
//     const boton = component.getByText('Decrementar');
//     // Obtén el valor antes de hacer clic
//     const contador = component.getByTestId('contador');
//     const valorInicial = Number(contador.textContent);
//     // Haz clic
//     fireEvent.click(boton);
//     // Obtén el valor después de hacer clic
//     const valorFinal = Number(contador.textContent);
//     expect(valorFinal).toBeLessThan(valorInicial);
// })