
describe('Registrar Conta', () => {
    it.only('Registrar conta', () => {
        cy.visit('https://app.cocobambu.com/entrar');
        cy.get('[text-left=""] > .link').click();
        cy.get('#name > .native-input').type('Victor Gabriel Alves da Silva');
        cy.get(':nth-child(3) > #username > .native-input').type('victormengogo@gmail.com');
        cy.get('.invalid > .ng-pristine > .native-input').type('CocoBambuDesafio123#');
        cy.get(':nth-child(7) > .ng-untouched > .native-input').type('CocoBambuDesafio123#');
        cy.get('.selector-field > .ng-pristine').click();
        cy.get('.action-sheet-container > :nth-child(1) > :nth-child(8)').click();
        cy.get('.checkbox.ion-invalid > .ng-untouched').click();
        cy.get('.is-primary').click();
        cy.get('.button-container > button').click()
    });
});