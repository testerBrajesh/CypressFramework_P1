class HomePage {
    getShoppingCartLink() {
        return cy.get(".shopping_cart_link")
    }
}

export default new HomePage();