class ShopingCartPage {
  private shoppingMenu: string;

  constructor() {
    this.shoppingMenu = '.cart_navigation a[title="Proceed to checkout"]';
  }

  public goToCheckout(): void {
    cy.get(this.shoppingMenu).click();
  }
}

export {ShopingCartPage};
