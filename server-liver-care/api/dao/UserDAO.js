const User = require ("../models/User");

class UserDAO {
    constructor() {
        this.model = User;
    }

    async create (req, res) {
        try {
            const document = new this.model(req.body);
            await document.save();
            res.status(201).json(document);
        } catch (error) {
            res.status(500).json({ message: `Error al crear documento: ${error.message}`});
        }
    }

    async getAll(req, res) {
        try{
            const items = await this.model.find();
            res.status(200).json(items);
        } catch (error) {
            res.status(500).json({ message: `Error al obtener documentos: ${error.message}`});

        }
    }

    async getById(req, res) {
        try {
            const { id } = req.params;
            const item = await this.model.findById(id);
            if (!item) {
                return res.status(404).json({ message: "Documento no encontrado."})
            }
            res.status(200).json(item);
        } catch (error) {
            res.status(status).json({ message: `Error al obtener documento: ${error.message}`});
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const updateItem = await this.model.findByIdAndUpdate(id, req.body, {new: true});
            if (!updateItem) {
                return res.status(404).json({message: "Documento no encontrado."});
            }
            res.status(200).json(updateItem);
        } catch (error) {
            res.status(500).json({ message: `Errir al actualizar documentos: ${error.message}`});
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const deletedItem = await this.model.findByIdAndDelete(id);
            if (!deletedItem) {
                return res.status(404).json({message: "Documento no encontrado."});
            }
            res.status(200).json({ message: "Documento eliminado exitosamente."});
        } catch (error) {
            res.status(500).json({ message: `Error al eliminar documento: ${error.message}`});
        }
    }

    
}



module.exports = UserDAO;