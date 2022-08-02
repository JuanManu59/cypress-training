import { data } from "cypress/types/jquery";
import {PersonalInformation} from "../page/interfaces/PersonalInformation";
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
  private stateInput: string;
  private cityInput: string;
  private dateOfBirthInput: string;
  private monthSelect: string;
  private yearSelect: string;
  private daySelect: string;

  constructor() {
    this.studentFormPageURL = 'https://demoqa.com/automation-practice-form';
    this.bodyTr = 'tbody tr';
    this.nameText = '#firstName'
    this.lastNameText = '#lastName';
    this.emailText = '#userEmail';
    this.genderBtn = '[type="radio"]';
    this.mobileNumberText = '#userNumber';
    this.hobbiesCheck = '#hobbiesWrapper input+label';
    this.currentAddressText = '#currentAddress';
    this.submitBtn = '#submit';
    this.stateList = '#state > div > div.css-1hwfws3 > div.css-1wa3eu0-placeholder';
    this.cityList = '#city > div > div.css-1hwfws3 > div.css-1wa3eu0-placeholder';
    this.stateInput = "#react-select-3-input";
    this.cityInput = "#react-select-4-input";
    this.dateOfBirthInput = "#dateOfBirthInput";
    this.monthSelect = ".react-datepicker__month-select";
    this.yearSelect = ".react-datepicker__year-select";
    this.daySelect = ":nth-child(5) > .react-datepicker__day--0";
  }

  public visitStudentForm(): void {
    cy.visit(this.studentFormPageURL);
  }

  public fillForm(personalInformation: PersonalInformation): void {
    let dataBirth = personalInformation.dateOfBirth.split(" ");
    cy.get(this.nameText).type(personalInformation.name);
    cy.get(this.lastNameText).type(personalInformation.lastName);
    cy.get(this.emailText).type(personalInformation.email);
    cy.get(this.genderBtn).check(personalInformation.gender, {force: true});
    cy.get(this.mobileNumberText).type(personalInformation.mobileNumber);
    cy.get(this.dateOfBirthInput).click({force:true});
    cy.get(this.monthSelect).select(dataBirth[1]);
    cy.get(this.yearSelect).select(dataBirth[2]);
    cy.get(this.daySelect+dataBirth[0]).click({force:true});
    personalInformation.hobbies.forEach((item) => {
      cy.get(this.hobbiesCheck).contains(item).click();
    });
    cy.get(this.currentAddressText).type(personalInformation.currentAddress);
    cy.get(this.stateList).click({force:true});
    cy.get(this.stateInput).type(`${personalInformation.state}{enter}`);
    cy.get(this.cityList).click({force:true});
    cy.get(this.cityInput).type(`${personalInformation.city}{enter}`);
    cy.get(this.submitBtn).click({force:true});
  }
  
  public verifyInformation(personalInformation: PersonalInformation): void {
    let hobbiesValue = personalInformation.hobbies.join(", ");
    let dateValue = personalInformation.dateOfBirth.replace(" 2", ",2");
    cy.get(this.bodyTr)
    .should("contain.text", `${personalInformation.name} ${personalInformation.lastName}`)
    .should("contain.text", personalInformation.email)
    .should("contain.text", personalInformation.gender)
    .should("contain.text", dateValue)
    .should("contain.text", personalInformation.mobileNumber)
    .should("contain.text", hobbiesValue)
    .should("contain.text", personalInformation.currentAddress)
    .should("contain.text", personalInformation.state)
    .should("contain.text", personalInformation.city);
  }
}

export {StudentRegistrationForm};
