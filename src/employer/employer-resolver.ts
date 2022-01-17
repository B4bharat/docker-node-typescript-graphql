import { Resolver, Query, Arg, Mutation } from 'type-graphql';

import { Employer } from './employer-type';
import { EmployerInput } from './employer-input';
import { createEmployerSamples } from './employer-sample';

@Resolver((of) => Employer)
export class EmployerResolver {
  private readonly employers: Employer[] = createEmployerSamples();

  @Query((returns) => Employer, { nullable: true })
  async employer(@Arg('name') name: string): Promise<Employer | undefined> {
    return await this.employers.find((employer) => employer.name === name);
  }

  @Query((returns) => [Employer], {
    description: 'Get all the employers',
  })
  async allEmployers(): Promise<Employer[]> {
    return await this.employers;
  }

  @Mutation((returns) => Employer)
  async addEmployer(
    @Arg('employerDetail') employerInput: EmployerInput
  ): Promise<Employer> {
    const employerDetail = Object.assign(new Employer(), {
      name: employerInput.name,
      email: employerInput.email,
      mobile: employerInput.mobile,
      mobileVerified: employerInput.mobileVerified,
      emailVerified: employerInput.emailVerified,
      passwordCreated: employerInput.passwordCreated,
      company: employerInput.company,
      address: employerInput.address,
      city: employerInput.city,
      state: employerInput.state,
      zip: employerInput.zip,
    });
    await this.employers.push(employerDetail);
    return employerDetail;
  }
}
