import Data from "../data/data"
import Params from "../data/params";
describe('Store Tests', () => {

    const data=new Data;
    const params= new Params;
    var url=params.url();

    it('Create Store', () => {
        
        cy.request({
            method: 'POST',
            url: url+'/v2/store/order',
            body: data.bodyPayload2()
        })
            .then((response) => {
                expect(response.status).to.eq(200)
            })
    })

    it('Get Store OrderId', () => {
        
        cy.request({
            method: 'GET',
            url: url+'/v2/store/order/1',
            headers: data.headerPayload()
        })
            .then((response) => {
                expect(response.status).to.eq(200)
            })
    })

    it('Delete Store OrderId', () => {
        
        cy.request({
            method: 'DELETE',
            url: url+'/v2/store/order/1',
            headers: data.headerPayload(),
        })
            .then((response) => {
                expect(response.status).to.eq(200)
            })
    })

})
