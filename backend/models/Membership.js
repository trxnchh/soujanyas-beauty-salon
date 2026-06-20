import mongoose from 'mongoose';

const membershipSchema = new mongoose.Schema({
  clientName: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  registrationDate: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Membership = mongoose.model('Membership', membershipSchema);
export default Membership;
