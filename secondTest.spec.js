let user;

describe('Your Second Test', () => {
    before(function () {
        cy.visit('http://localhost:1667/#/register')
        cy.task("freshUser").then((object) => {
            user = object;
        });
    });

    it('Sign up with faker', () => {
        cy.get(':nth-child(1) > .form-control').type(user.username);
        cy.get(':nth-child(2) > .form-control').type(user.email);
        cy.get(':nth-child(3) > .form-control').type(user.password);

        cy.get('.btn').click();
        cy.get('.navbar').contains(user.username).should('exist');
    })
  })