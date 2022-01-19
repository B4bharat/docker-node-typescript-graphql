export interface Job {
  id: string;
  title: string;
  wfh: boolean;
  salary: number;
  location: string;
  company: string;
  description: string;
  openPositions: number;
  minAge: number;
  maxAge: number;
  menAccomodation: boolean;
  womenAccomodation: boolean;
}

export interface JobUseCase {
  getJob(id: string): Promise<Job>;
  getJobs(): Promise<Job[]>;
  addJob(job: Job): Promise<Job>;
  updateJob(job: Job): Promise<Job>;
  deleteJob(id: string): Promise<Job>;
}

export interface JobRepository {
  insert(job: Job): Promise<void>;
  // findAll(): Promise<Job[]>;
  // findById(id: number): Promise<Job>;
  // updateContent(id: number, isDone: boolean): Promise<void>;
  // deleteById(id: number): Promise<void>;
}
