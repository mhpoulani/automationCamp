///<reference types='cypress' />

describe('custom command 1', () => { 
    it('parentCommand', () => {
        cy.visit('https://wikipedia.org')
        cy.clickLink('English')
    })
    it('childCommand', () => {
        cy.visit('https://en.wikipedia.org/wiki/Main_Page');
        cy.get('#mp-tfa').getText().should('contain', 'featured article');
    })
    it.only('dualCommand', () => {
        cy.visit('https://play2.automationcamp.ir');
        cy.get('h4').first().getTextOptional().should('contain', 'photo');
    })
 })