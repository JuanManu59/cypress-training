class ProductsListPage {
  private addCarBtn: string;
  private checkoutBtn: string;

  constructor() {
    this.addCarBtn = '#center_column a.button.ajax_add_to_cart_button.btn.btn-default';
    this.checkoutBtn = '.button-container > a[title="Proceed to checkout"]';
  }

  public addToMyCart(): void {
    cy.get(this.addCarBtn).click();
  }

  public proceedCheckout(): void {
    cy.get(this.checkoutBtn).click();
  }
}

export {ProductsListPage};
