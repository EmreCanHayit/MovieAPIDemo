const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect(
        'mongodb+srv://tech-admin:tech-api-mongodb-serv@technology-api.vsz7s.mongodb.net/technology-api?retryWrites=true&w=majority', 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
    mongoose.connection.on('open', () => {
        //console.log('MongoDB: Connected');
    });
    mongoose.connection.on('error', (err) => {
        console.log('MongoDB: Error', err);
    });

    mongoose.Promise = global.Promise;
};