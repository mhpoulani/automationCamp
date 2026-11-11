///<reference types='Cypress' />
describe('cpy-stub', () => {
  it('interceptor', function () {
    cy.intercept('POST', 'https://global.api.clockify.me/auth/token').as(
      'reqAlias'
    );
    cy.visit('https://app.clockify.me/en/login');
    cy.get('#email').type('admin@automationcapm.ir');
    cy.get('#password').type('123456');
    cy.get("button[type='submit']").click();
    cy.get('[data-cy=workspace-dropdown]').should('contain.text', 'Admin');
    cy.get('@reqAlias');
    cy.get('@reqAlias').then((request) => {
      expect(request.request.body).to.have.ownProperty('password', '123456');
      expect(request.request.body).to.have.ownProperty(
        'password',
        'admin@automationcamp.ir'
      );
      expect(request.response.status).to.equal(200);
      expect(request.response).to.have.ownProperty(
        'email',
        'admin@automationcamp.ir'
      );
    });
  });
  it.only('Mock (stub network)', () => {
    cy.intercept('https://api.realword.io/api/tags', {
      tags: ['AutomationCamp', 'Cypress'],
    }).as('reqAlias');
    cy.visit('https://angular.realword.io/');
    cy.wait('@reqAlias');
    cy.get('@reqAlias').then((req) => {
      expect(req.response).to.eql({ tags: ['AutomationCamp', 'Cypress'] });
    });
    cy.get('.tag-list > a ').contains('AutomationCamp');
  });
});
