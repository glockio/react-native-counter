import React from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux/native';

const {
 Navigator, View, Text
} = React;

class AppRouter extends React.Component {

  renderScene(route, nav) {
    switch (route.name) {
      case 'helloWorld':
        return <View nav={nav}><Text>Hello World</Text></View>;
      default:
        return <View><Text>Hello World</Text></View>;
    }
  }

  render(){
    return(
      <Navigator
       initialRoute={ { name: "helloWorld"} }
       renderScene={this.renderScene.bind(this)}
       configureScene={ (route) => {
         if (route.sceneConfig) {
           return route.sceneConfig;
         }
         return Navigator.SceneConfigs.FloatFromRight;
       }}
      />
    );
  }
}

export default AppRouter;
