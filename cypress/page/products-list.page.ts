class ProductsListPage {
  private addCarBtn: string;
  private checkoutBtn: string;

  constructor() {
    this.addCarBtn = '[title="Add to cart"]';
    this.checkoutBtn = 'a[title="Proceed to checkout"]';
  }

  public addToMyCart(): void {
    cy.get(this.addCarBtn).click();
  }

  public proceedCheckout(): void {
    cy.get(this.checkoutBtn).click();
  }
}

export {ProductsListPage};
