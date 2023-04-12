describe("MainPage Adding", () => {
  it("Adding cryptos from mainpage should work correctly", () => {
    cy.visit("http://localhost:3000");

    cy.get("button").contains("+").click();
    cy.get("div[class*='ModalWindow']")
      .get("input")
      .type("1")
      .should("have.value", "1");
    cy.get("button").contains("Buy").click();
    cy.get("img").click();
    cy.get("div[class*='Small']").contains("USDT");
  });
});
