import Data from "../data/data"
import Params from "../data/params";

describe('Pet Tests', () => {
    const data = new Data;
    const params=new Params;
    var url=params.url();

    it('Create Pet', () => {

        cy.request({
            method: 'POST',
            url: url+'/v2/pet',
            body: data.bodyPayload3()
        })
            .then((response) => {
                expect(response.status).to.eq(200)
            })
    })

    it('Get PetId', () => {

        cy.request({
            method: 'GET',
            url: url+'/v2/pet/1',
            headers: data.headerPayload(),
        })
            .then((response) => {
                expect(response.status).to.eq(200)
            })
    })

    it('Update PetId', () => {

        cy.request({
            method: 'PUT',
            url: url+'/v2/pet',
            body: data.updatePayload2()
        })
            .then((response) => {
                expect(response.status).to.eq(200)
            })
    })

    it('Update PetId2', () => {

        cy.request({
            method: 'PUT',
            url: url+'/v2/pet',
            body: data.updatePayload3()
        })
            .then((response) => {
                expect(response.status).to.eq(200)
            })
    })

    it('Delete Pet', () => {

        cy.request({
            method: 'DELETE',
            url: url+'/v2/pet/1',
            headers: data.headerPayload(),
        })
            .then((response) => {
                expect(response.status).to.eq(200)
            })
    })

})
