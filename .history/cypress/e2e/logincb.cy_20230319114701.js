

describe('Acessar Login', () => {
    it.only('Entrar e acessar login', () => {
        cy.visit('https://app.cocobambu.com/entrar')
        cy.get('#username > .native-input') ('victaankian@gmail.com')
        cy.contains('Entrar').click()
    });
});