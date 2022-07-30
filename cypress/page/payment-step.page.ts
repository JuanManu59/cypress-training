class PaymentStepPage {
  private payByBankBtn: string;
  private checkoutBtn: string;
  private orderComplete: string;

  constructor() {
    this.payByBankBtn = '.bankwire';
    this.checkoutBtn = '#cart_navigation button[type=submit]';
    this.orderComplete = '#center_column .cheque-indent strong';
  }

  public payWithBank(): void {
    cy.get(this.payByBankBtn).click();
  }

  public proceedCheckout(): void {
    cy.get(this.checkoutBtn).click();
  }

  public verifyOrderComplete(message: string): void {
    cy.get(this.orderComplete).should("have.text", message);
  }
}

export {PaymentStepPage};
