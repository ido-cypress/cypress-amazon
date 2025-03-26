/// <reference types="cypress" />

const el = require('../support/element.js')
const name = Cypress.env("NAME")
const email = Cypress.env("EMAIL")
const password = Cypress.env("PASSWORD")

describe("Five new test in Amazon main page", () =>{
    beforeEach( () => {
        cy.visit("/")
        cy.wait(3000)
        cy.clickDismiss()
        
        })
    //Visit the amazon page
    it("visit the amazon main page", () => {
          
    })

    //Verifiy the amazon logo is on the top left side
    it("Verfiy the amazon logo position", () =>{
        
        
      //  el.navLogo().should('be.visible');

        // Verify logo's position
      //  el.navLogo().then(($el) => {
     //   const rect = $el[0].getBoundingClientRect();
     //   expect(rect.top).to.be.closeTo(0, 10);
     //   expect(rect.left).to.be.closeTo(0, 10);

    })

    

    //Validite zero in the cart i have no account in amazon yet
    it('Should validate that the cart count is zero', () => {
          // el.navCart({ timeout: 10000 } ) 
          //.should('be.visible')     
          //.should('have.text', '0'); 
      });

    //Verify that we have a sreach bar on the page
    it("Should Validate a seearch bar in the main page", () =>{

    })  

    //Verifiy you can click on All in the top left nav bar
    it("After clicking the all the menu is visiable", () =>{

        //el.navHamburger().click()
        //cy.get('ul.hmenu').should('have.class', 'hmenu-visible')

    })  

    it.only("Mocking\Stubbing creation of a new Amazon account", () => {
        el.hoover().trigger('mouseover',{force: true})
        el.newAccount().should('be.visible').click({force: true})
        //Create account validation page
        el.createAccount().should('be.visible').invoke('text').should('match', /^\s*Create account\s*$/)
        //Stubbing the api for it
        cy.intercept('POST', '**/ap/register', { 
            statusCode: 200, 
            body: { success: true, message: 'Account created successfully' } 
          }).as('registerRequest');
      
        el.yourNameInput().should('be.visible').type(name).should('have.value', 'Ido Cypress')
        el.email().type(email).should('have.value', 'ido.cypress.github@gmail.com')
        el.password().type(password).should('have.value', 'Aa123456!')
        el.rePassword().type(password).should('have.value', 'Aa123456!')
        el.con().click()
        
        //Validate account created successfully
        cy.wait('@registerRequest').its('response.statusCode').should('eq', 200);
        cy.get('pre').invoke('text').should('eq', '{"success":true,"message":"Account created successfully"}');

    })

})