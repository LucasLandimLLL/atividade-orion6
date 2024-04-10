const mongoose = require('mongoose');

const IngredienteSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 100,
        trim: true
    },
    
    descricao: {
        type: String,
        maxLength: 100
    },
});

const Ingrediente = mongoose.model('Ingrediente', IngredienteSchema);

module.exports =  Ingrediente;