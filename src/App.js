import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Flat } from './Flat/Flat';
import { getFlatsThunkCreator } from './redux/reduxStore'
import { Loader } from './res/Loader/Loader';

function App({ flats }) {
  return (
    <div className="App">
      <div className="container">
        {
          flats.length === 0
            ? <Loader />
            : flats.map((item) => <Flat flat={item} key={item.id} />)
        }
      </div>
    </div>
  );
}

class AppContainer extends React.Component {
  componentDidMount() {
    this.props.getFlatsThunkCreator()
  }

  render() {
    return (
      <App flats={this.props.flats} />
    )
  }
}

const mapStateToProps = (state) => ({
  flats: state.flats
});

export default connect(mapStateToProps, { getFlatsThunkCreator })(AppContainer);


