import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';


import { createLaneRequest, fetchLanes } from '../Lane/LaneActions';
import Lanes from '../Lane/Lanes';

// Import Style
import styles from './Kanban.css';
// import styles from '../Lane/Lane.css';

const Kanban = props => (
  <div className={styles.buttonLane}>
    <button
      className={styles.buttonAddLane}
      onClick={() => props.createLane({
        name: 'New Lane',
      })}
    >Add lane</button>
    <Lanes lanes={props.lanes} />
  </div>
);

Kanban.need = [() => { return fetchLanes(); }];

Kanban.propTypes = {
  lanes: PropTypes.array,
  createLane: PropTypes.func,
};

const mapStateToProps = state => ({
  lanes: Object.values(state.lanes)
});

const mapDispatchToProps = {
  createLane: createLaneRequest,
};

// higher-order functions
connect(mapStateToProps, mapDispatchToProps)
export default compose(
)(Kanban);