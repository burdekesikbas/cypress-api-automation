import Data from "../data/data"
import Params from "../data/params";

describe('User Tests', () => {

  const data = new Data;
  const params = new Params;
  var url=params.url();

  it('Create User', () => {

    cy.request({
      method: 'POST',
      url: url+'/v2/user',
      body: data.bodyPayload(),
    })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('Get User Info', () => {

    cy.request({
      method: 'GET',
      url: url+'/v2/user/burde',
      headers: data.headerPayload(),
    })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('Update User', () => {

    cy.request({
      method: 'PUT',
      url: url+'/v2/user/b%C3%BCrde',
      body: data.updatePayload("bürde","kesikbas"),
    })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('Delete User', () => {

    cy.request({
      method: 'DELETE',
      url: url+'/v2/user/burde',
      headers: data.headerPayload(),
    })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

})
