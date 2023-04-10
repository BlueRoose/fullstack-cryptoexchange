describe("Pagination", () => {
  it("Pagination should work correctly", () => {
    cy.visit("http://localhost:3000");

    cy.get("button").contains(">").click();
    cy.get("button").contains("2").should("have.class", "PaginationButton_active__qtBQg");
    cy.get("button").contains("<").click();
    cy.get("button").contains("1").should("have.class", "PaginationButton_active__qtBQg");
  });
});
