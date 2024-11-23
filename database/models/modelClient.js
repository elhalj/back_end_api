import mongoose from "mongoose"
let numero = 1

const schemaClient = new mongoose.Schema({
    nom:{
        type: String,
    },
    prenom:{
        type: String,
    },
    addresse:{
        type: String,
    },
    telephone:{
        type: Number,
    },
    id:{
        type: Number,
        default: numero += 1
    }
});

const modelClient = mongoose.model('Client',schemaClient);
export default modelClient;