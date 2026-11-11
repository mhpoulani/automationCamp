describe('Session20', () => {
  beforeEach(() => {
    cy.fixture('users.json').as('userData');
    cy.fixture('books.json').as('booksData');
  });
  it('user 1 fixture', function () {
    cy.visit('https://play2.automationcamp.ir/index.html');
    cy.get('#fname').type(this.userData.user1.firstName);
    cy.get('#lname').type(this.userData.user1.lastName);
    cy.get(`input#${this.userData.user1.gender}`).check();
  });
  it('user 2 fixture', function () {
    cy.visit('https://play2.automationcamp.ir/index.html');
    cy.get('#fname').type(this.userData.user2.firstName);
    cy.get('#lname').type(this.userData.user2.lastName);
    cy.get(`input#${this.userData.user2.gender}`).check();
  });
  it('Add book to cart', function () {
    cy.visit('https://demo.nopcommerce.com/book');
    this.booksData.bookForTest.forEach((element) => {
      cy.addProduct(element);
    });
    cy.visit('https://demo.nopcommerce.com/cart');
    cy.get('.product-name')
      .should('have.length', 2)
      .each(($el, index, elements) => {
        expect(this.booksData.bookForTest.includes($el.text()));
      });
  });
});
