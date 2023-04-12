describe("CurrencyPage Adding", () => {
  it("Case opening and deleting crypto should work correnctly", () => {
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
    cy.get("div[class*='Small']")
      .contains("BTC")
      .get("button[class*='blackCross'")
      .contains("+")
      .click();
    cy.get("div[class*='wrapper']").should(
      "not.contain",
      "div[class*='Small']"
    );
  });
});
