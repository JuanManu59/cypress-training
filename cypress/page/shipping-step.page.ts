class ShippingStepPage {
  private checkTermsOfService: string;
  private checkoutBtn: string;

  constructor() {
    this.checkTermsOfService = "input#cgv";
    this.checkoutBtn = 'button[name="processCarrier"]';
  }

  public checkToS(): void {
    cy.get(this.checkTermsOfService).click();
  }

  public proceedCheckout(): void {
    cy.get(this.checkoutBtn).click();
  }
}

export {ShippingStepPage};
