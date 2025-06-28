import { faker } from '@faker-js/faker';

/**
 * @param {import('knex').Knex} knex
 */
export async function seed(knex) {
  await knex('notifications').del();

  const users = await knex('users').select('id');

  if (users.length === 0) {
    console.warn('⚠️ No users found, skipping notifications seed.');
    return;
  }

  const notifications = Array.from({ length: 20 }).map(() => ({
    user_id: faker.helpers.arrayElement(users).id,
    created_by: faker.person.fullName(),
    icon: faker.system.mimeType(),
    body: faker.lorem.sentence(),
    action_text: faker.lorem.words(2),
    action_url: faker.internet.url(),
    read: faker.datatype.boolean() ? 1 : 0
  }));

  await knex('notifications').insert(notifications);
}
