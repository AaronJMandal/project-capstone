const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config({ path: "../.env" });
const { MONGO_URI } = process.env;

const modAppointment = async (req, res) => {
  const client = new MongoClient(MONGO_URI);

  try {
    await client.connect();
    const db = client.db("SASC");

    const { email, appointmentDate, reason } = req.body;

    const check = await db.collection("appointments").findOne({ email });

    if (!check) {
      res
        .status(400)
        .json({ status: 400, error: "Appointment does not exist!", check });
    }

    const update = {
      $set: {
        appointmentDate,
        reason,
        updatedAt: new Date(),
      },
    };

    const result = await db
      .collection("appointments")
      .updateOne({ email }, update);

    if (result) {
      res.status(200).json({
        status: 200,
        message: "Appointment edited successfully!",
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
  modAppointment,
};
