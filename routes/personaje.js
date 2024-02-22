var express = require('express');
var router = express.Router();
const Personaje = require('../models/personaje');

router.get('/:id', async (req, res) => {
  const {id} = req.params;
  try {
    const personajes = await Personaje.find({id:id}, );
    res.render('personajes', {personajes});
  } catch (error) {
    res.status(500).send('Error al obtener la lista de personajes.');
  }
});

module.exports = router;