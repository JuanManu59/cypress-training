class PaymentStepPage {
  private payByBankBtn: string;
  private checkoutBtn: string;
  private orderComplete: string;

  constructor() {
    this.payByBankBtn = "a.bankwire";
    this.checkoutBtn = "button.button.btn.btn-default.button-medium";
    this.orderComplete = "#center_column > div > p > strong";
  }

  public payWithBank(): void {
    cy.get(this.payByBankBtn).click();
  }

  public proceedCheckout(): void {
    cy.get(this.checkoutBtn).click();
  }

  public verifyOrderComplete(): void {
    cy.get(this.orderComplete).should("have.text", "Your order on My Store is complete.");
  }
}

export {PaymentStepPage};
