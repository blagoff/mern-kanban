import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const mon = require('mongoose');
mon.plugin(schema => { schema.options.usePushEach = true });

const noteSchema = new Schema({
  task: { type: 'String', required: true },
  id: { type: 'String', required: true, unique: true },
});

export default mongoose.model('Note', noteSchema);