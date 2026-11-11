///<reference types='Cypress'/>
describe('wrap', () => {
  const food = function (foodName, waitTime) {
    console.log('begin promise ...');
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('food is ready');
        resolve({ foodName: foodName });
      }, waitTime);
    });
  };

  it('test for promise', () => {
    const result = food('pizza', 3000);
    cy.wrap(result).should('have.a.property', 'foodName', 'pizza');
  });
  it('test - 1', () => {
    cy.visit('https://play2.automationcamp.ir');
    cy.get('#fname').then(($el) => {
      cy.wrap($el).type('mohammadHossein');
    });
  });

  it('test 2', () => {
    let name = 'mohammad hossein';
    cy.wrap(name).should('equal', 'mohammad hossein');

    let channel = { name: 'automation camp', subject: 'test automation' };
    cy.wrap(channel).should('have.a.property', 'subject', 'test automation');

    let list = ['apple', 'banana', 'cherry'];

    cy.wrap(list).should('include', 'banana');
  });

  
});
