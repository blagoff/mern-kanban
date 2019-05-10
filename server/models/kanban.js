import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const kanbanSchema = new Schema({

});

const mapStateToProps = state => ({
    lanes: Object.values(state.lanes)
  });

export default mongoose.model('Kanban', kanbanSchema);
