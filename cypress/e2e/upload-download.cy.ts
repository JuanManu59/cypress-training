import {UploadFilePage, DownloadFilePage} from "../page/index";

describe("Upload and download Files", () => {
  let uploadPage: UploadFilePage;
  let downloadFilePage: DownloadFilePage;

  before(() => {
    uploadPage = new UploadFilePage();
    downloadFilePage = new DownloadFilePage();
  });

  describe("Upload a file", () => {
    it("Should have a Tittle", () => {
      // Arrange
      const fileName = "example.json";
      uploadPage.visitUploadFilePage();

      // Act
      uploadPage.uploadFile(fileName);

      // Assert
      uploadPage.verifyTittle(fileName);
    });
  });

  describe("Download a file", () => {
    it("The file exist", () => {
      // Arrange
      const fileName = "sampleFile.jpeg";
      downloadFilePage.visitDownloadFilePage();

      // Act
      downloadFilePage.downloadFile();

      // Assert
      downloadFilePage.verifyMessage(fileName);
    });
  });
});
