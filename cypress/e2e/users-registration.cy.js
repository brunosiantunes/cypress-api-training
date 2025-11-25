/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

describe('Functionality: User Registration', () => {
    
    it('must register a user successfully', () => {

        // 1. preparation (arrange)
        // generate the data before calling the API
        const randomName = faker.person.fullName();
        const randomEmail = faker.internet.email();

        // assemble the object that will be send

        const userData = {
            nome: randomName,
            email: randomEmail,
            password: "test",
            administrador: "true"
        };

        // 2. Act - request POST
        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/usuarios',
            body: userData // send the js object created above
        }).then((response) => {

            // 3. validation (assert)
            //  check if (201) was created
            expect(response.status).to.equal(201);
            expect(response.body.message).to.equal('Cadastro realizado com sucesso');

            // captures the generated ID (similar done in postman's environment variable)
            const idGenerated  = response.body._id;
            cy.log('ID gerado: ' + idGenerated);

            // double validation (chain request)
            // checking to see if this ID was correctly saved
            // the GET request inside the .then() of POST request to ensure proper order
            cy.request({
                method: 'GET',
                url: `https://serverest.dev/usuarios/${idGenerated}`
            }).then((getResponse) => {
                expect(getResponse.status).to.equal(200);
                
                //check if the returned email is the same one generated at the beginning
                expect(getResponse.body.email).to.equal(randomEmail);
            })
        })
    })
})