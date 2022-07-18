class PaymentStepPage {
  private payByBankBtn: string;
  private checkoutBtn: string;

  constructor() {
    this.payByBankBtn = "a.bankwire";
    this.checkoutBtn = "button.button.btn.btn-default.button-medium";
  }

  public payWithBank(): void {
    cy.get(this.payByBankBtn).click();
  }

  public proceedCheckout(): void {
    cy.get(this.checkoutBtn).click();
  }
}

export {PaymentStepPage};

