import mongoose from "mongoose";

const connect = mongoose.connect(
  "mongodb+srv://bikashi:bikash@cluster0.4f5lmam.mongodb.net/rahul",
  { useNewUrlParser: true, useUnifiedTopology: true } // Recommended options
);

connect
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure unique email addresses
  },
});

const User = mongoose.model("User", userSchema);



export default User;
