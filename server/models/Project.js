const mongoose = require("mongoose");

const projectSchema = mongoose.Schema(
  {
    clientId: {
      type: mongoose.Schema.Types.ObjectId, // collection id
      ref: "Client", // reference collection
    },
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      enum: ["Not Started", "In Progress", "Completed"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Project", projectSchema);
