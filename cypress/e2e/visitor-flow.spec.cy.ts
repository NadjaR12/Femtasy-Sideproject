describe("Visitor flow", () => {
  it("directs to Home", () => {
    cy.visit("localhost:4000/home").contains("Femtasy Audios");
  });
});
