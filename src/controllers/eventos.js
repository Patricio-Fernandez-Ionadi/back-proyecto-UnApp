export class EventosController {
	static async getAll(req, res) {
		res.json({
			eventos: [],
		})
	}
}
