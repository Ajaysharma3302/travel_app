const mongoose = require("mongoose")
const dotenv = require("dotenv").config();

const connection = mongoose.connect(process.env.MONGO_URL)

module.exports = connection

// if (!process.env.MONGO_URL) {
//     console.error("Error: MONGO_URL is not defined in .env");
//     process.exit(1); // Exit the app if URI is missing
// }

// if (!process.env.MONGO_URL) {
//     console.error("Error: MONGO_URL is not defined in .env");
//     process.exit(1); // Exit the app if URI is missing
// }

// // Create a function to connect to the database
// const connectToDB = async () => {
//     try {
//         // Ensure process.env.MONGO_URL contains the URI
//         console.log("Connecting to MongoDB:", process.env.MONGO_URL);

//         await mongoose.connect(process.env.MONGO_URL, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });

//         console.log("Connected to MongoDB");
//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error.message || error);
//         process.exit(1); // Exit the app if there's a connection error
//     }
// };

// module.exports = connectToDB; // Export the connect function