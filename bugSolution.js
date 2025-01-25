const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(next); // Pass error to the error handling middleware
});

// Centralized error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the full error stack for debugging
  res.status(500).json({ error: 'Something went wrong' }); // Send a more informative response
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    const random = Math.random();
    if (random < 0.5) {
      resolve();
    } else {
      reject(new Error('Something went wrong'));
    }
  });
}