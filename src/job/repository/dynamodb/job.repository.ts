import { BatchWriteItemCommand } from '@aws-sdk/client-dynamodb';
import { marshall } from '@aws-sdk/util-dynamodb';

import { JobRepository, Job } from '../../../domain/job';

import { ddbDocClient } from '../../../infrastructure/database/dynamodb/ddbDocClient';

export class DatabaseJobRepository implements JobRepository {
  async insert(job: Job): Promise<void> {
    const records = [job];
    const newRecords = records.map((record) => {
      return {
        PutRequest: {
          Item: marshall(record, { convertClassInstanceToMap: true }),
        },
      };
    });
    const params = {
      RequestItems: {
        ['job']: newRecords,
      },
    };

    try {
      await ddbDocClient.send(new BatchWriteItemCommand(params));
    } catch (err) {
      console.log('Error', err);
      throw err;
    }
  }
}
