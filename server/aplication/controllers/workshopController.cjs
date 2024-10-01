const WorkshopService = require('../services/workshopsServices.cjs');

class WorkshopController {
    constructor() {
        this.workshopService = new WorkshopService(); // Instanciamos WorkshopService
    }

    async getAllWorkshops(req, res) {
        try {
            const workshops = await this.workshopService.getAllWorkshops(); // Llamamos al método en la instancia
            return res.status(200).json(workshops);
        } catch (error) {
            return res.status(404).json({
                status: 404,
                message: error.message || 'Error fetching workshops',
            });
        }
    }

    async getProductsByWorkshopId(req, res) {
        try {
            const { workshopId, search } = req.params; // Obtener el ID del taller y el parámetro de búsqueda desde la URL

            const products = await this.workshopService.getProductsByWorkshopId(workshopId);

            // Filtrar productos si el parámetro `search` está presente
            let productos = products[0].productosDetalles;
            console.log(productos)
            if (search && search.trim() !== "") {
                const searchRegex = new RegExp(search, 'i'); // Expresión regular para búsqueda insensible a mayúsculas
                productos = productos.filter(producto => searchRegex.test(producto.nombre));
            }

            // Devolver la información del taller y sus productos (filtrados o no)
            return res.status(200).json({
                nombre_taller: products[0].nombre_taller,
                productosDetalles: productos
            });
        } catch (error) {
            return res.status(404).json({
                status: 404,
                message: error.message || 'Error fetching products',
            });
        }
    }
}

module.exports = WorkshopController;
