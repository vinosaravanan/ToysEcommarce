const mongoose = require('mongoose')
const colors = require('colors') 


const DBconnection = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URL)
        console.log(
         `Connected to Mongodb DataBase ${connect.connection.host}`.bgMagenta.white
        );

    } catch (error) {
        console.log(`Error in mongodb ${error}`.bgRed.white);
    }
    
}

module.exports = DBconnection;