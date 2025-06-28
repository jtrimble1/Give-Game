// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> } 
//  */
const { faker } = require('@faker-js/faker');

// exports.seed = async function(knex) {
//   // 1. Clear all tables (respecting foreign key order)
//   await knex('team_users').del();
//   await knex('teams').del();
//   await knex('users').del();
//   await knex('schools').del();

//   // 3 example schools
//   const schoolNames = ['North High', 'East Academy', 'West Prep'];
//   const schoolIds = await knex('schools')
//     .insert(schoolNames.map(name => ({ school_name: name })))
//     .returning('id');

//   // Define some sports
//   const sports = ['Soccer', 'Basketball', 'Volleyball', 'Tennis', 'Baseball'];

//   // 5 teams with random sports
//   const teamData = Array.from({ length: 5 }, () => ({
//     team_name: faker.company.name(),
//     team_size: faker.number.int({ min: 3, max: 8 }),
//     sport: faker.helpers.arrayElement(sports), // ← assign sport
//     school_id: faker.helpers.arrayElement(schoolIds).id
//   }));

//   const teamIds = await knex('teams')
//     .insert(teamData)
//     .returning('id');

//   // Create 10 random users
//   const userData = Array.from({ length: 10 }, () => ({
//     first_name: faker.person.firstName(),
//     last_name: faker.person.lastName(),
//     email: faker.internet.email(),
//     password: faker.internet.password()
//   }));

//   const userIds = await knex('users')
//     .insert(userData)
//     .returning('id');

//   // Assign users to 1–3 random teams (no duplicates)
//   const teamUsers = [];
//   for (const user of userIds) {
//     const teamsForUser = faker.helpers.arrayElements(teamIds, faker.number.int({ min: 1, max: 3 }));
//     for (const team of teamsForUser) {
//       teamUsers.push({
//         user_id: user.id,
//         team_id: team.id
//       });
//     }
//   }

//   // Remove potential duplicates before inserting
//   const uniqueTeamUsers = teamUsers.filter(
//     (v, i, a) => a.findIndex(t => t.user_id === t.user_id && t.team_id === t.team_id) === i
//   );

//   await knex('team_users').insert(uniqueTeamUsers);
// };

exports.seed = async function (knex) {
  // Clear tables in FK-safe order
  await knex('rosters').del();
  await knex('invoices').del();
  await knex('team_users').del();
  await knex('teams').del();
  await knex('users').del();
  await knex('schools').del();

  // Seed schools
  const schoolNames = ['North High', 'East Academy', 'West Prep'];
  const schoolIds = await knex('schools')
    .insert(schoolNames.map(name => ({ school_name: name })))
    .returning('id');

  // Seed teams
  const sports = ['Soccer', 'Basketball', 'Volleyball', 'Tennis', 'Baseball'];
  const teamData = Array.from({ length: 5 }, () => ({
    team_name: faker.company.name(),
    team_size: faker.number.int({ min: 3, max: 8 }),
    sport: faker.helpers.arrayElement(sports),
    school_id: faker.helpers.arrayElement(schoolIds).id
  }));
  const teamIds = await knex('teams').insert(teamData).returning('id');

  // Seed users
  const userData = Array.from({ length: 10 }, () => ({
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password()
  }));
  const userIds = await knex('users').insert(userData).returning('id');

  // Assign users to teams (team_users)
  const teamUsers = [];
  for (const user of userIds) {
    const teamsForUser = faker.helpers.arrayElements(teamIds, faker.number.int({ min: 1, max: 3 }));
    for (const team of teamsForUser) {
      teamUsers.push({ user_id: user.id, team_id: team.id });
    }
  }

  // Avoid duplicates
  const uniqueTeamUsers = Array.from(
    new Map(teamUsers.map(t => [`${t.user_id}_${t.team_id}`, t])).values()
  );
  await knex('team_users').insert(uniqueTeamUsers)
  
};