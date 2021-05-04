module.exports = {
    HOST: 'localhost',
    USER: "root",
    PASSWORD: "4525!Ma630",
    DB: "teste_bd",
    dialect:"mysql",
    pool: {
        max: 5,
        min: 0,
        acquire:30000,
        idle: 10000
    }
};