const mongoose = require("mongoose");
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");

const commentSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    videos: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video",
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

commentSchema.plugin(aggregatePaginate);
module.exports = mongoose.model("Comment", commentSchema);
