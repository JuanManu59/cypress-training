class AddressStepPage {
  private proceedCheckout: string;

  constructor() {
    this.proceedCheckout = 'button[name="processAddress"]';
  }

  public proceedCheckoutAuth(): void {
    cy.get(this.proceedCheckout).click();
  }
}

export {AddressStepPage};
