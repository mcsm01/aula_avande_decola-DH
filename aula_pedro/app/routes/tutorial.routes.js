module.exports = app => {
    const tutorials = require ("../controllers/tutorial.controller");

    var router = require("express").Router();

    //cria novo tutorial
    router.post("/", tutorials.create);
    //retornar os tutoriais
    router.get("/", tutorials.findAll);
    //retorna os tutoriais publicados
    router.get("/published", tutorials.findAllPublished);
    //Retorna um tutorial com id específico
    router.get("/:id", tutorials.findOne);
     //Atualiza tutorial
    router.put("/:id", tutorials.update);
    //deleta tutorial
    router.delete("/:id", tutorials.delete);
    //deleta  todos os tutoriais
    router.delete("/", tutorials.deleteAll);

    app.use('/api/tutorials', router)
}