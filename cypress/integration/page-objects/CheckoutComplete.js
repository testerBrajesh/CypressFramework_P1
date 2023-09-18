class CheckoutComplete {
    getBackToHome() {
        return cy.get("#back-to-products");
    }
    getCheckoutComplete() {
        return cy.get("#checkout_complete_container");
    }
}
export default new CheckoutComplete();