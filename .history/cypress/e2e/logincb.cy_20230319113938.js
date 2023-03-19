

describe('Acessar Login', () => {
    it.only('Entrar', () => {
        cy.visit('https://app.cocobambu.com/entrar')
        cy.get('#username > .native-input') ('victaankian@gmail.com')
        cy.contains('Entrar').click()
    });
});