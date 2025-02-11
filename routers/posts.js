
const express = require('express');
const router = express.Router();


const posts = [
    { id: 1, titolo: "Il mio primo post", contenuto: "Contenuto del primo post" },
    { id: 2, titolo: "Viaggio in montagna", contenuto: "Esperienza tra le montagne" },
    { id: 3, titolo: "Ricetta della pasta", contenuto: "Come fare una pasta perfetta" },
    { id: 4, titolo: "Novità tecnologiche", contenuto: "Ultime news tech" },
    { id: 5, titolo: "Allenamento a casa", contenuto: "Fitness senza palestra" }
];


router.get('/', (req, res) => {
    res.send('Lista dei post');
});


router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Dettaglio del post ${id}`);
});


router.post('/', (req, res) => {
    res.send('Creazione di un nuovo post');
});


router.put('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Aggiornamento del post ${id}`);
});


router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Cancellazione del post ${id}`);
});

module.exports = router;