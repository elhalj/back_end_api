import express from 'express';
import { afficherVoiture, AjouterVoiture } from '../controllers/clientController.js';
export const route = express.Router();

route.post('/ajouter/voiture',AjouterVoiture);
route.get('/afficher/voiture',afficherVoiture);