class ShopingCartPage {
  private shoppingMenu: string;

  constructor() {
    this.shoppingMenu = ".cart_navigation span";
  }

  public goToCheckout(): void {
    cy.get(this.shoppingMenu).click();
  }
}

export {ShopingCartPage};
