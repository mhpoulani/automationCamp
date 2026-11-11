describe("Recording 11/10/2026 at 4:41:54 PM", () => {
  it("tests Recording 11/10/2026 at 4:41:54 PM", () => {
    cy.viewport(1103, 911);
    cy.visit("https://play1.automationcamp.ir/forms.html");
    cy.document().its('readyState').should('eq', 'complete');
    cy.get("#select_lang").type("python");
    cy.get("div:nth-of-type(2) > div:nth-of-type(2) option:nth-of-type(2)").click();
    cy.get("#exp").click();
    cy.get("#exp").type("2");
    cy.get("#notes").click();
    cy.get("#notes").type("mohammadhossein poulani");
    cy.get("#select_lang").type("javascript");
    cy.get("div:nth-of-type(2) > div:nth-of-type(2) option:nth-of-type(3)").click();
    cy.get("#check_python").click();
    cy.get("#check_javascript").click();
    cy.get("#rad_selenium").click();
  });
});
