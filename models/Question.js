const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  query: {
    type: String,
    required: true,
    unique: true,
  },
  choices: [
    {
      description: String,
      key: String,
    },
  ],
  correct: {
    type: String,
  },
});

module.exports = mongoose.model('Question', QuestionSchema);
