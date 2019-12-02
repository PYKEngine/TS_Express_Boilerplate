import mongoose from "mongoose"

export default async function connectToDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/PYKEngine-db", {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
    console.log("Interface 2037 Ready for inquery!");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}