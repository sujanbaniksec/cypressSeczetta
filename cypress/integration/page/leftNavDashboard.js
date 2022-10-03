class leftNavDashboard {
  //Clicks any workflow with dynamic xpath
  leftNavDynamic(name) {
    return cy.xpath(`//li/text()[normalize-space(.)= '${name}']/parent::*`);
  }
  //End locators-----------------------------------------
  //Start Methods
  clickLeftNavLink(name) {
    this.leftNavDynamic(name).click();
  }
}
export default leftNavDashboard;
