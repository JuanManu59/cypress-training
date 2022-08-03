import {IframePage} from "../page/index";

let iframePage: IframePage;

describe("Working with Iframes", () => {
  before(() => {
    iframePage = new IframePage();
    iframePage.visit();
  });

  describe("When the user go the w3schools page", () => {
    it("Should have the Title 'HTML Tutorial'", () => {
      // Arrange
      const tittleHTMLTutorial = "HTML Tutorial";
      // Act
      // Assert
      iframePage.getFrameTitle().should("eq", tittleHTMLTutorial);
    });
  });

  describe("When the user go the CSS page", () => {
    it("Should have the title 'CSS Tutorial'", () => {
      // Arrange
      const tittleCSSTutorial = "CSS Tutorial";
      // Act
      iframePage.goToCssPageInFrame();
      // Assert
      iframePage.getFrameTitle().should("eq", tittleCSSTutorial);
    });
  });
});
