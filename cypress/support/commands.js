Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Tchubi')
    cy.get('#lastName').type('Hentons')
    cy.get('#email').type('tchubi@email.com')
    cy.get('#open-text-area').type('teste')
    cy.contains('button', 'Enviar').click()
})
