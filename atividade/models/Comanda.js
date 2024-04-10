const mongoose = require('mongoose')
const ComandaSchema = mongoose.Schema({
    
    mesa: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 100,
        trim: true
    },

    data: {
        type: Date,
        required: true,
        set: (value) => {
            const [dia, mes, ano] = value.split('/')
            return `${ano}-${mes}-${dia}`
        }
    },


})

const Comanda = mongoose.model('Comanda', ComandaSchema)
module.exports = Comanda



