const mongoose = require('mongoose')

const connectDb = async () => {
    return mongoose.connect(process.env.MONGO_DEV)
const connectDb = async (url) => {
    return await mongoose.connect(url)
        .then(res => {
            console.log(`mongodb connected successfully`)
            if(process.env.MODE=== "development") {
                console.log(`local mongodb connected successfully`)
            } 

            if(process.env.MODE === "production") {
                console.log(`cloud mongodb connected`)
            }
        }).catch(err => console.log(err))
}

module.exports = connectDb