import express from 'express';
const router = express.Router();
import NotaController from '../controllers/notaController.js';

router.post('/notas', NotaController.registrarNota);
router.get('/notas', NotaController.listarNotas);
router.get('/notas/agrupadas', NotaController.listarNotasAgrupadas);
router.get('/notas/estadisticas', NotaController.estadisticas);
router.get('/notas/estadisticasGeneral', NotaController.estadisticasGeneral);

export default router;
