import express from 'express';
import Appointment from '../models/Appointment.js';
import Membership from '../models/Membership.js';

const router = express.Router();

// ==========================================
// APPOINTMENTS CONTROLLERS
// ==========================================

// GET /api/appointments - Fetch all appointments
router.get('/appointments', async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch appointments' });
  }
});

// POST /api/appointments - Create a new appointment
router.post('/appointments', async (req, res) => {
  try {
    const { clientName, phone, service, date, time } = req.body;
    if (!clientName || !phone || !service || !date || !time) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    
    const newAppointment = new Appointment({
      clientName,
      phone,
      service,
      date,
      time,
      status: 'pending'
    });
    
    await newAppointment.save();
    res.status(201).json({ message: 'Appointment created successfully', appointment: newAppointment });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save appointment request' });
  }
});

// PUT /api/appointments/:id - Update appointment status
router.put('/appointments/:id', async (req, res) => {
  try {
    const { status } = req.body;
    if (!['pending', 'confirmed', 'cancelled'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status type' });
    }

    const updatedAppointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!updatedAppointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }
    res.json({ message: 'Appointment status updated successfully', appointment: updatedAppointment });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update appointment status' });
  }
});

// ==========================================
// MEMBERSHIP CONTROLLERS
// ==========================================

// GET /api/memberships - Fetch and query/search memberships
router.get('/memberships', async (req, res) => {
  try {
    const { search } = req.query;
    let query = {};
    if (search) {
      query = {
        $or: [
          { clientName: { $regex: search, $options: 'i' } },
          { phone: { $regex: search, $options: 'i' } }
        ]
      };
    }
    const memberships = await Membership.find(query).sort({ createdAt: -1 });
    res.json(memberships);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch memberships registry' });
  }
});

// POST /api/memberships - Register a walk-in member
router.post('/memberships', async (req, res) => {
  try {
    const { clientName, phone, registrationDate } = req.body;
    if (!clientName || !phone || !registrationDate) {
      return res.status(400).json({ error: 'Name, Phone, and Registration date are required' });
    }

    const newMembership = new Membership({ clientName, phone, registrationDate });
    await newMembership.save();
    res.status(201).json({ message: 'Membership registered successfully', membership: newMembership });
  } catch (error) {
    res.status(500).json({ error: 'Failed to register membership account' });
  }
});

// DELETE /api/memberships/:id - Delete a member
router.delete('/memberships/:id', async (req, res) => {
  try {
    const deletedMember = await Membership.findByIdAndDelete(req.params.id);
    if (!deletedMember) {
      return res.status(404).json({ error: 'Member not found' });
    }
    res.json({ message: 'Member deleted successfully', member: deletedMember });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete member' });
  }
});

export default router;
