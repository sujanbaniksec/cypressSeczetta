class profileDashboard {
  //Clicks any profile type with dynamic xpath
  profileDashboardDynamic(name) {
    return cy.xpath(`//li/text()[normalize-space(.)= '${name}']/parent::*`);
  }
  profileSearch() {
    return cy.xpath("//input[@name='search']");
  }
  topRowTable() {
    return cy.xpath("//tbody/tr[1]/td[2]");
  }
  profileNameSpan(name) {
    return cy.xpath(`//span/text()[normalize-space(.)= '${name}']/parent::*`);
  }
  //End locators-----------------------------------------
  //Start Methods
  clickProfileDashboard(name) {
    this.profileDashboardDynamic(name).click();
  }
}
export default profileDashboard;
