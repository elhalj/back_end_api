import mongoose from "mongoose"


const schemaVoiture = new mongoose.Schema({
    modele:{
        type: String,
    },
    marque:{
        type: String,
    },
    couleur:{
        type: String,
    },
    immatriculation:{
        type: String,
    },
    id:{
        type: Number,
        default: 1
    },
});

const modelVoiture = mongoose.model('Voiture',schemaVoiture);
export default modelVoiture;