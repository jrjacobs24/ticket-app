import { connect } from 'react-redux';
import { searchMovies } from '../actions/movies';
import MoviesView from '../components/movies';

// https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options

const mapStateToProps = state => state;

const mapDispatchToProps = {
  searchMovies
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesView);
