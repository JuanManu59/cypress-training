import { data } from "cypress/types/jquery";
import {PersonalInformation} from "../interfaces/PersonalInformation";
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
  private hobbies: string;
  private myhashhobbies: Map;

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
    this.hobbies = "Sports, Reading, Music";
    this.myhashhobbies = new Map<string, string>([
      ["1", "Sports"],
      ["2", "Reading"],
      ["3", "Music"]
    ]);
  }

  public visitStudentForm(): void {
    cy.visit(this.studentFormPageURL);
  }

  public fillForm(personalInformation: PersonalInformation): void {
    cy.get(this.nameText).type(personalInformation.name);
    cy.get(this.lastNameText).type(personalInformation.lastName);
    cy.get(this.emailText).type(personalInformation.email);
    cy.get(this.genderBtn).check(personalInformation.gender, {force: true});
    cy.get(this.mobileNumberText).type(personalInformation.mobileNumber);
    cy.get(this.hobbiesCheck).check(personalInformation.hobbies, {force: true});
    cy.get(this.currentAddressText).type(personalInformation.currentAddress);
    cy.get(this.stateList).click({force:true});
    cy.get(this.NCROstate).click();
    cy.get(this.cityList).click({force:true});
    cy.get(this.delhiCity).click({force:true});
    cy.get(this.submitBtn).click({force:true});
  }
  
  public verifyInformation(personalInformation: PersonalInformation): void {
    let hobbiesValue = "";
    for (let i = 0; i < personalInformation.hobbies.length; i++) {
      if((i+1) == personalInformation.hobbies.length){
        hobbiesValue+=this.myhashhobbies.get(personalInformation.hobbies[i])+"";
      }else{
        hobbiesValue+=this.myhashhobbies.get(personalInformation.hobbies[i])+", ";
      }
    }

    cy.get(this.bodyTr)
    .should("contain.text", `${personalInformation.name} ${personalInformation.lastName}`)
    .should("contain.text", personalInformation.email)
    .should("contain.text", personalInformation.gender)
    .should("contain.text", personalInformation.mobileNumber)
    .should("contain.text", hobbiesValue)
    .should("contain.text", personalInformation.currentAddress)
    .should("contain.text", personalInformation.state)
    .should("contain.text", personalInformation.city);
  }
}

export {StudentRegistrationForm};
