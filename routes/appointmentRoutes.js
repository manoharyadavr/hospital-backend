import express from "express";
import { bookAppointment } from "../controllers/appointmentController.js";

const router = express.Router();

// Route to book a new appointment
router.post("/appointments", bookAppointment);

export default router;