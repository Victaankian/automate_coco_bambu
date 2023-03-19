describe('Resetar Senha', () => {
    it.only('Resetar Senha', () => {
        cy.visit('https://app.cocobambu.com/entrar');
        cy.get('.text-right > .link').click();
        cy.get('#alert-input-2-0').type('victaankian@gmail.com');
        cy.get(':nth-child(2) > .alert-button-inner').click()

    });
});