module.exports = {
    dialect: 'postgres',
    host: "localhost",
    username: "postgres",
    password: "dockerFluyn",
    database: "fluynDB",
    define: {
        timestamps: true,
        underscored:true,
        underscoredAll:true
    }
}