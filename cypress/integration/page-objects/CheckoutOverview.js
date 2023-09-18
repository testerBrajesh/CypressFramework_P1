class CheckoutOverview {
    getCartList() {
        return cy.get(".cart_list");
    }
    getCartItemName() {
        return cy.get(".inventory_item_name");
    }

    getCheckoutOverviewCartItem() {
        return cy.get(".cart_item");
    }

}
export default new CheckoutOverview();