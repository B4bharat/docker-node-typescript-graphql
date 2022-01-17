import { Employer } from './employer-type';
import { InputType, Field } from 'type-graphql';

@InputType()
export class EmployerInput implements Partial<Employer> {
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
