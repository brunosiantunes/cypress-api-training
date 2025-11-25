/// <reference types="cypress" />

describe('Api test - ServerRest', () => {

    it('Must successfully list users (GET)', () => {
        // cy.request function works like the SEND button in postman
        cy.request({
            method: 'GET',
            url: 'https://serverest.dev/usuarios'
    }). then((response) => {
        // everything here is the equivalent of the "Tests" tab in Postman

        // Checks if the status is 200
        expect(response.status).to.equal(200)

        // check if the response body is not empty
        expect(response.body).to.have.property('usuarios');

        // for visualization in the log only
        cy.log(JSON.stringify(response.body));
        
        })
    })
})