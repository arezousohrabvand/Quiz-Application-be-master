const express = require('express');

// Bring in controllers
const {
  getQuestions,
  getQuestion,
  createQuestion,
  updateQuestion,
  deleteQuestion,
} = require('../controllers/questions');

// Instantiate router
const router = express.Router();

// Map controllers to routes
router.route('/').get(getQuestions).post(createQuestion);
router
  .route('/:id')
  .get(getQuestion)
  .put(updateQuestion)
  .delete(deleteQuestion);

// Export router
module.exports = router;
