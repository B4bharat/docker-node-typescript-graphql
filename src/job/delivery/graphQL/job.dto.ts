import { Job } from './job.presenter';
import { InputType, Field } from 'type-graphql';

@InputType()
export class AddJobDto implements Partial<Job> {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field()
  wfh: boolean;

  @Field()
  salary: number;

  @Field()
  location: string;

  @Field()
  company: string;

  @Field()
  description?: string;

  @Field()
  openPositions?: number;

  @Field()
  minAge: number;

  @Field()
  maxAge: number;

  @Field()
  menAccomodation?: boolean;

  @Field()
  womenAccomodation?: boolean;
}

@InputType()
export class UpdateJobDto implements Partial<Job> {
  @Field()
  id: string;

  @Field()
  title?: string;

  @Field()
  wfh?: boolean;

  @Field()
  salary?: number;

  @Field()
  location?: string;

  @Field()
  company?: string;

  @Field()
  description?: string;

  @Field()
  openPositions?: number;

  @Field()
  minAge?: number;

  @Field()
  maxAge?: number;

  @Field()
  menAccomodation?: boolean;

  @Field()
  womenAccomodation?: boolean;
}
