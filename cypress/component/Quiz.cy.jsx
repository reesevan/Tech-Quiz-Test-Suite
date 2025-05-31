import React from 'react';
import { mount } from 'cypress/react18';
import Quiz from '../../src/components/Quiz';

describe('Quiz Component', () => {
  it('starts the quiz and shows first question', () => {
    mount(<Quiz />);
    cy.get('[data-cy=start-quiz]').click();
    cy.get('[data-cy=question-text]').should('be.visible');
  });

  it('progresses to next question on answer click', () => {
    mount(<Quiz />);
    cy.get('[data-cy=start-quiz]').click();

    cy.get('[data-cy=question-text]').then(($first) => {
      const firstQuestion = $first.text();
      cy.get('[data-cy=answer-option]').first().click();
      cy.get('[data-cy=question-text]').should(($next) => {
        expect($next.text()).not.to.eq(firstQuestion);
      });
    });
  });

  it('shows score after last question and allows restart', () => {
    mount(<Quiz />);
    cy.get('[data-cy=start-quiz]').click();

    // Answer all questions (assuming 10)
    for (let i = 0; i < 10; i++) {
      cy.get('[data-cy=answer-option]').first().click();
    }

    cy.get('[data-cy=score]').should('be.visible');
    cy.get('[data-cy=restart-quiz]').click();
    cy.get('[data-cy=start-quiz]').should('be.visible');
  });
});
