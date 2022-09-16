class loginPage {
  usernameInput() {
    return cy.xpath("//input[@id='username']");
  }
  passwordInput() {
    return cy.xpath("//input[@type='password']");
  }
  loginBtn() {
    return cy.get('input[type="submit"]');
  }
  //------------locators above, methods below----------------------
  loginAsSystemUser() {
    //Login as system user
    this.usernameInput().type("neprofile0");
    this.passwordInput().type("S3cz377a#{enter}");
  }
}
export default loginPage;
