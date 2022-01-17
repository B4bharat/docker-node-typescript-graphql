import { Job } from './job-type';
import { InputType, Field } from 'type-graphql';

@InputType()
export class JobInput implements Partial<Job> {
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
