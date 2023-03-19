

describe('Acessar Login', () => {
    it.only('Entrar', () => {
        cy.visit('https://app.cocobambu.com/entrar')
        cy.contains('Entrar').click()
    });
});