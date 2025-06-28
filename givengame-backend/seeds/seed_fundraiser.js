import { faker } from '@faker-js/faker';

/**
 * @param {import('knex').Knex} knex
 */
export async function seed(knex) {
  await knex('fundraiser').del();

  const fundraisers = Array.from({ length: 10 }).map(() => ({
    fund_name: faker.company.name(),
    picture: faker.image.urlPicsumPhotos(),
    location: faker.location.state({ abbreviated: true }),
    type: faker.helpers.arrayElement(['Education', 'Medical', 'Community', 'Environment']),
    story: faker.lorem.paragraphs(2).slice(0, 255),
    catchphrase: faker.company.catchPhrase().slice(0, 255),
    funding_need: faker.finance.amount(1000, 100000, 2),
    funding_current: faker.finance.amount(0, 99999, 2)
  }));

  await knex('fundraiser').insert(fundraisers);
}