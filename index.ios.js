import React from 'react-native';
import {createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux/native';
import rootReducer from './src/reducers/root.reducer';
import App from './src/app';
import thunk from 'redux-thunk';
import Firebase from "firebase";


const {AppRegistry, Component} = React; // React Must be defined;


// create a store that has redux-thunk middleware enabled
const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

// Init Store with root reducer
const store = createStoreWithMiddleware(rootReducer);


class reactNativeTest extends Component {

  // Injects redux store to all children
  render(){
    return(
      <Provider store={store}>
        { () => <App/> }
      </Provider>
    );
  }
}

AppRegistry.registerComponent('reactNativeTest', () => reactNativeTest);
