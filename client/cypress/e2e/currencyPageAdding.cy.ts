describe("CurrencyPage Adding", () => {
  it("Adding cryptos from currency page should work correctly", () => {
    cy.visit("http://localhost:3000");

    cy.get("a").contains("BTC").click();
    cy.url().should("contain", "BTC");
    cy.wait(2000);
    cy.get("button").contains("Buy").should("be.visible").click();
    cy.get("div[class*='ModalWindow']")
      .get("input")
      .type("1")
      .should("have.value", "1");
    cy.get("button").contains("Buy").click();
    cy.get("img").click();
    cy.get("div[class*='Small']").contains("BTC");
    cy.compareSnapshot("currencyPageAdding");
  });
});
