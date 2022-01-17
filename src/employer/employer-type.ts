import { ObjectType, Field } from 'type-graphql';

@ObjectType({ description: 'Object representing employer description' })
export class Employer {
  @Field()
  name?: string;

  @Field()
  email?: string;

  @Field()
  mobile?: string;

  @Field()
  mobileVerified?: boolean;

  @Field()
  emailVerified?: boolean;

  @Field()
  passwordCreated?: boolean;

  @Field()
  company?: string;

  @Field()
  address?: string;

  @Field()
  city?: string;

  @Field()
  state?: string;

  @Field()
  zip?: string;
}
