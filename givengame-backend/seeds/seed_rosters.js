import { faker } from '@faker-js/faker';

/**
 * @param {import('knex').Knex} knex
 */
export async function seed(knex) {
  await knex('rosters').del();

  // Optional: adjust the number of fundraisers to match your actual seeded data
  const fundraisers = await knex('fundraiser').select('id');

  if (fundraisers.length === 0) {
    console.warn('⚠️ No fundraisers found, skipping roster seed.');
    return;
  }


  const rosters = Array.from({ length: 20 }).map(() => ({
    number: faker.number.int({ min: 1, max: 99 }),
    firstname: faker.person.firstName(),
    lastname: faker.person.lastName(),
    fundraiser_id: faker.helpers.arrayElement(fundraisers).id,
    raised: faker.finance.amount({ min: 0, max: 5000, dec: 2 }),
    active: faker.datatype.boolean() ? 1 : 0
  }));

  await knex('rosters').insert(rosters);
}
