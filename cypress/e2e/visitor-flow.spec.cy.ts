describe("Visitor flow", () => {
  it("directs from Landing Page to Home", () => {
    cy.visit("localhost:4000/").get(".LandingPage__logo").click();

    cy.contains("Home");
  });
});
