const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config({ path: "../.env" });
const { MONGO_URI } = process.env;

const getAppointment = async (req, res) => {
  const client = new MongoClient(MONGO_URI);

  try {
    await client.connect();
    const db = client.db("SASC");
    const { email } = req.body;

    const result = await db.collection("appointments").findOne({ email });

    if (result) {
      res.status(200).json({
        status: 200,
        message: "Appointment received!",
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
  getAppointment,
};
