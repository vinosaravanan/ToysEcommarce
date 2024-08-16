const express  = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const cookieparser = require('cookie-parser')
const DBconnection = require('./config/database')
const core = require('cors')

dotenv.config();
const app = express();

// mongoDb connection 
DBconnection()

// middlewares
app.use(core({
    rigin: 'http://localhost:8080',
    credentials: true
}))

app.use(express.json());
app.use(cookieparser());


const UserRouter = require('./Route/UserRouter')
const ProductRouter = require('./Route/ProductRouter')


//api Routes
app.use('/api/v1', UserRouter)
app.use('/api/v1', ProductRouter)




app.get('/', async (req, res) => {
    res.send('hollo world')
})



// server 
const PORT = 8080 || process.env.PORT
app.listen(PORT, ()=> {
    console.log(`server is running on http://localhost:${PORT}`.bgCyan.white)
})






