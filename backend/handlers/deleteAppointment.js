const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config({ path: "../.env" });
const { MONGO_URI } = process.env;

const deleteAppointment = async (req, res) => {
  const client = new MongoClient(MONGO_URI);

  try {
    await client.connect();
    const db = client.db("SASC");
    const { email } = req.params;
    const result = await db.collection("appointments").deleteOne({ email });

    if (result.deletedCount > 0) {
      res.status(200).json({
        status: 200,
        message: "Appointment deleted!",
        result,
      });
    } else {
      res
        .status(400)
        .json({ status: 400, message: "Appointment failed to find!", result });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

module.exports = {
  deleteAppointment,
};
