

describe('Acessar Login', () => {
    it.only('Entrar e acessar login', () => {
        cy.visit('https://app.cocobambu.com/entrar');
        cy.get('#username > .native-input').type('victorgabriel.p01@mailinator.com');
        cy.get(':nth-child(3) > .ng-untouched > .native-input').type('CocoBambuDesafio123#');
        cy.get('.buttons-container > :nth-child(1)').click();

        cy.intercept('POST', '/enter', {
            statusCode: 201,
            
          })

        cy.get('.is-primary').click();
        cy.wait().then((xhr) => {
            expect(xhr.status).be.eq(200)

        })
    });
});