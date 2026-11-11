///<reference types="cypress"/>

describe('Aliases', () => {
  before(() => {
    cy.visit('https://play2.automationcamp.ir/index.html');
  });
  beforeEach(() => {
    cy.visit('https://play2.automationcamp.ir/index.html');
    cy.fixture('data.json').as('dataFile');
    cy.get('#lname').as('lastNameElement');
  });
  it('sharing variables 1 ', function () {
    cy.log(this.dataFile.email);
    cy.log(this.dataFile.password);
  });
  it('sharing variables 2', function () {
    cy.get('@lastNameElement').type('poulani');
    cy.wrap(this.lastNameElement).clear().type('poulani');
  });
});
describe.only('api call', () => {
  it('test 1', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/posts').as('posts');
    cy.get('@posts').then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.have.length(100);
    });
  });

  it('test 2', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1').then(
      (res) => {
        expect(res.status).to.eq(200);
        expect(res.body).to.have.property('id', 1);
      }
    );
  });
});
