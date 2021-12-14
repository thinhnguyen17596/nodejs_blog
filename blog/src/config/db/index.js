const mongoose = require('mongoose');

async function connect() {
    try{
        mongoose.connect('mongodb://127.0.0.1:27017/f8_education_dev');
        console.log('Connect db success!');
    }
    catch(error){
        console.log('Connect db fail!');

    }
}

module.exports = { connect };