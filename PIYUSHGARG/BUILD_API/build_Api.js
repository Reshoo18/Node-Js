const express = require('express');
const app = express();
const users = require('./MOCK_Data.json');
const PORT = 9000;

app.use(express.json());

// Serve HTML list
app.get("/users", (req, res) => {
  const html = `
    <ul>
      ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
  `;
  res.send(html);
});

// Get all users
app.get('/api/users', (req, res) => {
  return res.json(users);
});

// Routes for single user
app.route("/api/users/:id")
  .get((req, res) => {
    const id = req.params.id;
    const user = users.find((user) => user.id === id);
    if (!user) return res.status(404).json({ error: "User not found" });
    return res.json(user);
  })
  .patch((req, res) => {
    // edit user with id
    res.json({ status: 'pending' });
  })
  .delete((req, res) => {
    res.json({ status: 'pending' });
  });

// ✅ Correct POST route (create user)
app.post("/api/users", (req, res) => {
  return res.json({ status: 'pending' });
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
