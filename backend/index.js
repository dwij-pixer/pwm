const express =  require('express');

require('dotenv').config()

const app = express()

app.get('/', async (_, res, __) => {
	res.json({
		message: 'Hello world'
	})
})

const port = 3000;
app.listen(port, () => console.info(`Application works on ${port}`))