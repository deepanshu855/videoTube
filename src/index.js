const app = require("./app.js");
require("dotenv").config();
const connectDB = require("./db/index.js");

// winston and morgan logger;
const logger = require("./logger.js");
const morgan = require("morgan");
const morganFormat = ":method :url :status :response-time ms";

const PORT = process.env.PORT || 3001;

app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on PORT: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`MongoDB connection error`, err);
  });
