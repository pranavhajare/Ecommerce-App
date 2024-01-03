import mongoose from "mongoose";

export const Connection = async (username,password) => {
  const URL = `mongodb+srv://${username}:${password}@ecommerce-web.fe4fj6z.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })
    console.log("database connected succesfully");
  } catch (error) {
    console.log("error while connecting with the database", error.message);
  }
};

export default Connection;
