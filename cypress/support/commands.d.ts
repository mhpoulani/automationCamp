///<reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    clickLink(linkName: string): Cypress.Chainable;
    getText(element: Element): Cypress.Chainable;
    getTextOptional(element: Element): Cypress.Chainable;
    loginUsingUI(email: string, password: string): Cypress.Chainable;
    loginUsingAPI(email: string, password: string): Cypress.Chainable;
    logout(): Cypress.Chainable;
    deleteDownloadFolder(): Cypress.Chainable;
    deleteFile(filePath: string): Cypress.Chainable;
    deleteFolder(folderPath: string): Cypress.Chainable;
  }
}
