const db = require ("../models");

Tutorial = db.tutorials;
const Op = db.sequelize.Op;//redução de codigo

exports.create = (req, res) => {
    //validate request
    if (!req.body.title){
        res.status(400).send({
            message:"Titulo não pode ser vazio!"
        })
        return;
    }
    //create Tutorial
    const tutorial = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    }
    Tutorial.create(tutorial)
    .then((data) => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Erro interno ao criar o tutorial"
        })
    })
  
};

exports.findAll = (req, res) => {
    Tutorial.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
        err.message || "Erro interno ao buscar os tutoriais"
      });
    });
  };

  exports.findAllPublished = (req, res) => {
    Tutorial.findAll({ where: { published: true } })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message || "Erro interno!" });
      });
  };

  exports.findOne = (req, res) => {
 
    const id = req.params.id;
  
    Tutorial.findByPk(id)
    .then((data) => {
        if(!data){
            res.status(404).send({message:"Id não encontrado"})
          }       
        
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
        err.message || `Erro interno ao buscar os tutorial de id: ${id}`
      });
    });
} 

exports.update = (req, res) => {
    const id = req.params.id;
  
    Tutorial.update(req.body, {
      where: {id : id}
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial atualizado"
        });
      } else {
        res.send({
          message: `Não foi possível atulizar o tutorial de id: ${id}, tutorial não encontrado ou body vazio`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Erro interno ao atualizar o tutorial de id: ${id}`
      })
    })
  }

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Tutorial.destroy({
      where: {id : id}
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial atualizado"
        });
      } else {
        res.send({
          message: `Não foi possível atulizar o tutorial de id: ${id}, tutorial não encontrado ou body vazio`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Erro interno ao atualizar o tutorial de id: ${id}`
      })
    })
  }

  exports.deleteAll = (req,res) => {
      Tutorial.destroy({where: {},
    truncate: false})
    .then(nums => {
        res.send({ message: `${nums} Tutoriais deletetados com sucesso`});
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Erro ao deletar todos os tutoriasi"
        });
    });
  };
  
  