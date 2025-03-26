// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const el = require('../support/element.js')
const email = Cypress.env("EMAIL")
const password = Cypress.env("PASSWORD")

Cypress.Commands.add('loginFromMainPage',() => {
    el.hoover().trigger('mouseover', { force: true })
    el.signIn().should('be.visible').click({force: true})
    el.email().type(email).should('have.value', 'ido.cypress.github@gmail.com')
    el.con().click()
    el.password().type(password).should('have.value', 'Aa123456!')
    el.signInSubmit().click()
    //Asseration
    el.navLinkAccount().invoke('text').then((text) => {
      expect(text.trim()).to.eq('Hello, Ido')
    })
})

Cypress.Commands.add('loginWhileShopping',() => {
    
    el.email().type(email).should('have.value', 'ido.cypress.github@gmail.com')
    el.con().click()
    el.password().type(password).should('have.value', 'Aa123456!')
    el.signInSubmit().click()    

})

Cypress.Commands.add('clickDismiss', () => {
    el.dismiss().click()
    //Asseration
    cy.contains('span.a-button-text', 'Dismiss').should('not.exist')

})    

Cypress.Commands.add('shoppingCartAssertaion', () =>{
    cy.wait(1000)
    el.shoppingCartValidation().invoke('text').then((text) => {
    const normalizedText = text.replace(/\s+/g, ' ').trim()
    expect(normalizedText).to.equal('Shopping Cart')
  })

  


  Cypress.Commands.add('scissorsValidataio', () =>{
    //Move to the new URL
    cy.visit(newUrl)
    //validate i am in the new URL
    el.scissorsValidate().should('exist').should('be.visible').invoke('text').then((text) => {   
    const trimmedText = text.trim()
    const expectedText = 'Scissors, iBayam 8" All Purpose Scissors Bulk 3-Pack, Ultra Sharp 2.5mm Thick Blade Shears Comfort-Grip for Office Desk Accessories Sewing Fabric Home Craft Teacher School Supplies, Right/Left Handed';
    expect(trimmedText).to.equal(expectedText)
            })
  })
})

Cypress.Commands.add("clickIncreaseButton", (times) => {
    if (times <= 0) return;

    el.increaseItem().find('button[data-action="a-stepper-increment"]').first().click().then(() => {
            cy.wait(500); // Wait a bit for UI updates
            cy.clickIncreaseButton(times - 1)
        })
})
