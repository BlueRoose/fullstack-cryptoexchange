describe("Routing", () => {
  it("Routing should work correctly", () => {
    cy.visit("http://localhost:3000");

    cy.get("a").contains("BTC").click();
    cy.url().should("contain", "currency");
    cy.get("button").contains("Go back").click();
    cy.url().should("eq", "http://localhost:3000/");
  });
});
