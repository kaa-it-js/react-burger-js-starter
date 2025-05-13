/// <reference types="cypress" />

import { add } from '@utils/utils.ts';

describe('template spec', () => {
  it('passes', () => {
    cy.visit('/');
    add('a', 'b');
  });
});
