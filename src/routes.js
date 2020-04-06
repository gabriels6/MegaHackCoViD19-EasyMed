const { Router } = require('express')

const routes = Router();

const PrescriptionController = require('./Controllers/PrescriptionController')
const PatientController = require('./Controllers/PatientController');

routes.get('/obterPacientes', PatientController.ReceberPacientesCriados);
routes.post('/cadastrarPaciente', PatientController.CadastrarPacientes);
routes.post('/encontrarPaciente', PatientController.EncontrarPaciente);

routes.post('/criarPrescricao', PrescriptionController.construirReceita);
routes.get('/obterPrescricoes', PrescriptionController.receberReceitasCriadas);



module.exports = routes;