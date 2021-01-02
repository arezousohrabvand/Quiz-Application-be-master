// Import Question model
const Question = require('../models/Question');

// @desc    Get all questions
// @route   GET /api/v1/questions
exports.getQuestions = async (req, res, next) => {
  errorMessage = 'Error fetching questions';
  try {
    const questions = await Question.find();

    if (!questions) {
      return res.status(400).json({
        success: false,
        message: errorMessage,
      });
    }

    res.status(200).json({
      success: true,
      data: questions,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: errorMessage,
    });
  }
};

// @desc    Get question
// @route   GET /api/v1/questions/:id
exports.getQuestion = async (req, res, next) => {
  errorMessage = `Error fetching question with id ${req.params.id}`;
  try {
    const question = await Question.findById(req.params.id);
    if (!question) {
      return res.status(400).json({
        success: false,
        message: errorMessage,
      });
    }

    res.status(200).json({
      success: true,
      data: question,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: errorMessage,
    });
  }
};

// @desc    Create question
// @route   POST /api/v1/questions
exports.createQuestion = async (req, res, next) => {
  errorMessage = `Error creating question`;

  try {
    const question = await Question.create(req.body);

    if (!question) {
      return res.status(400).json({
        success: false,
        message: errorMessage,
      });
    }

    res.status(201).json({
      success: true,
      data: question,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: errorMessage,
    });
  }
};

// @desc    Update question
// @route   PUT /api/v1/questions/:id
exports.updateQuestion = async (req, res, next) => {
  errorMessage = `Update for question with id ${req.params.id} failed`;

  try {
    const question = await Question.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!question) {
      return res.status(400).json({
        success: false,
        message: errorMessage,
      });
    }

    res.status(200).json({
      success: true,
      data: question,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: errorMessage,
    });
  }
};

// @desc    Deelete question
// @route   DELETE /api/v1/questions/:id
exports.deleteQuestion = async (req, res, next) => {
  errorMessage = `Delete of question with id ${req.params.id} failed`;

  try {
    const question = await Question.findByIdAndDelete(req.params.id);

    if (!question) {
      return res.status(400).json({
        success: false,
        message: errorMessage,
      });
    }

    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: errorMessage,
    });
  }
};
