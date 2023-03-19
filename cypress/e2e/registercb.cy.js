
describe('Registrar Conta', () => {
    it.only('Registrar conta', () => {
        cy.visit('https://app.cocobambu.com/entrar');
        cy.get('[text-left=""] > .link').click();
        cy.get('#name > .native-input').type('Victor Gabriel Alves da Silva');
        cy.get(':nth-child(3) > #username > .native-input').type('victorgabriel.p009@mailinator.com');
        cy.get(':nth-child(5) > .ng-untouched > .native-input').type('CocoBambuDesafio123#');
        cy.get(':nth-child(7) > .ng-untouched > .native-input').type('CocoBambuDesafio123#');
        cy.get('.selector-field > .ng-pristine').click();
        cy.get('.action-sheet-container > :nth-child(1) > :nth-child(8)').click();
        cy.get('.checkbox.ion-invalid > .ng-untouched').click();
        cy.get('.is-primary').click();
        cy.get('.button-container > button').click();
        cy.get('.is-primary').click();
        cy.intercept('POST', '/entrar', {
            statusCode: 201,
            
          }).as('postEnter');
        
    });
});