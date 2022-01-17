import { Resolver, Query, Arg } from 'type-graphql';

import { Job } from './job-type';
// import { JobInput } from './job-input';
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
}
