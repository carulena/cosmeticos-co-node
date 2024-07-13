import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand, ScanCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);


export default async function getProducts (){
    const command = new ScanCommand({
        TableName: "cosmeticos-co-produtos",
    })
    const response = await docClient.send(command);
    for (const bird of response.Items) {
        console.log(bird);
      }
    const products = '[{name: "a", id: 0}]'
    return JSON.stringify(response.Items)
}