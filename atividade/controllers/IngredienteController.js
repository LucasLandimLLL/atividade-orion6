const { json } = require("express");
const ingrediente  = require("../models/ingredientes")

const ingredienteController = {
    getAll: async (req, res) => {
        res.json(await ingrediente.find())
    },
    get: async (req, res) => {

        try {
            res.json(await ingrediente.findById(req.params.id))
        } catch (error) {
            res.status(404).json({ error: 'Registro não encontrado' })
        }

    },
    create: async (req, res) => {
        res.json(await ingrediente.create(req.body))

        try {
            res.json(await ingrediente.create(req.params.id))
        } catch (error) {
            res.status(400).json(error)
        }

    },
    update: async (req, res) => {
        res.json(await ingrediente.findByIdAndUpdate(req.params.id, req.body))

        try {
            res.json(await ingrediente.findByIdAndUpdate(req.params.id))
        } catch (error) {
            res.status(404).json({ error: 'Registro não encontrado' })
        }

    },
    delete: async (req, res) => {
        res.json(await ingrediente.findByIdAndDelete(req.params.id))

        try {
            res.json(await ingrediente.findByIdAndDelete(req.params.id))
        } catch (error) {
            res.status(404).json({ error: 'Registro não encontrado' })
        }

    },
}

module.exports = ingredienteController