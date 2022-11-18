class dynamicPage {
  liNormalizeText(name) {
    return cy.xpath(
      `(//li/text()[normalize-space(.)= '${name}']/parent::*)[1]`
    );
  }
  normalizeText(name) {
    return cy.xpath(`//*/text()[normalize-space(.)= '${name}']/parent::*`);
  }
  editableDivContainsValueOne(value) {
    return cy.xpath(
      `(//div[@class='editable-attribute '][contains(text(),"${value}")])[1]`
    );
  }
  editableDivContainsValueTwo(value) {
    return cy.xpath(
      `(//div[@class='editable-attribute '][contains(text(),"${value}")])[2]`
    );
  }
  spanTextOne(span) {
    return cy.xpath(`(//span[text()="${span}"])[1]`);
  }
  anchorlinkText(profileType) {
    return cy.xpath(`//a/*[text()="${profileType}"]/parent::*`);
  }
  inputNameValue(searchName) {
    return cy.xpath(`//input[@name="${searchName}"]`);
  }
  textContains(Text1) {
    return cy.xpath(`//*[contains(text(),"${Text1}")])[1]`);
  }
}
export default dynamicPage;
