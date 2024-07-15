import express from "express";
import serverless from "serverless-http";
import getItems from "./src/controllers/getItems.js";


const app = express();
app.use(express.json());

app.get("/produtos", getItems)

export const handler = serverless(app);