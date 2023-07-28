/// <reference types="cypress" />

describe("This test is to validate that CRUD operations can be performed on the Quales Academy website", () => {
  let courseId = ""; // Declare the courseId variable here

  const baseUrl = "https://api.quales.tech";
  const path = "/api/courses/";

  it("Verify user can create a course using the POST method", () => {
    cy.api({
      method: "POST", 
      url: baseUrl + path,
      body: {
        "title": "Testing Cypress API",
        "categoryId": 2,
        "description": "Cypress Api testing",
        "courseUrl": "https://www.youtube.com/watch?v=8vXoMqWgbQQ",
        "imageUrl": "https://source.unsplash.com/user/c_v_r/900x800",
        "location": "online",
        "isPremium": false,
      },
    }).as("createACourseRequest");

    // Fetch the courseId from the response and store it in the variable
    cy.get("@createACourseRequest").then((res) => { 
      courseId = res.body.id;
      const responseBody = res.body;

      // Tests/assertions
      expect(res.status).to.eq(200);
      expect(responseBody).to.have.property("id");
      expect(responseBody).to.have.property("title");

      // Proceed to the second test after courseId is set
      cy.searchCourse();
    });
  });

  // Create a custom Cypress command for the second test
  Cypress.Commands.add("searchCourse", () => {
    cy.api({
      method: "GET", 
      url: baseUrl + path + courseId,
    }).as("searchACourseRequest");

    // Fetch the response and perform assertions
    cy.get("@searchACourseRequest").then((res) => { 
      const responseBody = res.body;

      // Tests/assertions
      expect(res.status).to.eq(200);
      expect(responseBody).to.have.property("id");
      expect(responseBody).to.have.property("title");
    });
  });
});

it("Verify user can create a course using the POST method", () => {
  cy.api({
    method: "POST", 
    url: baseUrl + path,
    body: {
      "title": "Testing Cypress API",
      "categoryId": 2,
      "description": "Cypress Api testing",
      "courseUrl": "https://www.youtube.com/watch?v=8vXoMqWgbQQ",
      "imageUrl": "https://source.unsplash.com/user/c_v_r/900x800",
      "location": "online",
      "isPremium": false,
    },
  }).as("createACourseRequest");

  // Fetch the courseId from the response and store it in the variable
  cy.get("@createACourseRequest").then((res) => { 
    courseId = res.body.id;
    const responseBody = res.body;

    // Tests/assertions
    expect(res.status).to.eq(200);
    expect(responseBody).to.have.property("id");
    expect(responseBody).to.have.property("title");

    // Proceed to the second test after courseId 
    cy.searchCourse();
  });
});

