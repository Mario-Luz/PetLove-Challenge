const mongoose = require('mongoose');
const conectionStr = process.env.mongodbConection;

module.exports.connect = async (databaseName) => {
    await mongoose.connect(conectionStr + databaseName + "?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).catch(err => {
        return false;
    });

    const connection = mongoose.connection;
    connection.once('open', () => {
        return true;
    })
}