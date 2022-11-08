describe("Story List", () => {
  it("Home contains Story List", () => {
    cy.visit("localhost:4000/home").contains("Femtasy Audios");
  });

  it("renders Storys from API with title and description", () => {
    cy.get(".StoryList").within(() => {
      cy.get('[data-testid="StoryCard"]').contains("Story 1353");
    });
    cy.get(".StoryList").within(() => {
      cy.get('[data-testid="StoryCard"]').contains("Test 23.8.2018");
    });
  });
});
