import { Router } from "express";

const routes = Router();

routes.get("/", (req, res) => {
    return res.send(`novamente um teste`)
})

export default routes