import { ObjectType, Field } from 'type-graphql';

@ObjectType({ description: 'Object representing job details for client' })
export class Job {
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
  description: string;

  @Field()
  openPositions: number;

  @Field()
  minAge: number;

  @Field()
  maxAge: number;

  @Field()
  menAccomodation: boolean;

  @Field()
  womenAccomodation: boolean;
}
