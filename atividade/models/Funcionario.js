const mongoose = require('mongoose')

const FuncionarioSchema = mongoose.Schema({
    
    nome: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 100,
        trim: true
    },
    cpf: {
        type: Number,
        default: 0,
        min: 0,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    sexo: {
        type: String,
        required: true
    },
    telefone: {
        type: Number,
        default: 0,
        min: 0,
        required: true
    },
    cargo: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 100,
        trim: true,
    }
})

const Funcionario = mongoose.model('Funcionario', FuncionarioSchema)
module.exports = Funcionario
