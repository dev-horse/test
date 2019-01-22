const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./server');
const should = require('should');


chai.use(chaiHttp);


describe('/mambers', () => {

  describe('/', () => {
    it('it should get members succes', done => {
      chai.request(server)
        .get('/members')
        .end((err, res) => {
          should(err).is.null();
          should(res).is.not.null();
          should(res.status).eql(200);

          return done();
        })
    })
  })

  describe('/1', () => {
    it('it should get one member succes', done => {
      chai.request(server)
        .get('/members/1')
        .end((err, res) => {
          should(err).is.null();
          should(res).is.not.null();
          should(res.status).eql(200);

          return done();
        })
    })
  })
})