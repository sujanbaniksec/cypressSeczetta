/// <reference types="cypress" />

describe("Run Cypress in iframe webApp", () => {
  //Code wrapped in TC
  it("Run Cypress in iframe webApp with code inside", () => {
    cy.visit("https://the-internet.herokuapp.com/iframe");
    const iframe = cy
      .get("#mce_0_ifr")
      .its("0.contentDocument.body")
      .should("be.visible")
      .then(cy.wrap);
    iframe.clear().type("Seczetta");
  });

  //Using a custom command
  it("Run Cypress in iframe webApp with custom command", () => {
    cy.visit("https://the-internet.herokuapp.com/iframe");
    cy.switchToIframe("#mce_0_ifr").clear().type("devTeam");
  });
  //Using plugin
  it("Run Cypress in iframe webApp with plugin", () => {
    cy.visit("https://kitchen.applitools.com/ingredients/iframe");
    cy.frameLoaded("#the-kitchen-table");

    cy.enter("#the-kitchen-table").then((getBody) => {
      getBody().find("#column-button-name").should("be.visible").click();
      getBody().find("#column-button-flavor").should("be.visible").click();
    });
  });
});
