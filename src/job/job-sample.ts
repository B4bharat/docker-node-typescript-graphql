import { Job } from './delivery/graphQL/job.presenter';
import { fetchAllRecords } from '../libs/utils';
import { unmarshall } from '@aws-sdk/util-dynamodb';

let jobCollection: Job[] = [];
(async () => {
  try {
    const jobs = await fetchAllRecords('job');
    jobCollection = jobs.map((job: { [key: string]: any }) => unmarshall(job));
  } catch (e) {
    // Deal with the fact the chain failed
    console.error('dynamodb error', e);
  }
})();

export function createJobSamples() {
  return jobCollection.map((job) => createJob(job));
}

function createJob(jobData: Partial<Job>) {
  return Object.assign(new Job(), jobData);
}
