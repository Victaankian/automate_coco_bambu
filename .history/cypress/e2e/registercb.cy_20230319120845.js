
describe('Registrar Conta', () => {
    it.only('Registrar conta', () => {
        cy.visit('https://app.cocobambu.com/entrar');
        cy.get('[text-left=""] > .link').click();
        cy.get('#name > .native-input').type('Victor Gabriel Alves da Silva');
    });
});