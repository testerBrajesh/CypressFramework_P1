//CartPage
class CartPage {
    getCartFooter() {
        return cy.get(".cart_footer");
    }

    getCartItem() {
        return cy.get(".inventory_item_name");
    }

    getCheckoutButton() {
        return cy.get("#checkout")
    }
}
export default new CartPage();