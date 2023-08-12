// Import packages
import express  from 'express'
import morgan from 'morgan'
import Getstatus from './src/Getstatus.js'
const PORT = process.env.PORT || 1337;

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
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
