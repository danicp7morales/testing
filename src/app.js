
import {v4} from 'uuid';
import express from 'express';//traemos express

const app = express();//en app ejecutamos express

app.use(express.json());


app.get('/ping',(req, res) => {//creamos una direccion ping
    res.send('pong');
})

app.get('/tasks', (req, res) => {
    res.json([])
})

app.post('/tasks', (req, res) => {
    const {title, description} = req.body;

   if (!title || !description) return res.sendStatus(400);


    res.json({
       title,
       description, 
       id: v4(),
    });
});





export default app;