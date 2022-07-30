import {MenuContentPage, ProductsListPage, ShopingCartPage,
  LoginPage, AddressStepPage, ShippingStepPage, PaymentStepPage} from "../page/index";

describe("Buy a t-shirt", () => {
  let menuContentPage:MenuContentPage;
  let productsListPage:ProductsListPage;
  let shopingCartPage:ShopingCartPage;
  let loginPage:LoginPage;
  let addressStepPage:AddressStepPage;
  let shippingStepPage:ShippingStepPage;
  let paymentStepPage:PaymentStepPage;

  before(() => {
    menuContentPage = new MenuContentPage();
    productsListPage = new ProductsListPage();
    shopingCartPage = new ShopingCartPage();
    loginPage = new LoginPage();
    addressStepPage = new AddressStepPage();
    shippingStepPage = new ShippingStepPage();
    paymentStepPage = new PaymentStepPage();
  });

  it("then the t-shirt should be bought", () => {
    // Arrange
    const email = "aperdomobo@gmail.com";
    const password = "WorkshopProtractor";
    const messageOrderComplete = "Your order on My Store is complete.";

    menuContentPage.visitMenuContentPage();

    // Act
    menuContentPage.goToTShirtMenu();

    productsListPage.addToMyCart();

    productsListPage.proceedCheckout();

    shopingCartPage.goToCheckout();

    loginPage.login(email, password);

    addressStepPage.proceedCheckoutAuth();

    shippingStepPage.checkToS();
    shippingStepPage.proceedCheckout();

    paymentStepPage.payWithBank();
    paymentStepPage.proceedCheckout();

    // Assert
    paymentStepPage.verifyOrderComplete(messageOrderComplete);
  });
});
