class DownloadFilePage {
    private downloadFilePageURL: string;
    private downloadBtn: string;
    private fileAddress: string;
  
    constructor() {
        this.downloadFilePageURL = 'https://demoqa.com/upload-download';
        this.downloadBtn = '#downloadButton';
        this.fileAddress = "./cypress/downloads/"; 
    }
  
    public visitUploadFilePage(): void {
      cy.visit(this.downloadFilePageURL);
    }
  
    downloadFile(): void {
      cy.get(this.downloadBtn).click();
    }
  
    public verifyMessage(fileName: string): void {
      cy.readFile(this.fileAddress + fileName).should("exist");
    }
  }
  
  export {DownloadFilePage};
  