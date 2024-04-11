export class LibrosController {
	static async getAll(req, res) {
		res.json({
			libros: [],
		})
	}
}
