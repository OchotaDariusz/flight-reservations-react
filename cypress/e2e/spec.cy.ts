/// <reference types="cypress" />

beforeEach(() => {
  cy.visit('http://localhost:3000/flight-reservations-react');
})

describe('Frontend e2e tests', () => {
  it('Have welcome message on main page', () => {
    cy.contains('Welcome to The Flight Reservation System.');
  })

  it('Have clickable button that redirects to flight search page', () => {
    cy.contains('Search Destinations').click();
    cy.contains('Flight Search');
  })

  it('Should show all countries and airports of that country', () => {
    cy.contains('Search Destinations').click();
    cy.get('[data-testid="ArrowDropDownIcon"]').eq(1).click();
    cy.contains('Poland').click();
    cy.contains('Airports');
    cy.contains('Warsaw').click();
    cy.contains('Departures');
  })


  it('About page have info about developers and App.', () => {
    cy.get('[data-testid="ArrowDropDownIcon"]').eq(0).click();
    cy.contains('About').should('be.visible');
    cy.contains('About').click();
    cy.contains('This App was created only for educational purposes.');
    cy.contains('Szymon Tracz');
    cy.contains('Dariusz Ochota');
  })
})

export {};
