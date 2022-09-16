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
  advancedSearchProfileName() {
    return cy.xpath("//input[@name='profile-search']");
  }

  //End locators-----------------------------------------
}
export default dashboardPage;
