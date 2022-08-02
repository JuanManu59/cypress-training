import {StudentRegistrationForm} from "../page/index";
import {PersonalInformation} from "../page/interfaces/PersonalInformation";

describe("Personal form page", () => {
  let personalFormPage: StudentRegistrationForm;
  let personalInfo: PersonalInformation;

  before(() => {
    personalFormPage = new StudentRegistrationForm();
    personalInfo = {
      name: "Holmes",
      lastName: "Salazar",
      email: "test@email.com",
      gender: "Male",
      dateOfBirth: "01 August,2022",
      mobileNumber: "3656589156",
      hobbies: ["Sports", "Reading", "Music"],
      currentAddress: "Av siempreViva # 123",
      state: "NCR",
      city: "Delhi",
    };
  });

  it("should have a title", () => {
    // Arrange
    personalFormPage.visitStudentForm();

    // Act
    personalFormPage.fillForm(personalInfo);

    // Assert
    personalFormPage.verifyInformation(personalInfo);
  });
});
