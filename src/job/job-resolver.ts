import { Resolver, Query, Arg, Mutation } from 'type-graphql';

import { Job } from './job-type';
import { JobInput } from './job-input';
import { createJobSamples } from './job-sample';

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
  async addJob(@Arg('jobDetail') jobInput: JobInput): Promise<Job> {
    const jobDetail = Object.assign(new Job(), {
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
    return jobDetail;
  }
}
