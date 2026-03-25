const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Route for form submission
app.post('/register', (req, res) => {
    const { name, email, password, age, gender } = req.body;

    if (age < 18) {
        return res.send("❌ Age must be 18+");
    }

    console.log("User Data:", req.body);

    res.send(`
        <h2>✅ Registration Successful</h2>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <a href="/">Go Back</a>
    `);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});