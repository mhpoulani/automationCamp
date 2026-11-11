///<reference types="cypress"/>

describe('session3', () => {
  it('1 - keyboard actions > types', () => {
    cy.visit('https://www.google.com');
    cy.get('textarea[name=q]').type('{enter} اموزش سایپرس');
  });
  it('2 - keyboard actions > types', () => {
    cy.visit('https://www.google.com');
    cy.get('textarea[name=q]')
      .type(' cypress')
      .realPress(['Control', 'A'])
      .realPress(['Control', 'X'])
      .realPress(['Control', 'V']);
  });
  it('3 - keyboard actions > types', () => {
    cy.visit('https://www.google.com');
    cy.get('textarea[name=q]').type(' cypress');
    cy.get('textarea[name=q]').clear();
    cy.get('textarea[name=q]').type('cypress');
    cy.get('textarea[name=q]').type('{selectall}').type('{del}');
  });
  it('4 - keyboard actions > types', () => {
    cy.visit('https://www.google.com');
    cy.get('textarea[name=q]').type("i'm testing type for delay ", {
      delay: 100,
    });
    cy.get('textarea[name=q]').clear();
    cy.get('textarea[name=q]').type("i'm testing type for delay ", {
      delay: 0,
    });
  });
  it('5 - keyboard actions > types', () => {
    cy.visit('https://www.google.com');
    cy.get('textarea[name=q]').type('cypress '.repeat(3));
  });
  it('6 - keyboard actions > types', () => {
    cy.visit('https://play2.automationcamp.ir');
    cy.get('input#male').click();
    cy.get('input#male').should('be.checked');
    //double click
    cy.contains('Double-click me').dblclick();
    cy.contains('Your Sample Double Click Worked!');
    //right click
    cy.get('body').rightclick('top');
    cy.get('[href="contact.html"]').click({ ctrlKey: true });
    cy.get('body').rightclick({ force: true });
  });

});
