import { ObjectType, Field } from 'type-graphql';

@ObjectType({ description: 'Object representing job description' })
export class Job {
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
