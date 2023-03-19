describe('Resetar Senha', () => {
    it.only('Resetar Senha', () => {
        cy.visit('https://app.cocobambu.com/entrar');
        cy.get('.text-right > .link').click();
        cy.get('#alert-input-1-0').click();
        cy.get('#alert-input-1-0').type('victorgabriel.p01@mailinator.com');
        cy.get(':nth-child(2) > .alert-button-inner').click()

    });
});