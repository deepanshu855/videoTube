const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export default asyncHandler;

// requestHandler is your async route function.
// It runs it and wraps it in a Promise.
// If it fails (throws an error), it sends that error to next(err), which Express uses to go to the error handler.

/* const asyncHandler = require("./asyncHandler");

app.get("/users", asyncHandler(async (req, res) => {
  const users = await getUsers(); // error will be caught automatically
  res.json(users);
})); */
