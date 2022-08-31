import { DynamoDBClient, GetItemCommand } from "@aws-sdk/client-dynamodb";
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";

const ddbClient = new DynamoDBClient({
  region: "ap-south-1",
  credentials: {
    accessKeyId: "",
    secretAccessKey: "",
  },
});

const getItem = async () => {
  const params = {
    TableName: "notes",
    Key: marshall({ notesId: "100" }),
  };

  try {
    const data = await ddbClient.send(new GetItemCommand(params));
    console.log(unmarshall(data.Item));
  } catch (err) {
    console.log(err);
  }
};

getItem();
