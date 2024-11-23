import express from 'express';
import { afficherClient, AjouterClient } from '../controllers/clientController.js';
export const route = express.Router();

route.post('/ajouter/client',AjouterClient);
route.get('/afficher/client',afficherClient);