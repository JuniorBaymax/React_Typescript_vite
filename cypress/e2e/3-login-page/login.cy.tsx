describe('Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login');
    // Assuming the login page is accessible at '/login' URL
  });

  it('should display error message for Input Fields', () => {
    cy.wait(2000);
    cy.get('#email-login').type('invalidexample.com');
    cy.get('#password-login').type('s');
    cy.get('button[type="submit"]').click();
    cy.contains('Must be a valid email').should('be.visible');
    cy.contains('password must be at least 2 characters').should('be.visible');
  });

  it('should log in successfully with valid credentials', () => {
    cy.wait(2000);

    cy.get('#email-login').type('valid@example.com');
    cy.get('#password-login').type('1234567890');
    cy.get('button[type="submit"]').click();
    // cy.contains('Invalid email or password').should('be.visible');
    cy.wait(2000);

    // Assuming successful login redirects to the home page
  });

  it('should check Username on dashboard', () => {
    cy.visit('http://localhost:3000/dashboard/default');
    cy.wait(3000);
    cy.get('span[role="button"][aria-haspopup="true"]').click();
    cy.contains('John Doe').should('be.visible');
    cy.wait(1000);
    cy.get('span[role="button"][aria-haspopup="true"]').click();
  });
});
