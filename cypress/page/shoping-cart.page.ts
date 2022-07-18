class ShopingCartPage {
  private shoppingMenu: string;
  private shoppingPageURL: string;

  constructor() {
    this.shoppingMenu = ".cart_navigation span";
  }

  public goToCheckout(): void {
    cy.get(this.shoppingMenu).click();
  }
}

export {ShopingCartPage};

