import express from "express";
import routes from "./router";
import "./database";
class App{
    constructor(){
        this.server = express();
        
        this.middleware();
        this.router();
    }

    middleware(){
        this.server.use(express.json());
    }

    router(){
        this.server.use(routes);
    }
}

export default new App().server;
