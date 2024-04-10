const mongoose = require('mongoose')


const ClienteSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 100,
        trim: true
    },
    cpf: {
        type:Number,
        required: true,
        min: 0,
        default: 0,
    },
    telefone: {
        type:Number,
        required: true,
        min : 0,
        default: 0,
    },
    email: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 100,
        trim: true
    },
})

const Cliente = mongoose.model('Cliente', ClienteSchema)
module.exports = Cliente
