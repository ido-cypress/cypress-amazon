/// <reference types="cypress" />

const el = require('../support/element.js')

describe("Five new test in Amazon main page", () =>{

    beforeEach( () => {
        cy.visit("/")

    })

    it('Menu is visiable with 5 iteams with the correct names', () => {
        
        //Validate menu is visible
        el.navShop().should('be.visible'); 
        
        // Expecting 5 main menu items: Today's Deals, Registry,Customer Service, Gift Cards ,Sell
        el.navList().should('have.length', 5); 
    
        // Validate each menu item text and their respective link

        el.todaysDeals().should('have.text', "Today's Deals").and('have.attr', 'href', '/gp/goldbox?ref_=nav_cs_gb');
    
        el.registery().should('have.text', 'Registry').and('have.attr', 'href', '/gp/browse.html?node=16115931011&ref_=nav_cs_registry');
    
        el.customerService().should('have.text', 'Customer Service')
        .and('have.attr', 'href', '/gp/help/customer/display.html?nodeId=508510&ref_=nav_cs_customerservice');
    
        el.giftCards().should('have.text', 'Gift Cards').and('have.attr', 'href', '/gift-cards/b/?ie=UTF8&node=2238192011&ref_=nav_cs_gc');
    
        el.sell().should('have.text', 'Sell').and('have.attr', 'href', '/b/?_encoding=UTF8&ld=AZUSSOA-sell&node=12766669011&ref_=nav_cs_sell');
    
        
      });

      it.only("Find where is my stuff in Customer service", () =>{

        //Validate menu is visible
        el.navShop().should('be.visible'); 

        //Valide the customer service on the menu
        el.customerService().should('have.text', 'Customer Service')
        .and('have.attr', 'href', '/gp/help/customer/display.html?nodeId=508510&ref_=nav_cs_customerservice');

        //Click on the customer service
        el.customerService().click({force: true})

        //Validate I am in the custoer serivce page
        cy.contains('h1', 'Welcome to Amazon Customer Service').should('be.visible');

        //Validate I do have where is my stuff in the page
        el.whereStuff().should('be.visible');;

        //Clicking it
        el.whereStuff().click()

        //Validated I clicked and I am on the right place

       el.validateButton().should('exist');

      })
    
    });


