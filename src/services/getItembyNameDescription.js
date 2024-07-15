import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { DynamoDBDocumentClient, GetCommand, ScanCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);
export default async function getItembyNameDescription(text){
    var params = {
        TableName : "cosmeticos-co-produtos",
        KeyConditionExpression: 
            `nome_produto LIKE %${text}% OR descricao_produto LIKE %${text}%`
    };

    return await docClient.send(new ScanCommand(params));

}