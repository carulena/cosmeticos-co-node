import express from "express";
import serverless from "serverless-http";
import rotaProduto from "./src/routes/produtos.js";
import getItemById from "./src/controllers/getItemById.js";
import getItemByText from "./src/controllers/getItemByText.js";


const app = express();
app.use(express.json());

app.use("/produtos", rotaProduto)

export const handler = serverless(app);