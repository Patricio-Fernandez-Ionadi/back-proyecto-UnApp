import Express from 'express'

import {
	eventosRouter,
	librosRouter,
	univRouter,
	userRouter,
} from './src/routes/index.js'

const app = Express()

app.get('/', (req, res) => {
	console.log('app get')
	res.json({ message: 'Applicacion on' })
})

app.use('/users', userRouter)
app.use('/libros', librosRouter)
app.use('/eventos', eventosRouter)
app.use('/univ', univRouter)

const PORT = 3001
app.listen(PORT, () => {
	console.table({
		index: 'http://localhost:3001',
		users: 'http://localhost:3001/users',
		univ: 'http://localhost:3001/univ',
		libros: 'http://localhost:3001/libros',
		eventos: 'http://localhost:3001/eventos',
	})
})
