import "dotenv/config"
import express from "express";
const app=express();
const PORT=process.env.PORT || 5000


app.use(express.json());
app.use(express.urlencoded({extended:false}));

//* Connect to Server
app.get('/', function(req, res) {
    res.send("Rendering file")
});

//* Route File
import routes from './routes/index.js';
app.use(routes);


//* Listen Port
app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));

