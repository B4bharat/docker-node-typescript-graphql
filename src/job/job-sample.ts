import { Job } from './job-type';

export function createJobSamples() {
  return [
    createJob({
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
