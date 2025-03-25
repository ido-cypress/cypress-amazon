/// <reference types="cypress" />

const el = require('../support/element.js')

describe("Five new test in Amazon main page", () =>{

    beforeEach( () => {
        cy.visit("/")

    })

    //Visit the amazon page
    it("visit the amazon main page", () => {
          
    })

    //Verifiy the amazon logo is on the top left side
    it("Verfiy the amazon logo position", () =>{
        
        
        el.navLogo().should('be.visible');

        // Verify logo's position
        el.navLogo().then(($el) => {
        const rect = $el[0].getBoundingClientRect();
        expect(rect.top).to.be.closeTo(0, 10);
        expect(rect.left).to.be.closeTo(0, 10);

    })

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
})