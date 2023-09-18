//spec file JS terminology
import {
    LoginPage, HomePage, CartPage, CheckoutInformation,
    CheckoutOverview, CheckoutComplete
} from '../page-objects';

describe('Place order', () => {

    before(function () {
        //open url
        cy.visit(Cypress.env('url'));
        //login credentials
        LoginPage.getUserName().type(Cypress.env('userId'));
        LoginPage.getPassword().type(Cypress.env('password'));
        LoginPage.getLoginButton().click()
    });

    //load test data
    beforeEach(function () {
        cy.fixture('TestData').then(function (data) {
            this.testData = data;
        });
    });

    it('Should add selected products to cart', function () {

        this.testData.forEach(function (data) {
            if (data.ToBeExecuted) {
                //verify title
                cy.verifyTitle('Products')
                //select products
                data.productName.forEach((elmProduct) => {
                    cy.selectProduct(elmProduct);
                })
                //click on the cart link
                HomePage.getShoppingCartLink().click();
                //cart page
                cy.verifyTitle('Your Cart');

                //cart page
                cy.get(".cart_list").find(".cart_item").each(($el, index, $list) => {
                    data.productName.forEach((elmProduct) => {
                        if ($el.find('.inventory_item_name').text() === elmProduct) {
                            cy.log(elmProduct + ":products exist");
                        }
                    })
                })

                CartPage.getCartFooter().find('#checkout').click();
                //Checkout page title
                cy.verifyTitle('Checkout: Your Information');

                //checkout information page
                //firstName
                CheckoutInformation.getFirstName().type(data.firstName);
                //lastName
                CheckoutInformation.getLastName().type(data.lastName);
                //postalCode
                CheckoutInformation.getPostalCode().type(data.postalCode);
                //click on primary button
                CheckoutInformation.getPrimaryButton().click();
                //checkout overview page
                CheckoutOverview.getCartList().find(".cart_item").each(($el, index, $list) => {
                    data.productName.forEach((elmProduct) => {
                        if ($el.find('.inventory_item_name').text() === elmProduct) {
                            cy.log(elmProduct + ":products exist");
                        }
                    })
                })
                cy.contains("Finish").click();
                CheckoutComplete.getCheckoutComplete().find(".complete-header").should('have.text', 'Thank you for your order!');
                //navigate to home page
                CheckoutComplete.getBackToHome().click();
                cy.verifyTitle('Products');
            }
        })
    })

    it('Should match product price', function () {
        this.testData.forEach(function (data) {
            if (data.ToBeExecuted) {
                //select products
                data.productName.forEach((elmProduct) => {
                    cy.selectProduct(elmProduct);
                })
                //click on the cart link
                HomePage.getShoppingCartLink().click();
                //cart page
                cy.verifyTitle('Your Cart');

                let totalPrice = 0;
                let priceValue = 0;

                //cart page
                cy.get(".cart_list").find(".cart_item").each(($el, index, $list) => {
                    data.productName.forEach((elmProduct) => {
                        if ($el.find('.inventory_item_name').text() === elmProduct) {
                            cy.log(elmProduct + ":products exist");
                            priceValue = Number($el.find('.inventory_item_price').text().trim().replace("$", ""));
                            totalPrice = totalPrice + priceValue;
                        }
                    })
                }).then(function () {
                    cy.log("totalPrice:" + totalPrice);
                })

                CartPage.getCartFooter().find("#checkout").click();
                //Checkout page title
                cy.verifyTitle('Checkout: Your Information');

                //checkout information page
                //firstName
                CheckoutInformation.getFirstName().type(data.firstName);
                //lastName
                CheckoutInformation.getLastName().type(data.lastName);
                //postalCode
                CheckoutInformation.getPostalCode().type(data.postalCode);
                //click on primary button
                CheckoutInformation.getPrimaryButton().click();
                //checkout overview page
                let actualTotal = 0;
                cy.get(".summary_subtotal_label").then(function (elem) {
                    actualTotal = elem.text().split(":");
                    actualTotal = Number(actualTotal[1].trim().replace("$", ""));
                    expect(totalPrice).to.equal(actualTotal);
                })
                cy.contains("Finish").click();
                //CheckoutComplete.getCheckoutComplete().find(".complete-header").should('have.text', 'THANK YOU FOR YOUR ORDER');
                //navigate to home page
                CheckoutComplete.getBackToHome().click();
                cy.verifyTitle('Products');
            }
        })
    })

    it('Should match page title', function () {
        this.testData.forEach(function (data) {
            if (data.ToBeExecuted) {
                //verify title
                cy.verifyTitle('Products');
            }
        })
    })
    
    /*it('Should match not page title', function () {
        this.testData.forEach(function (data) {
            if (data.ToBeExecuted) {
                //verify title
                cy.verifyTitle('Productsasd');
            }
        })
    })*/
})
