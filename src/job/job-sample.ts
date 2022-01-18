import { Job } from './job-type';
import { fetchAllRecords } from '../libs/fetchAllRecords';
import { marshall, unmarshall } from '@aws-sdk/util-dynamodb';

(async () => {
  try {
    const jobs = await fetchAllRecords('job');
    // from DynamoDB JSON
    const unmarshalled = jobs.map((job: { [key: string]: any }) =>
      unmarshall(job)
    );
    console.log('jobs', unmarshalled);
  } catch (e) {
    // Deal with the fact the chain failed
    console.error('dynamodb error', e);
  }
})();

export function createJobSamples() {
  return [
    createJob({
      id: '1',
      description: 'Desc 1',
      title: 'Job 1',
      wfh: true,
      salary: 30000,
      location: 'Location 1',
      company: 'Company 1',
      openPositions: 10,
      minAge: 18,
      maxAge: 30,
      menAccomodation: true,
      womenAccomodation: true,
    }),
    createJob({
      id: '2',
      description: 'Desc 2',
      title: 'Job 2',
      wfh: false,
      salary: 40000,
      location: 'Location 2',
      company: 'Company 2',
      openPositions: 20,
      minAge: 18,
      maxAge: 30,
      menAccomodation: true,
      womenAccomodation: true,
    }),
    createJob({
      id: '3',
      description: 'Desc 3',
      title: 'Job 3',
      wfh: true,
      salary: 50000,
      location: 'Location 3',
      company: 'Company 3',
      openPositions: 30,
      minAge: 18,
      maxAge: 30,
      menAccomodation: true,
      womenAccomodation: true,
    }),
  ];
}

function createJob(jobData: Partial<Job>) {
  return Object.assign(new Job(), jobData);
}
