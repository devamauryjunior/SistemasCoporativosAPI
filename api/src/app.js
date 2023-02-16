import express from "express";

import routes from "./routes.js";

class app {
  constructor() {
    this.server = express();
    this.server.use(express.json());
    this.routes();
  }
  routes() {
    this.server.use(routes);
  }
}

export default new app().server;
