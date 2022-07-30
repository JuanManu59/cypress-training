class ProductsListPage {
  private addCarBtn: string;
  private checkoutBtn: string;
  private productList: string;

  constructor() {
    this.addCarBtn = '[title="Add to cart"]';
    this.checkoutBtn = 'a[title="Proceed to checkout"]';
    this.productList = ".right-block";
  }

  public addTShirtToCart(productName: string): void {
    this.findProductByName(productName).find(this.addCarBtn).click();
    cy.get(this.checkoutBtn).click();
  }

  private findProductByName(productName: string): void {
    return cy.get(this.productList).filter(`:contains("${productName}")`)
  }
}

export {ProductsListPage};
