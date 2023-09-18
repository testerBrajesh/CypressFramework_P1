class LoginPage {
    getUserName() {
        return cy.get("#user-name")
    }

    getPassword() {
        return cy.get("#password")
    }

    getLoginButton() {
        return cy.get("#login-button")
    }

}
export default new LoginPage();