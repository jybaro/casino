  
const mongoose = require('mongoose');
const { Schema } = mongoose;

const MachineSchema = new Schema({
  userName: { type: String, required: true },
  password: { type: String, required: true },
  credits: { type: Number, required: true, default: 0 },
  sessionCredits: { type: Number, required: true, default: 0 },
  box1: { type: Number, required: true, default: 0 },
  box2: { type: Number, required: true, default: 0 },
  box3: { type: Number, required: true, default: 0 },
});

module.exports = mongoose.model('Machine', MachineSchema);
