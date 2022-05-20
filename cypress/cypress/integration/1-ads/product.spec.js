/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example to-do app', () => {
  beforeEach(() => {

    // restart rails db and server
    cy.exec('docker exec $(docker ps -q -f "name=rails") bundle exec rake db:reset db:seed');

    cy.exec('docker exec $(docker ps -q -f "name=rails") bundle exec pumactl restart');

  })

  it('displays two todo items by default', () => {
    cy.visit('/ads/edit/1');

    cy.get('input[name="title"]').should('have.value', 'product 1');

  })
})
