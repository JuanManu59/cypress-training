class UploadFilePage {
  private uploadFilePageURL: string;
  private file: string;

  constructor() {
      this.uploadFilePageURL = 'https://the-internet.herokuapp.com/upload';
      this.file = '#drag-drop-upload';
  }

  public visitUploadFilePage(): void {
    cy.visit(this.uploadFilePageURL);
  }

  public uploadFile(fileName: string): void {
    cy.get(this.file).attachFile(fileName, { subjectType: 'drag-n-drop' });;
  }

  public getTittle(tittle: string) {
    return cy.contains(tittle);
  }

  public verifyTittle(fileName: string): void {
    this.getTittle(fileName).should("have.text", fileName);
  }
}

export {UploadFilePage};
