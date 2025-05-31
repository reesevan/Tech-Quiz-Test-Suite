import { mount } from 'cypress/react';

// Make the `mount` function globally available in all component tests
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}

Cypress.Commands.add('mount', mount);
