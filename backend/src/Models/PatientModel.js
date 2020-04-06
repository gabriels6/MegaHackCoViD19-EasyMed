const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    NomeDoPaciente: String,
    RG: String,
    CPF: String,
    DataRegistroPaciente: String,
    DataUltimaConsulta: String,
    Diagnostico: String,
    Telefone: String,
    Email: String
});

module.exports = mongoose.model('Patient', PatientSchema)