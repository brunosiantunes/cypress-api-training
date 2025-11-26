# 🚀 Cypress API Automation Training

![Cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

This project is a **Proof of Concept (PoC)** for API Testing automation using **Cypress**.
The goal is to validate the endpoints of the [ServeRest](https://serverest.dev/) public API, implementing QA practices such as dynamic data generation, request chaining, and assertion logic.

---

## 🛠️  Stack

- **Language:** JavaScript (ES6+)
- **Framework:** Cypress - (Testing)
- **Libraries:** [@faker-js/faker](https://fakerjs.dev/) - (Dynamic Data Generation)
- **Environment:** Node.js - (Linux)

---

## 📂 Project Structure

```text
cypress-api-training/
├── cypress/
│   ├── e2e/
│   │   └── users-registration.cy.js  # Main test scenarios (POST/GET)
│   ├── support/                      # Custom commands (future implementation)
│   └── fixtures/                     # Static data files
├── node_modules/                     # Dependencies (ignored by Git)
├── package.json                      # Project configuration and scripts
└── README.md                         # Project documentation
```

## 📚 Concepts Applied

### 1. The AAA Pattern (Arrange, Act, Assert)
The tests follow the standard for unit and integration testing:
- **Arrange:** Prepare the environment and generate test data (Variables, Faker).
- **Act:** Execute the action (Send the HTTP Request).
- **Assert:** Validate the outcome (Check Status Code, Response Body, Schema).


### 2. Dynamic Data Strategy (Faker)
**Problem:** Hardcoded data (static strings) causes tests to fail on subsequent runs due to unique constraint violations (e.g., "Email already in use").
**Solution:** We use `@faker-js/faker` to generate random and valid data for every execution.
`javascript
// Example
const randomEmail = faker.internet.email(); // Generates: 'jane.doe_82@gmail.com' `

### 3. Request Chaining (Callback Hell / Promises)
Unlike Postman (which uses Global Variables to pass data between tabs), Cypress uses JavaScript promises to handle asynchronous operations. To use data from a response (like a generated ID) in a subsequent request, we nest the requests to ensure scope access.
Flow: `POST /users` -> (wait for response) -> `Capture ID` -> `GET /users/{id}`

`javascript
cy.request(POST).then((res) => {
    const id = res.body._id; 
    // The GET request must be inside the .then() block to access the 'id' scope
    cy.request(GET, `url/${id}`)
}) `


## 📚 📝 Author
Developed by [Bruno Antunes] during a specialized QA Mentorship program focusing on API Automation Architecture.

