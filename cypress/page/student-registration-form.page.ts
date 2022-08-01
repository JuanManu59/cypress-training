class StudentRegistrationForm {
  private nameText: string;
  private lastNameText: string;
  private emailText: string;
  private genderBtn: string;
  private mobileNumberText: string;
  private hobbiesCheck: string;
  private currentAddressText: string;
  private submitBtn: string;
  private stateList: string;
  private cityList: string;
  private NCROstate: string;
  private delhiCity: string;

  constructor() {
    this.studentFormPageURL = 'https://demoqa.com/automation-practice-form';
    this.bodyTr = 'tbody tr';
    this.nameText = '#firstName'
    this.lastNameText = '#lastName';
    this.emailText = '#userEmail';
    this.genderBtn = '[type="radio"]';
    this.mobileNumberText = '#userNumber';
    this.hobbiesCheck = '[type="checkbox"]';
    this.currentAddressText = '#currentAddress';
    this.submitBtn = '#submit';
    this.stateList = '#state > div > div.css-1hwfws3 > div.css-1wa3eu0-placeholder';
    this.cityList = '#city > div > div.css-1hwfws3 > div.css-1wa3eu0-placeholder';
    this.NCROstate = "#react-select-3-option-0";
    this.delhiCity = "#react-select-4-option-0";
  }

  public visitStudentForm(): void {
    cy.visit(this.studentFormPageURL);
  }

  fillForm(personalInformation: {
      name: string, 
      lastName: string, 
      email: string,
      mobileNumber: string, 
      hobbies: string[], 
      currentAddress: string,
      state: string,
      city: string
  }) {
      cy.get(this.nameText).type(personalInformation.name);
      cy.get(this.lastNameText).type(personalInformation.lastName);
      cy.get(this.emailText).type(personalInformation.email);
      cy.get(this.genderBtn).check("Male", {force: true});
      cy.get(this.mobileNumberText).type(personalInformation.mobileNumber);
      cy.get(this.hobbiesCheck).check(personalInformation.hobbies, {force: true});
      cy.get(this.currentAddressText).type(personalInformation.currentAddress);
      cy.get(this.stateList).click({force:true});
      cy.get(this.NCROstate).click();
      cy.get(this.cityList).click({force:true});
      cy.get(this.delhiCity).click({force:true});
      cy.get(this.submitBtn).click({force:true});
  }

  public verifyInformation(name: string, lastName: string, email: string,
    gender: string, mobileNumber: string, hobbies: string,
    currentAddress: string, state: string, city: string): void {
    cy.get(this.bodyTr)
    .should("contain.text", `${name} ${lastName}`)
    .should("contain.text", email)
    .should("contain.text", gender)
    .should("contain.text", mobileNumber)
    .should("contain.text", hobbies)
    .should("contain.text", currentAddress)
    .should("contain.text", state)
    .should("contain.text", city);
  }
}

export {StudentRegistrationForm};
