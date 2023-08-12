// Import packages
import express  from 'express'
import morgan from 'morgan'
import Getstatus from './src/Getstatus.js'

// App
const app = express()
// Morgan
app.use(morgan('tiny'))
// First route
app.get('/', async (req, res) => {

        const {id} = req.query;

        const result = await Getstatus({id});

         res.json({result});
})
// Starting server
app.listen('4242')