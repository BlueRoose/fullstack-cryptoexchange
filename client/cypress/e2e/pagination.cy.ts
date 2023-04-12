describe("Pagination", () => {
  it("Pagination should work correctly", () => {
    cy.visit("http://localhost:3000");

    cy.get("button").contains(">").click();
    cy.get("button[class*='active']").should("contain", "2");
    cy.get("button").contains("<").click();
    cy.get("button[class*='active']").should("contain", "1");
  });
});
