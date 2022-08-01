import {StudentRegistrationForm} from "../page/index";

describe("Personal form page", () => {
  let personalFormPage: StudentRegistrationForm;

  before(() => {
    personalFormPage = new StudentRegistrationForm();
  });

  it("should have a title", () => {
    // Arrange
    const Sports = "1";
    const Reading = "2";
    const Music = "3";
    const hobbies = "Sports, Reading, Music";
    const personalInformation = {
      name: "Holmes",
      lastName: "Salazar",
      email: "test@email.com",
      gender: "Male",
      dateOfBirth: "27 Jul 2016",
      mobileNumber: "3656589156",
      hobbies: [Sports, Music, Reading],
      currentAddress: "Av siempreViva # 123",
      state: "NCR",
      city: "Delhi",
    };
    personalFormPage.visitStudentForm();

    // Act
    personalFormPage.fillForm(personalInformation);

    // Assert
    personalFormPage.verifyInformation(
        personalInformation.name,
        personalInformation.lastName,
        personalInformation.email,
        personalInformation.gender,
        personalInformation.mobileNumber,
        hobbies,
        personalInformation.currentAddress,
        personalInformation.state,
        personalInformation.city);
  });
});
