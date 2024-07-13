import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand, ScanCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);


export const getAllProductsHandler = async (event) => {

    var params = {
        TableName : "cosmeticos-co-produtos"
    };

    try {
        const data = await docClient.send(new ScanCommand(params));
        var items = data.Items;
    } catch (err) {
        console.log("Error", err);
    }

    const response = {
        statusCode: 200,
        body: JSON.stringify(items)
    };
    console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
    return response;
}