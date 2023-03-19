

describe('Acessar Login', () => {
    it.only('Entrar e acessar login', () => {
        cy.visit('https://app.cocobambu.com/entrar')
        cy.get('#username > .native-input').type('victaankian@gmail.com')
        cy.get(':nth-child(3) > .ng-untouched > .native-input').type('VictorGabriel214#01021999')
        cy.get('.buttons-container > :nth-child(1)')
    });
});