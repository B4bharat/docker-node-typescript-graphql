import { Employer } from './employer-type';

export function createEmployerSamples() {
  return [
    createEmployer({
      name: 'Employer 1',
      email: 'employer1@company1.com',
      mobile: '+91-1234567890',
      mobileVerified: true,
      emailVerified: true,
      passwordCreated: true,
      company: 'Company 1',
      address: 'Address 1',
      city: 'City 1',
      state: 'State 1',
      zip: 'Zip 1',
    }),
    createEmployer({
      name: 'Employer 2',
      email: 'employer2@company2.com',
      mobile: '+91-1234567890',
      mobileVerified: true,
      emailVerified: true,
      passwordCreated: true,
      company: 'Company 2',
      address: 'Address 2',
      city: 'City 2',
      state: 'State 2',
      zip: 'Zip 2',
    }),
    createEmployer({
      name: 'Employer 3',
      email: 'employer3@company3.com',
      mobile: '+91-1234567890',
      mobileVerified: true,
      emailVerified: true,
      passwordCreated: true,
      company: 'Company 3',
      address: 'Address 3',
      city: 'City 3',
      state: 'State 3',
      zip: 'Zip 3',
    }),
  ];
}

function createEmployer(employerData: Partial<Employer>) {
  return Object.assign(new Employer(), employerData);
}
