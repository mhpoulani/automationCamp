describe('first', () => {
  it('1 - async test', () => {
    cy.visit('https://play2.automationcamp.ir');
    cy.get('#fname')
      .type('cypress')
      .then((el) => {
        let input_value = el.val();
        expect(input_value).to.eq('cypress');
      });
  });
  it('2 - api assertion ', () => {//in this function if we open inspect side debugger work for us
    cy.visit('https://play2.automationcamp.ir');
    cy.get('#fname')
      .type('cypress')
      .then((el) => {
        debugger;
        let input_value = el.val();
        expect(input_value).to.eq('cypre');
      });
  });
});
