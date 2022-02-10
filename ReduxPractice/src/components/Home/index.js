import React from 'react';
import {connect} from 'react-redux';
import HomeScreen from './HomeScreen';

import {changeCount} from '../../store/actions';

const mapStateToProps = state => ({
  count: state.count.count,
});
const mapDispatchToProps = dispatch => ({
  changeCount: payload => dispatch(changeCount(payload)),
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
