class loginPage {
  usernameInput() {
    return cy.get("#username");
  }
  passwordInput() {
    return cy.get("#password");
  }
  loginBtn() {
    return cy.get('input[type="submit"]');
  }
}
export default loginPage;
