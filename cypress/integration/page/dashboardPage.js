class dashboardPage {
  //locators-----------------------------------------
  //Clicks Create Vendor Workflow
  createVendor() {
    return cy.xpath("//*/text()[normalize-space(.)='Create Vendor']/parent::*");
  }
  //Clicks any workflow with dynamic xpath
  createWorkflowDynamic(name) {
    return cy.xpath(`//li/text()[normalize-space(.)= '${name}']/parent::*`);
  }
  //dynamic xpath that works for most text locating
  //Clicks any workflow with dynamic xpath
  dynamic(name) {
    return cy.xpath(`//*/text()[normalize-space(.)= '${name}']/parent::*`);
  }
  dynamicValue(value) {
    return cy.xpath(
      `(//div[@class='editable-attribute '][contains(text(),"${value}")])[1]`
    );
  }
  dynamicValueTwo(value) {
    return cy.xpath(
      `(//div[@class='editable-attribute '][contains(text(),"${value}")])[2]`
    );
  }
  dynamicSpan(span) {
    return cy.xpath(`(//span[text()="${span}"])[1]`);
  }
  dynamicProfileType(profileType) {
    return cy.xpath(`//a/*[text()="${profileType}"]/parent::*`);
  }
  advancedSearchProfileName() {
    return cy.xpath("//input[@name='profile-search']");
  }
  searchProfileName() {
    return cy.xpath("//input[@name='search']");
  }
  firstRow() {
    return cy.xpath("//table[@id='react-table']/tbody/tr/td[3]");
  }

  logOut() {
    return cy.xpath("//*[contains(text(),'log out')]");
  }

  //End locators-----------------------------------------
}
export default dashboardPage;
