import { database } from "../firebaseConfig.js";
import { ref, push, set } from "firebase/database";

const bookAppointment = async (req, res) => {
  const { name, email, phone, date, time, reason } = req.body;

  try {
    // Save to Firebase Realtime Database
    const newAppointmentRef = push(ref(database, "appointments"));
    await set(newAppointmentRef, {
      name,
      email,
      phone,
      date,
      time,
      reason,
    });

    res.status(201).json({ message: "Appointment booked successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error booking appointment" });
  }
};

export { bookAppointment };