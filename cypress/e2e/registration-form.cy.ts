import {StudentRegistrationForm} from "../page/index";
import {PersonalInformation} from "../interfaces/PersonalInformation";

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
      dateOfBirth: "27 Jul 2016",
      mobileNumber: "3656589156",
      hobbies: ["1", "2", "3"],
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
