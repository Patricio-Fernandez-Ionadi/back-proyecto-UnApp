export class UserController {
	static async getAll(req, res) {
		res.json({
			usuarios: [],
		})
	}
}
