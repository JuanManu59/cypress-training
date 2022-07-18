class LoginPage {
  private addressText: string;
  private passwordText: string;
  private loginBtn: string;

  constructor() {
    this.addressText = "#email";
    this.passwordText = "#passwd";
    this.loginBtn = "button#SubmitLogin.button.btn.btn-default.button-medium";
  }

  public writeAddress(): void {
    cy.get(this.addressText).type("aperdomobo@gmail.com");
  }

  public writePassword(): void {
    cy.get(this.passwordText).type("WorkshopProtractor");
  }

  public login(): void {
    cy.get(this.loginBtn).click();
  }
}

export {LoginPage};

