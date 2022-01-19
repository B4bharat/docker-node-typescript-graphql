import { Resolver, Query, Arg, Mutation } from 'type-graphql';

import { Job } from './job.presenter';
import { AddJobDto } from './job.dto';
import { createJobSamples } from '../../job-sample';

import { addNewRecords } from '../../../libs/utils';

@Resolver((of) => Job)
export class JobResolver {
  private readonly jobs: Job[] = createJobSamples();

  @Query((returns) => Job, { nullable: true })
  async job(@Arg('title') title: string): Promise<Job | undefined> {
    return await this.jobs.find((job) => job.title === title);
  }

  @Query((returns) => [Job], {
    description: 'Get all the jobs',
  })
  async allJobs(): Promise<Job[]> {
    return await this.jobs;
  }

  @Mutation((returns) => Job)
  async addJob(@Arg('jobDetail') jobInput: AddJobDto): Promise<Job> {
    const jobDetail = Object.assign(new Job(), {
      id: jobInput.id,
      description: jobInput.description,
      title: jobInput.title,
      wfh: jobInput.wfh,
      salary: jobInput.salary,
      location: jobInput.location,
      company: jobInput.company,
      openPositions: jobInput.openPositions,
      minAge: jobInput.minAge,
      maxAge: jobInput.maxAge,
      menAccomodation: jobInput.menAccomodation,
      womenAccomodation: jobInput.womenAccomodation,
    });
    await this.jobs.push(jobDetail);

    await addNewRecords('job', [jobDetail]);
    return jobDetail;
  }
}
