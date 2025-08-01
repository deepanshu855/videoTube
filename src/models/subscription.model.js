// id string pk
//   channel ObjectId users
//   subscriber ObjectId users
//   updatedAt Date
//   createdAt Date

const mongoose = require("mongoose");

const subscriptionSchema = mongoose.Schema(
  {
    channel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    subscriber: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Subscription", subscriptionSchema);
