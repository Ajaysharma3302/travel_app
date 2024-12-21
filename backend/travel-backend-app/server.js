const express = require("express")

const app = express();
const dotenv = require("dotenv").config();
const cors = require('cors');
const connection = require("./config/db")

app.use(cors());
app.use(express.json())

const PORT = process.env.PORT || 4001;

app.get('/trips', (req, res) => {
    res.json([
      { id: 1, name: 'Trip to Paris', date: '2024-12-25', price: 1000, availableSlots: 5 },
      { id: 2, name: 'Trip to New York', date: '2024-12-30', price: 800, availableSlots: 3 },
    ]);
  });
app.get('/', (req, res) => res.send('Welcome to Travel API'));


app.listen(PORT, async () => {
  
    try {
      
      await connection;
  
      console.log(`server is running on ${PORT} & connected to db`);
  
    } catch (error) {
  
        console.error("Error connecting to DB:", error.message || error);
    }
  });
                        