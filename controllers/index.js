const models = require("../database/models");

const createGato = async (req, res) => {
  try{
     const gato = await models.Gato.create(req.body);
     return res.status(201).json({
        gato
    });
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
};

const getAllGatos = async (req, res) => {
  console.log('Obteniendo Gatos');
  try {
    const gatos = await models.Gato.findAll({
      include: [
        ]
    });
    return res.status(200).json({ gatos });
  } catch(error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createGato,
  getAllGatos
};