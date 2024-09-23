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
 app.use(core(
    {
     rigin: 'http://localhost:8080',  // or your frontend domain
     credentials: true,
   }
 ))

// app.use(cors({
//     origin: 'http://localhost:5173',  // or your frontend domain
//     credentials: true,
//   }));

app.use(express.json());
app.use(cookieparser());


const UserRouter = require('./Route/UserRouter')
const ProductRouter = require('./Route/ProductRouter')
const CardRouter = require('./Route/CardRouter')

//api Routes
app.use('/api/v1', UserRouter)
app.use('/api/v1', ProductRouter)
app.use('/api/v1', CardRouter)



app.get('/', async (req, res) => {
    res.send('hollo world')
})



// server 
const PORT = 8080 || process.env.PORT
app.listen(PORT, ()=> {
    console.log(`server is running on http://localhost:${PORT}`.bgCyan.white)
})






