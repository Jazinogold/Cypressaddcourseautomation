/// <reference types="cypress" />

describe("This test is to ensure that users can login to the Quales app sucessfully", () => {

  it("Verify user with correct credentials can login into the app", () => {

    cy.visit("https://academy.quales.tech/login");
    cy.get('[data-testid="EmailAddress"]').type("ay@mail.com");
    cy.get('[data-testid="Password"]').type("pass1234")
    cy.get('.MuiButton-contained').click()
    cy.contains('Login Successfull').should("be.visible")
    cy.get('.MuiGrid-root > .MuiButtonBase-root').click();
    cy.viewport('macbook-16')
    cy.get('[data-testid="Title*"]').type("Test Course by Collins");
    cy.get('[data-testid="Description*"]').type("Cypress Automated test by Collins");
    cy.get('#demo-simple-select').click();
    cy.get('[data-value="3"]').click();
    cy.get('[data-testid="ImageURL"]').type("https://www.20i.com/blog/wp-content/uploads/2022/08/git-blog-header.png")
    cy.get('[data-testid="online"]').click()
    cy.get('[data-testid="CourseURL*(mustbeyoutube)"]').type("https://www.youtube.com/watch?v=2qxbSmSRZQQ")
    cy.get('.css-tzsjye > .MuiButton-root').click()
    cy.contains('Course created successfully').should("be.visible")
    cy.wait(6000)
    cy.get(':nth-child(10) > .MuiCardMedia-root').click()
    cy.get('.css-wvpqgg').click()
    cy.get('.MuiBox-root > .MuiButton-contained').click()
    cy.contains('Course deleted successfully').should("be.visible")
    


  });
});