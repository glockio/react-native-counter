import React from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux/native';
import * as counterActions from '../actions/counter.actions';


const {Text, View, StyleSheet, Component, TouchableHighlight} = React;

class CounterContainer extends Component {

  componentDidMount() {

    const {fireRef} = this.props;
    this.props.fetchCount(fireRef);

    fireRef.parent().on('child_changed', (snapShot) => {
      const value = snapShot.val();
      this.props.setCount(value);
    });
  }


  render(){
    const {fireRef} = this.props;
    return(
      <View style={ styles.container}>

        <TouchableHighlight onPress={ () => this.props.increaseCount(fireRef)}>
          <View style={styles.header}><Text>Update DATE</Text></View>
        </TouchableHighlight>

        <View style={styles.body}>
        <Text> {this.props.count}</Text>


        <TouchableHighlight onPress={ () => this.props.startLoading(true) }>
          <Text> {this.props.loading ? "I AM LOADING!" : "DONE LOADING"}</Text>
        </TouchableHighlight>


        </View>

        <View style={styles.footer}><Text>I AM Footer</Text></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex:1,
    alignSelf: "stretch",
    backgroundColor: 'yellow',
  },

  header: {
    height: 120,
    backgroundColor: 'red',
  },

  body: {
    backgroundColor: 'green',
    flex: 1
  },

  footer: {
    height: 120,

  }

});


// function mapStateToProps(state) {
//   const todosScope = state.get('_todos_');

//   return {
//     todos: todosScope.get('todos'),
//     fireRef: state.get('fireRef'),
//     loading: todosScope.get('loadingTodos'),
//   };
// }

// function mapDispatchToProps(dispatch) {
//   // const remoteActions {onAdd: _addTodo} = todoActionCreators;

//   const remoteActions = {
//     onAdd: todoActionCreators.remoteAddTodo,
//     onInit: todoActionCreators.getTodos
//   };

//   return {
//     remoteActions: bindActionCreators(remoteActions, dispatch),
//     todoActions: bindActionCreators(todoActionCreators, dispatch),
//   }
// }

const mapReduxStoreToProps = (reduxStore) => {
  const countRef = new Firebase('https://fiery-heat-567.firebaseio.com/').child('count');
  return {
    fireRef: countRef,
    loading: reduxStore.get('loading'),
    count: reduxStore.get('count')
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCount: bindActionCreators(counterActions.setCount, dispatch),
    fetchCount: bindActionCreators(counterActions.fetchCount, dispatch),
    startLoading: bindActionCreators(counterActions.setLoading, dispatch),
    increaseCount: bindActionCreators(counterActions.increaseCount,dispatch)
  }
};


export default connect(mapReduxStoreToProps, mapDispatchToProps)(CounterContainer);

