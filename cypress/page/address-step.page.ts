class AddressStepPage {
  private proceedCheckout: string;

  constructor() {
    this.proceedCheckout = "button.button.btn.btn-default.button-medium";
  }

  public proceedCheckoutAuth(): void {
    cy.get(this.proceedCheckout).click();
  }
}

export {AddressStepPage};
