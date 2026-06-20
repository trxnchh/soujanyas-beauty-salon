import express from 'express';
import mongoose from 'mongoose';
import Appointment from '../models/Appointment.js';
import Membership from '../models/Membership.js';

const router = express.Router();

// ==========================================
// OFFLINE IN-MEMORY STATE STORAGE
// ==========================================
let offlineAppointments = [
  {
    _id: "demo-1",
    clientName: "Ananya Deshpande",
    phone: "+91 98452 10234",
    service: "Pearl Clean-Up",
    date: "2026-06-21",
    time: "11:30",
    status: "pending",
    createdAt: new Date(Date.now() - 1000 * 60 * 30)
  },
  {
    _id: "demo-2",
    clientName: "Priyanka Kulkarni",
    phone: "+91 94481 92834",
    service: "Professional Bridal Make-Up Mastery",
    date: "2026-06-25",
    time: "10:00",
    status: "confirmed",
    createdAt: new Date(Date.now() - 1000 * 60 * 60)
  },
  {
    _id: "demo-3",
    clientName: "Sneha Patil",
    phone: "+91 93431 62030",
    service: "Keratin (Medium)",
    date: "2026-06-22",
    time: "15:00",
    status: "cancelled",
    createdAt: new Date(Date.now() - 1000 * 60 * 120)
  }
];

let offlineMemberships = [
  {
    _id: "m-1",
    clientName: "Rajesh Patil",
    phone: "+91 93431 62030",
    registrationDate: "2026-06-19",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24)
  },
  {
    _id: "m-2",
    clientName: "Sunita Deshpande",
    phone: "+91 98452 10234",
    registrationDate: "2026-06-20",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 12)
  }
];

// ==========================================
// APPOINTMENTS CONTROLLERS
// ==========================================

// GET /api/appointments - Fetch all appointments
router.get('/appointments', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const appointments = await Appointment.find().sort({ createdAt: -1 });
      return res.json(appointments);
    } else {
      const sorted = [...offlineAppointments].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      return res.json(sorted);
    }
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
    
    const appointmentData = { clientName, phone, service, date, time, status: 'pending', createdAt: new Date() };

    if (mongoose.connection.readyState === 1) {
      const newAppointment = new Appointment(appointmentData);
      await newAppointment.save();
      res.status(201).json({ message: 'Appointment created successfully', appointment: newAppointment });
    } else {
      const newAppointment = { _id: `mock-app-${Date.now()}`, ...appointmentData };
      offlineAppointments.unshift(newAppointment);
      res.status(201).json({ message: 'Appointment created successfully (Offline Fallback)', appointment: newAppointment });
    }
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

    if (mongoose.connection.readyState === 1) {
      const updatedAppointment = await Appointment.findByIdAndUpdate(
        req.params.id,
        { status },
        { new: true }
      );
      if (!updatedAppointment) {
        return res.status(404).json({ error: 'Appointment not found' });
      }
      res.json({ message: 'Appointment status updated successfully', appointment: updatedAppointment });
    } else {
      const appIdx = offlineAppointments.findIndex(a => a._id === req.params.id);
      if (appIdx === -1) {
        return res.status(404).json({ error: 'Appointment not found' });
      }
      offlineAppointments[appIdx].status = status;
      res.json({ message: 'Appointment status updated successfully (Offline Fallback)', appointment: offlineAppointments[appIdx] });
    }
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
    
    if (mongoose.connection.readyState === 1) {
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
      return res.json(memberships);
    } else {
      let results = [...offlineMemberships];
      if (search) {
        const queryLower = search.toLowerCase();
        results = results.filter(m => 
          m.clientName.toLowerCase().includes(queryLower) ||
          m.phone.includes(search)
        );
      }
      results.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      return res.json(results);
    }
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

    const membershipData = { clientName, phone, registrationDate, createdAt: new Date() };

    if (mongoose.connection.readyState === 1) {
      const newMembership = new Membership(membershipData);
      await newMembership.save();
      res.status(201).json({ message: 'Membership registered successfully', membership: newMembership });
    } else {
      const newMembership = { _id: `mock-mem-${Date.now()}`, ...membershipData };
      offlineMemberships.unshift(newMembership);
      res.status(201).json({ message: 'Membership registered successfully (Offline Fallback)', membership: newMembership });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to register membership account' });
  }
});

// DELETE /api/memberships/:id - Delete a member
router.delete('/memberships/:id', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const deletedMember = await Membership.findByIdAndDelete(req.params.id);
      if (!deletedMember) {
        return res.status(404).json({ error: 'Member not found' });
      }
      res.json({ message: 'Member deleted successfully', member: deletedMember });
    } else {
      const memIdx = offlineMemberships.findIndex(m => m._id === req.params.id);
      if (memIdx === -1) {
        return res.status(404).json({ error: 'Member not found' });
      }
      const deleted = offlineMemberships.splice(memIdx, 1);
      res.json({ message: 'Member deleted successfully (Offline Fallback)', member: deleted[0] });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete member' });
  }
});

export default router;
