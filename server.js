// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Body parser to handle form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (HTML, CSS, etc.)
app.use(express.static('public'));

// Handle form submission
app.post('/submit', (req, res) => {
  const { society, fullname, electricityBill, city, pincode, whatsapp } = req.body;

  // Log form data to console (in real-world, you'd save this to a database)
  console.log({
    society,
    fullname,
    electricityBill,
    city,
    pincode,
    whatsapp
  });

  // Respond to the client
  res.send(`Thank you, ${fullname}! We have received your information for ${society} in ${city}.`);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${3000}`);
});
