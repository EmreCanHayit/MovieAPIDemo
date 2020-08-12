const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../../app');

chai.use(chaiHttp);

let token;

describe('/api/movies tests', () => {
    before((done) => {
        chai.request(server)
            .post('/authenticate')
            .send({
                username: 'testuser',
                password: 'test1234'
            })
            .end((err, res) => {
                token = res.body.token;
                done();
            });
    });

    describe('Movies test', () => {
        it('it should GET all the movie', (done) => {
            chai.request(server)
            .get('api/movies')
            .set('x-access-token', token)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
            });
            done();
        });
    });
});