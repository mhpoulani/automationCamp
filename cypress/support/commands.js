// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })]

Cypress.Commands.add('clickLink', (linkName) => {
  cy.get('a').contains(linkName).click();
});

Cypress.Commands.add('getText', { prevSubject: true }, ($el) => {
  return cy.wrap($el).invoke('text').should('not.be.empty');
});

Cypress.Commands.add(
  'getTextOptional',
  { prevSubject: 'optional' },
  (subject) => {
    if (subject) {
      return cy.wrap(subject).invoke('text').should('not.be.empty');
    } else {
      cy.get('h1').then(($el) => {
        return $el.text();
      });
    }
  }
);

Cypress.Commands.add('loginUsingUI', (email, password) => {
  cy.session(email, () => {
    cy.visit('https://app.clockify.me/en/login');
    cy.get('input#email').type(email);
    cy.get('input#password').type(password);
    cy.get('button[type=submit]').click();
    cy.location('pathname').should('eq', '/tracker');
  });
});

Cypress.Commands.add('loginUsingAPI', (email, password) => {
  cy.session(
    email,
    () => {
      cy.request('POST', 'https://global.api.clockify.me/auth/token', {
        email: email,
        password: password,
      }).then(($resp) => {
        expect($resp.status).to.eq(200);
        window.localStorage.clear();
        window.localStorage.setItem('token', $resp.body.token);
      });
    },
    { cacheAcrossSpecs: true }
  );
});

Cypress.Commands.add('logout', () => {
  cy.clearLocalStorage();
});

Cypress.Commands.add('addProduct', (bookName) => {
  cy.get('.product-title>a').each(($el, index, elements) => {
    if ($el.text().includes(bookName)) {
      cy.get('.product-box-add-to-cart-button').eq(index).click();
    }
  });
});
Cypress.Commands.add('deleteFile', (filePath) => {
  cy.task('deleteFile', filePath);
});
Cypress.Commands.add('deleteFolder', (folderPath) => {
  cy.task('deleteFolder', folderPath);
});
Cypress.Commands.add('deleteDownloadsFolder', () => {
  cy.task('deleteFolder', Cypress.config('downloadsFolder'));
});
require('cypress-downloadfile/lib/downloadFileCommand');
