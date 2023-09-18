class CheckoutInformation {
    getFirstName() {
        return cy.get("#first-name");
    }
    getLastName() {
        return cy.get("#last-name");
    }
    getPostalCode() {
        return cy.get("#postal-code");
    }
    getPrimaryButton() {
        return cy.get(".btn_primary");
    }
}
export default new CheckoutInformation()