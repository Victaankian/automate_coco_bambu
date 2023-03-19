

describe('Acessar Login', () => {
    it.only('Entrar e acessar login', () => {
        cy.visit('https://app.cocobambu.com/entrar');
        cy.get('#username > .native-input').type('victorgabriel.p01@mailinator.com');
        cy.get(':nth-child(3) > .ng-untouched > .native-input').type('CocoBambuDesafio123#');
        cy.get('.buttons-container > :nth-child(1)').click();

        cy.intercept(routeMatcher);
        cy.route('POST', '**/entrar').as('postEnter');

        cy.get('.is-primary').click();
    });
});