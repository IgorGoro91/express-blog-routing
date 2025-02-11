const express = require('express');
const app = express();
const port = 3000;

const postRoutes = require('./routers/posts');


app.use('/posts', postRoutes);


app.get('/', (req, res) => {
    res.send('Server del mio blog');
});

app.listen(port, () =>{
    console.log(`prova del server ${port}`)
})