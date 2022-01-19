import { injectable, inject } from 'tsyringe';

import { JobRepository, Job } from '../../domain/job';

// inject on constructor
@injectable()
export class AddJobUseCase {
  constructor(
    @inject('DatabaseJobRepository')
    private jobRepository: JobRepository
  ) {
    this.jobRepository = jobRepository;
  }

  async execute(job: Job): Promise<void> {
    return this.jobRepository.insert(job);
  }
}
