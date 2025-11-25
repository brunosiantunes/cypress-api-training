# 🚀 Cypress API Automation Training

This project is a Proof of Concept (PoC) for API Testing automation using **Cypress**.
The goal is to validate the endpoints of the [ServeRest](https://serverest.dev/) public API, implementing best practices such as dynamic data generation and request chaining.

## 🛠️ Stack

- **Language:** JavaScript
- **Framework:** Cypress (Testing Framework)
- **Libraries:** [@faker-js/faker](https://fakerjs.dev/) - (Dynamic Data Generation)
- **Environment:** Node.js

---

## 📚 Concepts Applied

### 1. The AAA Pattern (Arrange, Act, Assert)
The tests follow the standard for unit and integration testing:
- **Arrange:** Prepare the environment and generate test data (Variables, Faker).
- **Act:** Execute the action (Send the HTTP Request).
- **Assert:** Validate the outcome (Check Status Code, Response Body, Schema).

### 2. Dynamic Data Strategy (Faker)
**Problem:** Hardcoded data (static strings) causes tests to fail on subsequent runs due to unique constraint violations (e.g., "Email already in use").
**Solution:** We use `@faker-js/faker` to generate random and valid data for every execution.
```javascript
// Example
const randomEmail = faker.internet.email(); // Generates: "jane.doe_82@gmail.com"