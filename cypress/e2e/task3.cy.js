/// <reference types="cypress" />

const el = require('../support/element.js')
import '../support/commands.js'
const newUrl = Cypress.env("newUrl")
const cartUrl = Cypress.env("cartUrl")
const clickIncreaseButton = (times) => {
    if (times <= 0) return}

describe("Search items and add them to the cart and delete them later on", () =>{

    beforeEach( () => {
        cy.visit("/")
        cy.wait(3000)
        cy.clickDismiss()

    })


    it("Add item into the cart", () => {
        
        //Valite the bar is visibale
        el.navFillSearch().should('be.visible')
        //Type in the seaerch
        el.navFillSearch().type("Bostitch Office Personal Electric Pencil Sharpener, Powerful Stall-Free Motor, High Capacity Shavings Tray, Gray (EPS4-KTGRAY)")
        //Click Submit
        el.clickSearchSubmitBtn().click()
        el.addToCart().click();
        cy.wait(5000)
        //Verifiy the element and the correct price
        el.sideBarCart().should('contain.text', '$16.99')  

        

        //Move to the new URL
        cy.visit(newUrl)
        //validate i am in the new URL
        el.scissorsValidate().should('exist').should('be.visible').invoke('text').then((text) => {   
        const trimmedText = text.trim(); 
        const expectedText = 'Scissors, iBayam 8" All Purpose Scissors Bulk 3-Pack, Ultra Sharp 2.5mm Thick Blade Shears Comfort-Grip for Office Desk Accessories Sewing Fabric Home Craft Teacher School Supplies, Right/Left Handed';
        expect(trimmedText).to.equal(expectedText)
        })
        //Click on red black and blue
        el.redBlackBlueScissors().click()
        el.anotherAddToCart().click();
        //Validate added to the cart
        el.validateAddToCart().should('include.text', 'Added to cart')
        el.proceedToRetailCheckout().click()
        cy.loginWhileShopping()
        //Because the Amazon error
        //el.amazonHome().should('be.visible').click()
        //Asseration
        //el.navLinkAccount().invoke('text').then((text) => {
        //expect(text.trim()).to.eq('Hello, Ido')})
        el.cart().click()
        el.proceedToRetailCheckout().click()
        el.cart().click()

        //Assertion shopping cart
        cy.shoppingCartAssertaion()


        //Adding more Scissors cause pencil there is only one
    

        clickIncreaseButton(5)

        
        
        
    })
    
    
    afterEach(() => {
        cy.visit(cartUrl);
    
        const deleteItems = () => {
            el.subTotal().invoke('text').then((text) => {
                if (text.includes('Subtotal (0 items):')) {
                    return;
                }
    
                el.decreaseItem().then(($buttons) => {
                    if ($buttons.length > 0) {
                        cy.wrap($buttons.first()).click();
                        cy.wait(1000);
                        deleteItems();
                    } else {
                        el.subTotal().should('be.visible').and('contain.text', 'Subtotal (0 items):');
                    }
                });
            });
        };
    
        deleteItems();
    });
    
      
      
      
      
      
      
      
      
      
      
    
    


})   