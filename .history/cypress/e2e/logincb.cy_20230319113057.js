

describe('Acessar Login', () => {
    it.only('Acessar o Perfil', () => {
        cy.visit('https://app.cocobambu.com/entrar')
        cy.contains('Perfil').click()
    });
});