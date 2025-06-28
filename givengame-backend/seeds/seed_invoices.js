import { faker } from '@faker-js/faker';

/**
 * @param {import('knex').Knex} knex
 */
export async function seed(knex) {
  const users = await knex('users').select('id')
  const teams = await knex('teams').select('id')

  const invoices = Array.from({ length: 10 }).map(() => {
    const user = faker.helpers.arrayElement(users)
    const team = faker.helpers.arrayElement(teams)
    const total = Number(faker.finance.amount(50, 500, 2))
    const tax = Number((total * 0.2).toFixed(2))

    return {
      user_id: user.id,
      team_id: team.id,
      provider_id: faker.string.uuid(),
      total,
      tax,
      card_country: faker.location.countryCode(),
      billing_state: faker.location.state({ abbreviated: true }),
      billing_zip: faker.location.zipCode(),
      billing_country: faker.location.country(),
      vat_id: `VAT${faker.string.alphanumeric(8).toUpperCase()}`
    }
  })

  await knex('invoices').del()
  return knex('invoices').insert(invoices)
}