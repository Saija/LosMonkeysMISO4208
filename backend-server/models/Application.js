var mongoose = require('mongoose');

var ApplicationSchema = new mongoose.Schema({
  name: String,
  description: String,
  bundle: String,
  so: String,
  updated_date: { type: Date, default: Date.now },
  created_date: { type: Date, default: Date.now },
  user_id: {type: String, required: true}
});

module.exports = mongoose.model('ApplicationModel', ApplicationSchema);