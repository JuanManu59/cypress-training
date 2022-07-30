class LoginPage {
  private addressText: string;
  private passwordText: string;
  private loginBtn: string;

  constructor() {
    this.addressText = '#email';
    this.passwordText = '#passwd';
    this.loginBtn = 'button#SubmitLogin.button.btn.btn-default.button-medium';
  }

  public login(email: string, pwd: string): void {
    cy.get(this.addressText).type(email.toString());
    cy.get(this.passwordText).type(pwd.toString());
    cy.get(this.loginBtn).click();
  }
}

export {LoginPage};
