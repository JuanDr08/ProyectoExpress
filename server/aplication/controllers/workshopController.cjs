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
}

module.exports = WorkshopController;
