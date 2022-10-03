class createVendorRequestForm {
  //Locators start----------------------------------------------------------
  //text Input for Vendor City
  vendorCity() {
    return cy.xpath("//*[@name = 'workflow_session[attr_vendor_city]']");
  }
  //text Input for Vendor Contact Name
  vendorContact() {
    return cy.xpath("//*[@name = 'workflow_session[attr_vendor_contact]']");
  }
  //text Input for Vendor Email
  vendorEmail() {
    return cy.xpath("//*[@name = 'workflow_session[attr_vendor_email]']");
  }
  //text Input for Vendor Name
  vendorName() {
    return cy.xpath("//*[@name = 'workflow_session[attr_vendor_name]']");
  }
  //text Input for Vendor Phone Number
  vendorPhoneNumber() {
    return cy.xpath("//*[@name = 'workflow_session[attr_vendor_phone]']");
  }
  //text Input for Vendor Street
  vendorStreet() {
    return cy.xpath("//*[@name = 'workflow_session[attr_vendor_street]']");
  }
  //text Input for Vendor Zip Code
  vendorZipCode() {
    return cy.xpath("//*[@name = 'workflow_session[attr_vendor_zip]']");
  }
  //dropdown for Vendor State
  vendorState() {
    //return cy.xpath("(//*[@class='selectric'])[1]");
    return cy.xpath("(//*[@class='selectric'])[1]");
  }
  vendorStateIsAK() {
    return cy.xpath("//li[text()='AK']");
  }
  vendorUploadFile() {
    return cy.get("input[type=file]");
  }
  //file button for attachment
  //text Input for Vendor Zip Code
  submit() {
    return cy.xpath("//a[@class='btn']");
  }
  //Locators End----------------------------------------------------------
  //Actions Start---------------------------------------------------------
  //Enter data into Vendor City Only
  enterVendorCity() {
    let unique = Date.now();
    let vendorCity = "VendorCity" + unique;
    this.vendorCity().type(vendorCity);
    return vendorCity;
  }
  //Enter All Vendor Data
  enterVendorInfo() {
    var vendorInfo = new Map();
    let unique = Date.now();
    let vendorCity = "vendorCity" + unique;
    this.vendorCity().type(vendorCity);
    vendorInfo.set("vendorCity", vendorCity);
    let vendorContact = "VendorContact" + unique;
    //this.vendorContact().type(vendorContact);
    this.vendorContact().type(Cypress.env("token"));
    vendorInfo.set("vendorContact", vendorContact);
    let vendorEmail = "Vendor@Email" + unique;
    this.vendorEmail().type(vendorEmail);
    vendorInfo.set("vendorEmail", vendorEmail);
    let vendorName = "vendorName" + unique;
    this.vendorName().type(vendorName);
    vendorInfo.set("vendorName", vendorName);
    let vendorPhoneNumber = "vendorPhoneNumber" + unique;
    this.vendorPhoneNumber().type(vendorPhoneNumber);
    vendorInfo.set("vendorPhoneNumber", vendorPhoneNumber);
    let vendorStreet = "vendorStreet" + unique;
    this.vendorStreet().type(vendorStreet);
    vendorInfo.set("vendorStreet", vendorStreet);
    let vendorZipCode = "vendorZipCode" + unique;
    this.vendorZipCode().type(vendorZipCode);
    vendorInfo.set("vendorZipCode", vendorZipCode);
    this.vendorUploadFile().selectFile("cypress/fixtures/test1.png");
    //Set Vendor State

    this.vendorState().click();
    this.vendorStateIsAK().click();

    return vendorInfo;
  }
}
export default createVendorRequestForm;
