import modelVoiture from "../database/models/modelClient.js";

export async function AjouterVoiture(req,res) {
    try {
        const { modele, marque, couleur, immatriculation} = req.body;
        const creeVoiture = await modelVoiture.create({
            modele, marque, couleur, immatriculation
        })
        res.status(200).json(creeVoiture)
    } catch (error) {
        res.status(500).json({message: error})
    }
};

export async function afficherVoiture(req,res) {
    try {
        const afficher = await modelVoiture.find({})
        res.status(200).json(afficher)
    } catch (error) {
        res.status(500).json({message: error})
    }
};