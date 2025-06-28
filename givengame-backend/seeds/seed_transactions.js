import { faker } from '@faker-js/faker';

/**
 * @param {import('knex').Knex} knex
 */
export async function seed(knex) {
  await knex('transactions').del();

  const transactions = Array.from({ length: 15 }).map(() => {
    const total = Number(faker.finance.amount(10, 500, 2));
    const towardsSupport = Number((total * 0.1).toFixed(2));
    const towardsFundraiser = Number((total - towardsSupport).toFixed(2));

    return {
      transaction_id: faker.number.bigInt(),
      donation_to_id: faker.number.int({ min: 1, max: 10 }),
      donation_to_name: faker.person.fullName(),
      donation_amount: total,
      towards_fundraiser: towardsFundraiser,
      towards_support: towardsSupport,
      transaction_complete: faker.datatype.boolean(),
      confirmation_id: faker.string.uuid(),
      status: faker.helpers.arrayElement(['pending', 'completed', 'failed'])
    };
  });

  await knex('transactions').insert(transactions);
}
