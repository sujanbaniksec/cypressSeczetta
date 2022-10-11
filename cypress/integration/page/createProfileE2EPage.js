class createProfileE2EPage {
  //Locators start----------------------------------------------------------
  //text Input for ProfileE2ETextFiled
  profileE2ETextField() {
    return cy.xpath(
      "//*[@name = 'workflow_session[attr_profilee2etextfiled_ne_attribute]']"
    );
  }
  //file upload button for ProfileE2EAttachment
  profileE2EAttachment() {
    return cy.xpath(
      "//*[@name = 'workflow_session[attr_profilee2eattachment_ne_attribute]'and @type='file']"
    );
  }
  //Checkbox option 1 profileE2ECheckBox
  profileE2ECheckBox() {
    return cy.xpath("//*[text()='One']/../a");
  }
  //profileE2ERadioBtn option five
  profileE2ERadioBtn() {
    return cy.xpath("//*[text()='five']/../div/input/following-sibling::a");
  }
  //text Input for profileE2EDate
  profileE2EDate() {
    return cy.xpath(
      "//*[@name = 'workflow_session[attr_profilee2edate_ne_attribute]']"
    );
  }
  //profileE2EProfileSearch
  profileE2EProfileSearch() {
    return cy.xpath("//input[@placeholder='profile name']");
  }
  profileE2EProfileSearchVendorName() {
    return cy.xpath("(//li[text()='Vendor Name'])");
  }

  //profileE2EOwnerSelect
  profileE2EOwnerSelect() {
    return cy.xpath(
      "//label[text()='ProfileE2EOwnerSelect']/parent::div/following-sibling::div/div/*[@class='selectric']"
    );
  }
  profileE2EOwnerSelectQa2() {
    return cy.xpath(
      "(//li[text()='QATester2@seczetta.com (pleasedontfreakingbreak@gmail.com)'])[2]"
    );
  }

  //profileE@EOwnerSelect
  profileE2EContributorSelect() {
    return cy.xpath(
      "//label[text()='ProfileE2EContributorSelect']/parent::div/following-sibling::div/div/*[@class='selectric']"
    );
  }
  //locator for qa5 in dropdown
  profileE2EContributorSelectQA2() {
    return cy.xpath(
      "(//li[text()='QATester2@seczetta.com (pleasedontfreakingbreak@gmail.com)'])[1]"
    );
  }

  //dropdown for profileE2EDropDown
  profileE2EDropDown() {
    return cy.xpath("(//*[@class='selectric'])[2]");
  }
  //locator for qa3 in dropdown
  profileE2EDropDownThree() {
    return cy.xpath("//li[text()='Three']");
  }
  //profileE2Etags input
  profileE2Etags() {
    return cy.xpath(
      "(//label[text()='ProfileE2Etags']/../following::input)[2]"
    );
  }
  //profileE2ETextArea input
  profileE2ETextArea() {
    return cy.xpath(
      "//*[@name = 'workflow_session[attr_profilee2etextarea_ne_attribute]']"
    );
  }

  //file button for attachment
  //text Input for Vendor Zip Code
  submit() {
    return cy.xpath("//a[@class='btn']");
  }
  //Locators End----------------------------------------------------------
  //Actions Start---------------------------------------------------------

  //Enter All Profile Info
  enterProfileInfo() {
    var profileInfo = new Map();
    let unique = Date.now();
    //Enter text into profileE2ETextField and store in map for use in script
    let profileE2ETextField = "profileE2ETextField" + unique;
    this.profileE2ETextField().type(profileE2ETextField);
    profileInfo.set("profileE2ETextField", profileE2ETextField);

    //Enter text into profileE2ETextArea and store in map for use in script
    let profileE2ETextArea = "profileE2ETextArea" + unique;
    this.profileE2ETextArea().type(profileE2ETextArea);
    profileInfo.set("profileE2ETextArea", profileE2ETextArea);

    //Enter text date
    this.profileE2EDate().type("01/22/2024");
    profileInfo.set("profileE2EDate", "01/22/2024");

    //Check Option One for ProfileE2ECheckBox
    this.profileE2ECheckBox().click();
    profileInfo.set("profileE2ECheckBox", "One");
    //Need good way to assert this

    //Radio Button option five
    this.profileE2ERadioBtn().click();
    profileInfo.set("profileE2ERadioBtn", "five");
    //Need good way to assert this

    //Select file
    this.profileE2EAttachment().selectFile("cypress/fixtures/test1.png");
    profileInfo.set("profileE2EAttachment", "test1.png");
    //Set profileE2EDropDown to three
    this.profileE2EDropDown().click();
    this.profileE2EDropDownThree().click();
    profileInfo.set("profileE2EDropDownThree", "Three");
    //Need assertion

    //Enter tag
    this.profileE2Etags().type("profileE2Etags{enter}");
    profileInfo.set("profileE2Etags", "profileE2Etags");
    //Need assertion

    //Select QA5 as Owner
    this.profileE2EOwnerSelect().click();
    this.profileE2EOwnerSelectQa2().click();
    profileInfo.set(
      "profileE2EOwnerSelectQa2",
      "QATester2@seczetta.com (pleasedontfreakingbreak@gmail.com)"
    );
    //Need assertiom

    //Select Q5 as Contributor

    this.profileE2EContributorSelect().click();
    this.profileE2EContributorSelectQA2().scrollIntoView();
    this.profileE2EContributorSelectQA2().click();
    profileInfo.set(
      "profileE2EContributorSelectQA2",
      "QATester2@seczetta.com (pleasedontfreakingbreak@gmail.com)"
    );

    //Enter AAA into profile search
    this.profileE2EProfileSearch().type("Vendor Name");
    this.profileE2EProfileSearchVendorName().click();
    profileInfo.set("profileE2EProfileSearchVendorName", "Vendor Name");
    //need assertion
    return profileInfo;
  }
}
export default createProfileE2EPage;
