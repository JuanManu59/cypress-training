import {MenuContentPage} from "../page/index";
import {ProductsListPage} from "../page/index";
import {ShopingCartPage} from "../page/index";
import {LoginPage} from "../page/index";
import {AddressStepPage} from "../page/index";
import {ShippingStepPage} from "../page/index";
import {PaymentStepPage} from "../page/index";

const menuContentPage = new MenuContentPage();
const productsListPage = new ProductsListPage();
const shopingCartPage = new ShopingCartPage();
const loginPage = new LoginPage();
const addressStepPage = new AddressStepPage();
const shippingStepPage = new ShippingStepPage();
const paymentStepPage = new PaymentStepPage();

describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    menuContentPage.visitMenuContentPage();

    menuContentPage.goToTShirtMenu();

    productsListPage.addToMyCar();

    productsListPage.proceedCheckout();

    shopingCartPage.goToCheckout();

    loginPage.writeAddress();
    loginPage.writePassword();
    loginPage.login();

    addressStepPage.proceedCheckoutAuth();

    shippingStepPage.checkToS();
    shippingStepPage.proceedCheckout();

    paymentStepPage.payWithBank();
    paymentStepPage.proceedCheckout();

    cy.get("#center_column > div > p > strong")
        .should("have.text", "Your order on My Store is complete.");
  });
});
