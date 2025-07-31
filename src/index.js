const app = require("./app.js");
require("dotenv").config();
const connectDB = require("./db/index.js");

const PORT = process.env.PORT || 3001;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on PORT: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`MongoDB connection error`, err);
  });
