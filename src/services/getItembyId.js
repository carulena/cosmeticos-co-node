import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { DynamoDBDocumentClient, GetCommand, ScanCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);
export default async function getItembyId(id){
    var params = {
        TableName : "cosmeticos-co-produtos",
        Key: {
            produto_id: Number(id)
        }
    };
    
    console.log(params)
    return await docClient.send(new GetCommand(params));

}