class UploadFilePage {
  private uploadFilePageURL: string;
  private file: string;
  private tittle: string;

  constructor() {
      this.uploadFilePageURL = 'https://the-internet.herokuapp.com/upload';
      this.file = '#drag-drop-upload';
      this.tittle = '#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span';
  }

  public visitUploadFilePage(): void {
    cy.visit(this.uploadFilePageURL);
  }

  uploadFile(fileName: string): void {
    cy.get(this.file).attachFile(fileName, { subjectType: 'drag-n-drop' });;
  }

  getTittle() {
    return cy.get(this.tittle);
  }

  public verifyTittle(fileName: string): void {
    cy.get(this.tittle).should("have.text", fileName);
  }
}

export {UploadFilePage};
