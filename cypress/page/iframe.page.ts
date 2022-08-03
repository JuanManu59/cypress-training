class IframePage {
    private testPage: string;
    private iframe: string;
    private title: string;
  
    constructor() {
      this.testPage = 'https://www.w3schools.com/html/html_iframe.asp';
      this.iframe = '[src="default.asp"]';
      this.title = 'a[title="CSS Tutorial"]';     
    }

    public visit(): void{
        cy.visit(this.testPage);
    }

    public getFrameTitle(tittlePage: string): void{
        return cy.iframe(this.iframe).should("contain.text", tittlePage);
    }
      
    public goToCssPageInFrame(): void{
        cy.iframe(this.iframe).find(this.title).click();
    }
  }

  export {IframePage};
