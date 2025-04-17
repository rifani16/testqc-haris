Cypress.Commands.add('loginUser', () => {
  cy.visit('')
  cy.get('[data-cy="username-input-login"]').type('qctest@qcbali03')
  cy.get('[data-cy="password-input-login"]').type('test123')
  cy.get('[data-cy="captcha-input-login"]').type('A3b9Z1')
  cy.get('[data-cy="btn-submit"]').click()
})

Cypress.Commands.add('stepToCreateGuest', () => {
  cy.get('[data-cy="front-office-reception-module"]').should('be.visible').click()
  cy.get('[data-cy="menu-apps-button"]').should('be.visible').click()
  cy.contains('Guest Profile').click()
  cy.get('[data-cy="btn-add-individual"]').click()
})