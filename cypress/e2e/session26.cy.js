///<reference types="cypress"/>
describe('origin and clock', () => {
  it('test', () => {
    cy.visit('https://www.google.com');
    cy.get('[name=q]').type('cypress{enter}');
    cy.contains('cypress: javaScript').click();
    cy.origin('https://cypress.io/', () => {
      cy.get("a[href='/pricing']").click();
      cy.contains('Monthly').should('exist');
    });
  });
  it('passing args', () => {
    cy.visit('https://wikipedia.com');
    let texts = [];
    cy.get('#js-link-box-en')
      .invoke('attr', 'title')
      .then((title) => {
        texts.push(title);
      });
    cy.get('#js-link-box-ru')
      .invoke('attr', 'title')
      .then((title) => {
        texts.push(title);
      });
    cy.origin('play1.automationcamp.ir', { args: { texts } }, ({ texts }) => {
      cy.visit('/forms.html');
      cy.document().its('readyState').should('eq', 'complete'); //wait for page loaded
      cy.log(texts);
      cy.get('#notes').type(texts.join(' '));
    });
  });
  it('1 - freeze clock', () => {
    const myTime = new Date(2014, 7, 25);
    cy.clock(myTime.getTime());
    cy.visit('https://browserspy.dk./date.php');
  });
  it.only('2-clock forward', () => {
    cy.visit('https://ww.play1.automationcamp.ir/expected_conditions.html');
    cy.get('#min_wait').clear().type(15);
    cy.get('#max_wait').clear().type(15);
    cy.get('#visibility_target').should('not.be.visible');
    cy.clock();
    cy.get('#visibility_trigger').click();
    cy.tick(15050);
    cy.get('#visibility_target').should('be.visible');
    cy.clock().invoke('restore');
    cy.clock().then((clock) => {
      clock.restore();
    });
  });
});
