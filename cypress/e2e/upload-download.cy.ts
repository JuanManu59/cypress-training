import {UploadFilePage} from "../page/index";

describe("Upload File", () => {
  let uploadPage: UploadFilePage;

  before(() => {
    uploadPage = new UploadFilePage();
  });

  it("Should have a Tittle", () => {
    // Arrange
    const fileName = "example.json";
    uploadPage.visitUploadFilePage();

    // Act
    uploadPage.uploadFile(fileName);
    uploadPage.getTittle();

    // Assert
    uploadPage.verifyTittle(fileName);
  });
});
