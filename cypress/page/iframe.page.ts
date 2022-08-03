class IframePage {
    private testPage: string;
    private iframe: string;
    private titleCSS: string;
    private titleHTML: string;
    private iFrameUrl: string;
  
    constructor() {
      this.testPage = 'https://www.w3schools.com/html/html_iframe.asp';
      this.iframe = '[src="default.asp"]';
      this.titleCSS = 'a[title="CSS Tutorial"]';
      this.titleHTML = "#main > h1";
      this.iFrameUrl = 'https://www.w3schools.com/css/default.asp';
    }

    public visit(): void{
        cy.visit(this.testPage);
    }

    public getFrameTitle(): Cypress.Chainable <string>{
        return cy.iframe(this.iframe).find(this.titleHTML).invoke('text');
    }
      
    public goToCssPageInFrame(): void{
        cy.iframe(this.iframe).find(this.titleCSS).click();
        cy.frameLoaded(this.iframe, {url: this.iFrameUrl});
    }
  }

  export {IframePage};
