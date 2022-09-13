import loginPage from "../../integration/page/loginpage";
import loginpage from "../../integration/page/loginpage";

/// <reference types="cypress" />
context("Assertions", () => {
  beforeEach(() => {
    cy.visit("/");
    //const time = new Date(now).getTime;
    var time = Date.now();
    var String,
      sc = "sdds" + time;
    //cy.visit("https://automation.staging.iam2secz.com");
    const login = new loginPage();
    login.usernameInput().type("neprofile0");
    login.usernameInput().type(sc);
    login.passwordInput().type("S3cz377a#");
    login.loginBtn().click();
    cy.url().should("include", "/neprofile_dashboard");
    //cy.get(url).should("include", "/neprofile");
  });

  describe("loginVisitAdmin", () => {
    it.only(".should() - make an assertion about the current subject", () => {
      // https://on.cypress.io/should

      cy.get('[href="/neprofile_dashboard/reports"] > li').click();
      cy.get(".margin-right-small > a > .btn-reverse-charcoal").click();
      cy.get(":nth-child(1) > .nav-main > .nav-heading > .fa").click();
      cy.get(":nth-child(5) > .nav-main > .nav-heading > .nav-label").click();
      cy.get('[href="/seczetta_templating/ne_attributes"] > li').click();
      cy.get("[data-testid=inputTestId]").type("drop");
      cy.wait(500);
    });

    it(".and() - chain multiple assertions together", () => {
      // https://on.cypress.io/and
      cy.get(".assertions-link")
        .should("have.class", "active")
        .and("have.attr", "href")
        .and("include", "cypress.io");
    });
  });

  describe("Explicit Assertions", () => {
    // https://on.cypress.io/assertions
    it("expect - make an assertion about a specified subject", () => {
      // We can use Chai's BDD style assertions
      expect(true).to.be.true;
      const o = { foo: "bar" };

      expect(o).to.equal(o);
      expect(o).to.deep.equal({ foo: "bar" });
      // matching text using regular expression
      expect("FooBar").to.match(/bar$/i);
    });

    it("pass your own callback function to should()", () => {
      // Pass a function to should that can have any number
      // of explicit assertions within it.
      // The ".should(cb)" function will be retried
      // automatically until it passes all your explicit assertions or times out.
      cy.get(".assertions-p")
        .find("p")
        .should(($p) => {
          // https://on.cypress.io/$
          // return an array of texts from all of the p's
          const texts = $p.map((i, el) => Cypress.$(el).text());

          // jquery map returns jquery object
          // and .get() convert this to simple array
          const paragraphs = texts.get();

          // array should have length of 3
          expect(paragraphs, "has 3 paragraphs").to.have.length(3);

          // use second argument to expect(...) to provide clear
          // message with each assertion
          expect(paragraphs, "has expected text in each paragraph").to.deep.eq([
            "Some text from first p",
            "More text from second p",
            "And even more text from third p",
          ]);
        });
    });

    it("finds element by class name regex", () => {
      cy.get(".docs-header")
        .find("div")
        // .should(cb) callback function will be retried
        .should(($div) => {
          expect($div).to.have.length(1);

          const className = $div[0].className;

          expect(className).to.match(/heading-/);
        })
        // .then(cb) callback is not retried,
        // it either passes or fails
        .then(($div) => {
          expect($div, "text content").to.have.text("Introduction");
        });
    });

    it("can throw any error", () => {
      cy.get(".docs-header")
        .find("div")
        .should(($div) => {
          if ($div.length !== 1) {
            // you can throw your own errors
            throw new Error("Did not find 1 element");
          }

          const className = $div[0].className;

          if (!className.match(/heading-/)) {
            throw new Error(`Could not find class "heading-" in ${className}`);
          }
        });
    });

    it("matches unknown text between two elements", () => {
      /**
       * Text from the first element.
       * @type {string}
       */
      let text;

      /**
       * Normalizes passed text,
       * useful before comparing text with spaces and different capitalization.
       * @param {string} s Text to normalize
       */
      const normalizeText = (s) => s.replace(/\s/g, "").toLowerCase();

      cy.get(".two-elements")
        .find(".first")
        .then(($first) => {
          // save text from the first element
          text = normalizeText($first.text());
        });

      cy.get(".two-elements")
        .find(".second")
        .should(($div) => {
          // we can massage text before comparing
          const secondText = normalizeText($div.text());

          expect(secondText, "second text").to.equal(text);
        });
    });

    it("assert - assert shape of an object", () => {
      const person = {
        name: "Joe",
        age: 20,
      };

      assert.isObject(person, "value is object");
    });

    it("retries the should callback until assertions pass", () => {
      cy.get("#random-number").should(($div) => {
        const n = parseFloat($div.text());

        expect(n).to.be.gte(1).and.be.lte(10);
      });
    });
  });
});
