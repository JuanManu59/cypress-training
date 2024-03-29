class DownloadFilePage {
    private downloadFilePageURL: string;
    private downloadBtn: string;
    private fileAddress: string;
  
    constructor() {
        this.downloadFilePageURL = 'https://demoqa.com/upload-download';
        this.downloadBtn = '#downloadButton';
        this.fileAddress = "./cypress/downloads/"; 
    }
  
    public visitDownloadFilePage(): void {
      cy.visit(this.downloadFilePageURL);
    }
  
    public downloadFile(): void {
      cy.get(this.downloadBtn).click();
    }
  
    public verifyMessage(fileName: string): void {
      cy.readFile(this.fileAddress + fileName).should("exist");
    }
  }
  
  export {DownloadFilePage};
