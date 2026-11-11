/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

describe('iframe loading', () => {
  it('load iframe', () => {
    cy.visit('https://play1.automationcamp.ir/frames.html');
    cy.get('#frame1')
      .its('0.contentDocument')
      .its('body')
      .find('#frame2')
      .its('0.contentDocument')
      .its('body')
      .find('#click_me_2')
      .click();
  });
  it.only('loading iframe with plugin', () => {
    cy.visit('https://play1.automationcamp.ir/frames.html');
    cy.frameLoaded('#frame1');
    cy.iframe()
      .find('#frame2')
      .its('0.contentDocument')
      .should('not.be.empty')
      .find('#click_me_2')
      .click();
  });
});
