const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://Sagar%401591996%40sagarcluster1.tidtpyd.mongodb.net/";

const MongotoURI = () => {
  mongoose.connect(mongoURI, () => {
    console.log("MongoDB connected successfully!!");
  });
};

module.exports = MongotoURI;
