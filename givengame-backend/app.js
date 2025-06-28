const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
// const knex = require('./db/knex')
const { ClerkExpressWithAuth, requireAuth } = require('@clerk/clerk-sdk-node');
const axios = require('axios');
const knex = require('knex')(require('./knexfile.js')['development']);

dotenv.config();

const app = express();
const port = process.env.PORT || 8081;


app.use(cors(), express.json)
app.use(ClerkExpressWithAuth());

app.get('/', (req, res) => res.send('API is up'));

// 🛠️ Save or update a user
app.post('/api/users', async (req, res) => {
  const {
    first_name,
    last_name,
    email,
    photo_url,
    phone,
    method
  } = req.body;

  try {
    const existingUser = await knex('users').where({ email }).first();

    if (existingUser) {
      return res.status(200).json(existingUser);
    }

    const [newUser] = await knex('users')
      .insert({
        first_name,
        last_name,
        email,
        photo_url,
        phone,
        password: method === 'local' ? req.body.password : null,
        auth_provider: method,
      })
      .returning('*');

    res.status(201).json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create user' });
  }
});
  
  // ✅ Fetch user info by email
  app.get('/api/users/:email', requireAuth(), async (req, res) => {
    try {
      const user = await knex('users').where({ email: req.params.email }).first();
      if (!user) return res.status(404).json({ error: 'User not found' });
      res.json(user);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch user' });
    }
  });
  
  // ✏️ Update user info
  app.put('/api/users/:id', requireAuth(), async (req, res) => {
    try {
      await knex('users').where({ id: req.params.id }).update(req.body);
      const updatedUser = await knex('users').where({ id: req.params.id }).first();
      res.json(updatedUser);
    } catch (err) {
      res.status(500).json({ error: 'Failed to update user' });
    }
  });

app.listen(port, (req, res) => console.log(`Express is listening on port ${port}.`));

// const result = await knex('users')
//   .select(
//     'users.id as user_id',
//     'users.first_name',
//     'users.last_name',
//     'teams.id as team_id',
//     'teams.team_name',
//     'teams.sport', // ← new
//     'teams.team_size',
//     'schools.id as school_id',
//     'schools.school_name'
//   )
//   .leftJoin('team_users', 'users.id', 'team_users.user_id')
//   .leftJoin('teams', 'team_users.team_id', 'teams.id')
//   .leftJoin('schools', 'teams.school_id', 'schools.id')
//   .where('users.id', userId);

// 🛠️ Create or update user (for social or local signup)
// app.post('/api/users', async (req, res) => {
//     const { first_name, last_name, email, photo_url, phone, method } = req.body;
  
//     try {
//       const existing = await knex('users').where({ email }).first();
  
//       if (existing) {
//         return res.status(200).json(existing); // Already exists
//       }
  
//       const [newUser] = await knex('users')
//         .insert({
//           first_name,
//           last_name,
//           email,
//           photo_url,
//           phone,
//           password: method === 'local' ? req.body.password : null, // Only store password for local users
//           authy_id: null, // Optional
//         })
//         .returning('*');
  
//       res.status(201).json(newUser);
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ error: 'Error creating user' });
//     }
//   });
  
//   // ✅ Get user profile
//   app.get('/api/users/:email', requireAuth(), async (req, res) => {
//     const email = req.params.email;
  
//     try {
//       const user = await knex('users').where({ email }).first();
//       if (!user) return res.status(404).json({ message: 'User not found' });
  
//       res.json(user);
//     } catch (err) {
//       res.status(500).json({ error: 'Failed to retrieve user' });
//     }
//   });
  
//   // ✏️ Update user profile
//   app.put('/api/users/:id', requireAuth(), async (req, res) => {
//     const userId = req.params.id;
//     const updates = req.body;
  
//     try {
//       await knex('users').where({ id: userId }).update(updates);
//       const updatedUser = await knex('users').where({ id: userId }).first();
//       res.json(updatedUser);
//     } catch (err) {
//       res.status(500).json({ error: 'Failed to update user' });
//     }
//   });
  
//   app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
//   });
