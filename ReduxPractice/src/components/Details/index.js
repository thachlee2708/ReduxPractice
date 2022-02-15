import React from 'react';
import {connect} from 'react-redux';
import DetailsScreen from './DetailsScreen';
import {changeCount} from '../../store/actions';
import {changeNum} from '../../store/actions';
const mapStateToProps = state => ({
  count: state.count.count,
  number: state.number.number,
});
const mapDispatchToProps = dispatch => ({
  changeCount: payload => dispatch(changeCount(payload)),
  changeNum: payload => dispatch(changeNum(payload)),
});
const Details = props => {
  return <DetailsScreen {...props} />;
};
export default connect(mapStateToProps, mapDispatchToProps)(Details);
