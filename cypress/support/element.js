//Task 1

export const navLogo = () => cy.get('#nav-logo-sprites');
export const navCart = () => cy.get('#nav-cart-count');
export const navHamburger = () => cy.get('#nav-hamburger-menu')

//Task 2
export const navShop = () => cy.get('#nav-xshop')
export const navList = () =>  cy.get('.nav-ul .nav-li')
export const todaysDeals = () => cy.get('a[data-csa-c-slot-id="nav_cs_0"]')
export const registery = () => cy.get('a[data-csa-c-slot-id="nav_cs_1"]')
export const customerService = () => cy.get('a[data-csa-c-slot-id="nav_cs_2"]')
export const giftCards = () => cy.get('a[data-csa-c-slot-id="nav_cs_3"]')
export const sell = () => cy.get('a[data-csa-c-slot-id="nav_cs_4"]')
export const whereStuff = () =>  cy.get(':nth-child(2) > label')
export const validateButton = () => cy.get('button.fs-button').contains("More in Where's my Stuff")