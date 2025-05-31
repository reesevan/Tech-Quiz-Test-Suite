describe('Tech Quiz App E2E', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('starts the quiz and shows first question', () => {
    cy.get('[data-cy=start-quiz]').click();
    cy.get('[data-cy=question-text]').should('be.visible');
  });

  it('answers questions and shows score at end', () => {
    cy.get('[data-cy=start-quiz]').click();

    for (let i = 0; i < 10; i++) {
      cy.get('[data-cy=answer-option]').first().click();
    }

    cy.get('[data-cy=score]').should('contain.text', 'Your Score');
  });

  it('can restart quiz after finishing', () => {
    cy.get('[data-cy=start-quiz]').click();

    for (let i = 0; i < 10; i++) {
      cy.get('[data-cy=answer-option]').first().click();
    }

    cy.get('[data-cy=restart-quiz]').click();
    cy.get('[data-cy=start-quiz]').should('be.visible');
  });
});
