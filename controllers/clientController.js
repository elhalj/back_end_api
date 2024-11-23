import modelClient from "../database/models/modelClient.js";

export async function AjouterClient(req,res) {
    try {
        const { nom, prenom, addresse, telephone } = req.body;
        const creeClient = await modelClient.create({
            nom, prenom, addresse, telephone
        })
        res.status(200).json(creeClient)
    } catch (error) {
        res.status(500).json({message: error})
    } finally{
        console.log('ajouté avec succès...')
    }
};

export async function afficherClient(req,res) {
    try {
        const afficher = await modelClient.find({})
        res.status(200).json(afficher)
    } catch (error) {
        res.status(500).json({message: error})
    } finally{
        const afficher = await modelClient.find({})
        console.log('affiché avec succès...',afficher)
    }
};