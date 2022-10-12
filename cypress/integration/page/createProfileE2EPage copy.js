class createProfileE2EPage2 {
  //Locators start----------------------------------------------------------
  //text Input for ProfileE2ETextFiled
  profileE2ETextField2() {
    return cy.xpath(
      "//*[@name = 'workflow_session[attr_profilee2etextfiled_ne_attribute]']"
    );
  }
  //file upload button for ProfileE2EAttachment
  profileE2EAttachment2() {
    return cy.xpath(
      "//*[@name = 'workflow_session[attr_profilee2eattachment_ne_attribute]'and @type='file']"
    );
  }
  //Checkbox option 1 profileE2ECheckBox
  profileE2ECheckBox2() {
    return cy.xpath("//*[text()='One']/../a");
  }
  //profileE2ERadioBtn option five
  profileE2ERadioBtn2() {
    return cy.xpath("//*[text()='five']/../div/input/following-sibling::a");
  }
  //text Input for profileE2EDate
  profileE2EDate2() {
    return cy.xpath(
      "//*[@name = 'workflow_session[attr_profilee2edate_ne_attribute]']"
    );
  }
  //profileE2EProfileSearch
  profileE2EProfileSearch2() {
    return cy.xpath("//input[@placeholder='profile name']");
  }
  profileE2EProfileSearchVendorName2() {
    return cy.xpath("(//li[text()='Vendor Name'])");
  }

  //profileE2EOwnerSelect
  profileE2EOwnerSelect2() {
    return cy.xpath(
      "//label[text()='ProfileE2EOwnerSelect']/parent::div/following-sibling::div/div/*[@class='selectric']"
    );
  }
  profileE2EOwnerSelect2Qa2() {
    return cy.xpath(
      "(//li[text()='QATester2@seczetta.com (pleasedontfreakingbreak@gmail.com)'])[2]"
    );
  }

  //profileE@EOwnerSelect
  profileE2EContributorSelect2() {
    return cy.xpath(
      "//label[text()='ProfileE2EContributorSelect']/parent::div/following-sibling::div/div/*[@class='selectric']"
    );
  }
  //locator for qa5 in dropdown
  profileE2EContributorSelect2QA2() {
    return cy.xpath(
      "(//li[text()='QATester2@seczetta.com (pleasedontfreakingbreak@gmail.com)'])[1]"
    );
  }

  //dropdown for profileE2EDropDown
  profileE2EDropDown2() {
    return cy.xpath("(//*[@class='selectric'])[2]");
  }
  //locator for qa3 in dropdown
  profileE2EDropDownThree2() {
    return cy.xpath("//li[text()='Three']");
  }
  //profileE2Etags input
  profileE2Etags2() {
    return cy.xpath(
      "(//label[text()='ProfileE2Etags']/../following::input)[2]"
    );
  }
  //profileE2ETextArea input
  profileE2ETextArea2() {
    return cy.xpath(
      "//*[@name = 'workflow_session[attr_profilee2etextarea_ne_attribute]']"
    );
  }

  //file button for attachment
  //text Input for Vendor Zip Code
  submit2() {
    return cy.xpath("//a[@class='btn']");
  }
  //Locators End----------------------------------------------------------
  //Actions Start---------------------------------------------------------
  dataSet() {
    var profileInfo2 = new Map();
    let profileE2ETextField2 = "profileE2ETextField" + unique;
    profileInfo2.set("profileE2ETextField", profileE2ETextField2);
    let profileE2ETextArea2 = "profileE2ETextArea" + unique;
    profileInfo2.set("profileE2ETextArea", profileE2ETextArea2);
    profileInfo2.set("profileE2EDate", "01/22/2024");
    profileInfo2.set("profileE2ERadioBtn", "five");
    profileInfo2.set("profileE2EAttachment", "test1.png");
    profileInfo2.set("profileE2EDropDownThree", "Three");
    profileInfo2.set("profileE2Etags", "profileE2Etags");
    profileInfo2.set("profileE2ECheckBox", "One");
    profileInfo2.set(
      "profileE2EOwnerSelectQa2",
      "QATester2@seczetta.com (pleasedontfreakingbreak@gmail.com)"
    );
    profileInfo2.set(
      "profileE2EContributorSelectQA2",
      "QATester2@seczetta.com (pleasedontfreakingbreak@gmail.com)"
    );
    profileInfo2.set("profileE2EProfileSearchVendorName", "Vendor Name");
    return dataSet2;
  }
  //Enter All Profile Info
  enterProfileInfo2() {
    let unique = Date.now();
    //Enter text into profileE2ETextField and store in map for use in script

    let data = new dataSet();
    this.profileE2ETextField2().type(data.profileE2ETextField2);

    //Enter text into profileE2ETextArea and store in map for use in script
    this.profileE2ETextArea2().type(data.profileE2ETextArea2);

    //Enter text date
    this.profileE2EDate2().type("01/22/2024");

    //Check Option One for ProfileE2ECheckBox
    this.profileE2ECheckBox2().click();

    //Need good way to assert this

    //Radio Button option five
    this.profileE2ERadioBtn2().click();

    //Need good way to assert this

    //Select file
    this.profileE2EAttachment2().selectFile("cypress/fixtures/test1.png");

    //Set profileE2EDropDown to three
    this.profileE2EDropDown().click();
    this.profileE2EDropDownThree().click();

    //Need assertion

    //Enter tag
    this.profileE2Etags2().type("profileE2Etags{enter}");

    //Need assertion

    //Select QA5 as Owner
    this.profileE2EOwnerSelect2().click();
    this.profileE2EOwnerSelect2Qa2().click();

    //Need assertiom

    //Select Q5 as Contributor

    this.profileE2EContributorSelect2().click();
    this.profileE2EContributorSelect2QA2().scrollIntoView();
    this.profileE2EContributorSelect2QA2().click();

    //Enter AAA into profile search
    this.profileE2EProfileSearch2().type("Vendor Name");
    this.profileE2EProfileSearchVendorName2().click();

    //need assertion
    return profileInfo2;
  }
}
export default createProfileE2EPage2;
