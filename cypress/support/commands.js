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
Cypress.Commands.add('login', (userId, password) => {
    cy.visit("https://www.saucedemo.com/");
    //login credentials
    loginPage.getUserName().type(userId);
    loginPage.getPassword().type(password);
    loginPage.getLoginButton().click();
});
//title
Cypress.Commands.add("verifyTitle", (titleName) => {
    cy.get(".title").should('have.text', titleName);
})
//select product
Cypress.Commands.add("selectProduct", (productName) => {
    cy.get(".inventory_list").find(".inventory_item").each(($el, index, $list) => {
        if ($el.find('.inventory_item_name').text() === productName) {
            $el.find(".btn_primary").click();
        }
    })
})