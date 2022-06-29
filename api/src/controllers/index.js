const Cliente = require("../models/Clientes.js");

// Traigo todos los clientes
const getAllClients = async (req, res) => {
  try {
    const clientes = await Cliente.findAll({
      attributes: ["id", "name", "lastName", "phone", "age", "state"],
    });
    res.json(clientes);
  } catch (err) {
    console.log(err);
    res.status(500).send("Hubo un error");
  }
};

// Traigo un cliente por ID
const getClientById = async (req, res) => {
  
  try {
    const id = req.params.id;
    const cliente = await Cliente.findByPk(id, {
      attributes: ["id", "name", "lastName", "phone", "age", "state"],
    });
    res.json(cliente);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Creo un client
const createClient = async (req, res) => {
 
  try {
    const {name, lastName, phone, age, state} = req.body;
    const newCliente = await Cliente.create({
        name,
        lastName,
        phone,
        age,
        state
      });

    res.json({
      message: "Cliente creado",
      newCliente
    })
  } catch (error) {
    res.json({ message: error.message });
    console.log(error);
  }
};

//Modifico un cliente
const updateClient = async (req, res) => {
    try {
      await Cliente.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.json({
        message: "Client Updated",
      });
    } catch (error) {
      res.json({ message: error.message });
    }
  };


//Borro un cliente
const deleteClient = async (req, res) => {
    try {
        Cliente.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.json({
        message: "Client Deleted",
      });
    } catch (error) {
      res.json({ message: error.message });
    }
  };




module.exports = {
  getAllClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient
};
