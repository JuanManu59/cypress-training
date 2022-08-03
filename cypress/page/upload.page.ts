class UploadFilePage {
  private uploadFilePageURL: string;
  private file: string;
  private tittle: string;

  constructor() {
      this.uploadFilePageURL = 'https://the-internet.herokuapp.com/upload';
      this.file = '#drag-drop-upload';
      this.tittle = 'example.json';
  }

  public visitUploadFilePage(): void {
    cy.visit(this.uploadFilePageURL);
  }

  public uploadFile(fileName: string): void {
    cy.get(this.file).attachFile(fileName, { subjectType: 'drag-n-drop' });;
  }

  public verifyTittle(fileName: string): void {
    cy.contains(this.tittle).should("have.text", fileName);
  }
}

export {UploadFilePage};
