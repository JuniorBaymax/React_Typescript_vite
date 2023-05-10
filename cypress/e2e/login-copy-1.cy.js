describe('Login', () => {
  beforeEach(() => {
    cy.visit('/login'); // Assuming the login page is accessible at '/login' route
  });

  it('should display login form and successfully log in', () => {
    // Fill in email and password
    cy.get('#email-login').type('info@codedthemes.com');
    cy.get('#-password-login').type('123456');

    // Submit the form
    cy.get('form').submit();

    // Assert successful login
    cy.url().should('not.include', '/login'); // Assuming successful login redirects to a different URL

    // Assert user is logged in
    cy.contains('Welcome, User'); // Assuming after successful login, a welcome message is displayed
  });

  it('should display error message for invalid credentials', () => {
    // Fill in invalid email and password
    cy.get('#email-login').type('invalidemail@example.com');
    cy.get('#-password-login').type('incorrectpassword');

    // Submit the form
    cy.get('form').submit();

    // Assert error message is displayed
    cy.contains('Invalid email or password');
  });
});
