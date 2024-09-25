const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config({ path: "../.env" });
const { MONGO_URI } = process.env;

const submitAppointment = async (req, res) => {
  const client = new MongoClient(MONGO_URI);

  try {
    await client.connect();
    const db = client.db("SASC");

    const { email, appointmentDate, reason } = req.body;

    const appointment = {
      email,
      appointmentDate,
      reason,
      createdAt: new Date(),
    };

    const result = await db.collection("appointments").insertOne(appointment);

    if (result) {
      res.status(200).json({
        status: 200,
        message: "Appointment sent successfully!",
        result,
      });
    } else {
      res
        .status(400)
        .json({ status: 400, message: "Appointment submit failed!", result });
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
  submitAppointment,
};
