import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

import logger from "./logger.js";
import morgan from "morgan";

dotenv.config();

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
    console.log("MongoDB connection error", err);
  });
