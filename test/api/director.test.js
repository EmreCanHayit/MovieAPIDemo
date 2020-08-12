const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../../app');

chai.use(chaiHttp);

let token, directorId;

describe('/api/directors tests', () => {
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
            })
    });

    it('it should GET all the directors', (done) => {
        chai.request(server)
            .get('/api/directors')
            .set('x-access-token', token)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });

    it('it should POST a director', (done) => {
        const director = {
            name: 'Test name',
            surname: 'Test surname',
            bio: 'Test Bio'
        }
        chai.request(server)
            .post('/api/directors')
            .set('x-access-token', token)
            .send(director)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('name');
                res.body.should.have.property('surname');
                res.body.should.have.property('bio');
                directorId = res.body._id;
                done();
            });
    });

    it('it should GET a director given by id', (done) => {
        chai.request(server)
            .get('/api/directors/' + directorId)
            .set('x-access-token', token)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });

    it('it should UPDATE a director given by id', (done) => {
        const director = {
            name: 'Update name',
            surname: 'Update surname',
            bio: 'Update Bio'
        }
        chai.request(server)
            .put('/api/directors/' + directorId)
            .set('x-access-token', token)
            .send(director)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('name').eql(director.name);
                res.body.should.have.property('surname').eql(director.surname);
                res.body.should.have.property('bio').eql(director.bio);
                done();
            });
    });

    it('it should DELETE a director given by id', (done) => {
        chai.request(server)
            .delete('/api/directors/' + directorId)
            .set('x-access-token', token)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });
});