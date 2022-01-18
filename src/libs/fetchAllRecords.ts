import { ScanCommand, ScanCommandOutput } from '@aws-sdk/client-dynamodb';
import { ddbDocClient } from './ddbDocClient';

export const fetchAllRecords = async (tableName: string): Promise<any> => {
  const params = {
    TableName: tableName,
  };

  try {
    let finalResut: any[] = [];
    let data: ScanCommandOutput;
    do {
      data = await ddbDocClient.send(new ScanCommand(params));
      finalResut = finalResut.concat(data.Items);
    } while (typeof data.LastEvaluatedKey != 'undefined');
    return finalResut;
  } catch (err) {
    console.log('Error', err);
    throw err;
  }
};
