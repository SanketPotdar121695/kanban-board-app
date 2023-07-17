const mongoose = require('mongoose');

const subtaskSchema = new mongoose.Schema(
  {
    title: String,
    isCompleted: Boolean
  },
  { versionKey: false }
);

const taskSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    status: { type: String, enum: ['Todo', 'Doing', 'Done'], default: 'Todo' },
    subtask: [subtaskSchema]
  },
  { versionKey: false }
);

const boardSchema = new mongoose.Schema(
  {
    name: { type: String, enum: ['Todo', 'Doing', 'Done'] },
    tasks: [taskSchema]
  },
  { versionKey: false }
);

const BoardModel = mongoose.model('board', boardSchema);

module.exports = { BoardModel };
