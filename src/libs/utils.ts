import {
  ScanCommand,
  ScanCommandOutput,
  BatchWriteItemCommand,
} from '@aws-sdk/client-dynamodb';
import { marshall } from '@aws-sdk/util-dynamodb';
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

export const addNewRecords = async (tableName: string, records: any[]) => {
  const newRecords = records.map((record) => {
    return {
      PutRequest: {
        Item: marshall(record, { convertClassInstanceToMap: true }),
      },
    };
  });
  const params = {
    RequestItems: {
      [tableName]: newRecords,
    },
  };

  try {
    await ddbDocClient.send(new BatchWriteItemCommand(params));
  } catch (err) {
    console.log('Error', err);
    throw err;
  }
};
