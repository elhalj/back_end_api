import mongoose from "mongoose";

class Database {
    constructor() {
        this.connect();
    }
    connect() {
        mongoose.connect('mongodb://localhost:27017/Client')
            .then(() => console.log('Connected to MongoDB succefully...'))
            .catch (() => console.log({message: error}))
    }
};

export default Database;