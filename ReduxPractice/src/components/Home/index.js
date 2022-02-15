import React from 'react';
import {connect} from 'react-redux';
import HomeScreen from './HomeScreen';

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
/*
class Home extends Component {
  render() {
    return <HomeScreen {...this.props} />;
  }
}
*/
const Home = props => {
  return <HomeScreen {...props} />;
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
