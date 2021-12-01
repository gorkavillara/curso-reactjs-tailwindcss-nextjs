let app;
it('Renderiza correctamente la App', () => {
    app = cy.visit('http://localhost:3000');
});
describe('Probamos el componente Selector', () => {
    it('Tiene el texto', () => {
        cy.contains('El país seleccionado es:');
    })
    it('El select funciona', () => {
        const selectInput = cy.get('select');
        selectInput.select('Egipto');
    })
});

describe('Probamos el botón de la alerta', () => {
    it('Renderiza el botón', () => {
        cy.get('button');
    })
    it('Clic en el botón', () => {
        const botonAlerta = cy.get('button');
        botonAlerta.click();
    })
});