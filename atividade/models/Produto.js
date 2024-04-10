const mongoose = require('mongoose')

const ProdutoSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 100,
        trim: true
    },
    preco: {
        type: Number,
        default: 0,
        min: 0,
        required: true
    },
    tamanho: {
        type: String,
        enum: ["Pequeno", "Médio", "Grande"],
        required: true
    },

    tipo: {
        type: String,
        enum: ["Bebidas", "Pizzas", "Massas", "Sobremesas"],
        required: true
    },
    ingredientes: [String]
})

const Produto = mongoose.model('Produto', ProdutoSchema)
module.exports = Produto
