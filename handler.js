import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand, ScanCommand } from "@aws-sdk/lib-dynamodb";
import express from "express";
import serverless from "serverless-http";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

const app = express();
app.use(express.json());

app.get("/produtos", async (req, res) => {

    var params = {
        TableName : "cosmeticos-co-produtos"
    };
    try {
        const data = await docClient.send(new ScanCommand(params));
        return res.json(data.Items);
      } catch (error) {
        return res.status(500).json({ error: "Não foi possível conectar com o banco de dados" });
      }
})

app.get("/produtos/:produtoId", async (req, res) => {

  var params = {
      TableName : "cosmeticos-co-produtos",
      Key: {
        produto_id: req.params.produtoId,
      },
  };

  try {
      const data = await docClient.send(new ScanCommand(params));
      if (data) {
        return res.json(data.Items);
      } else {
        return res
          .status(404)
          .json({ error: `Não foi possível encontrar o produto com o ID ${req.params.produtoId}` });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Não foi possível conectar com o banco de dados" });
    }
})
export const handler = serverless(app);