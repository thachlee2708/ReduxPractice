import React from 'react';
import {connect} from 'react-redux';
import DetailsScreen from './DetailsScreen';
import {changeCount} from '../../store/actions';

const mapStateToProps = state => ({
  count: state.count.count,
});
const mapDispatchToProps = dispatch => ({
  changeCount: payload => dispatch(changeCount(payload)),
});
const Details = props => {
  return <DetailsScreen {...props} />;
};
export default connect(mapStateToProps, mapDispatchToProps)(Details);
