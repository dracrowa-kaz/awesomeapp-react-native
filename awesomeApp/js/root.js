import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { addTodo } from './Todo'
import {  StackNavigator } from 'react-navigation'

//export function addTodo(name, dueTo) {
class AwesomeApp extends Component {
  constructor(props) {
    super(props)
    this.pushed = this.pushed.bind(this)
  }
  pushed(){
    this.props.dispatch(addTodo("test","aaa"))
  }
  render() {
    return (
        <View style={styles.container}>
          <TouchableOpacity style={{ height: viewHeight, width:40, justifyContent: 'center', alignItems: 'center' }} onPress={this.pushed}>
            <Text>Push me</Text>
          </TouchableOpacity>
          <MapView
            provider={MapView.PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </View>
    );
  }
}

function mapStateToProps(state) {
  console.log(state)
  const {todo} = state
  return {
    todo,
  }
}

export default connect(mapStateToProps)(AwesomeApp)
/*
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(awesomeApp);
*/

var {height, width} = Dimensions.get('window');
var viewHeight = 100
const styles = StyleSheet.create({
  map: {
    height: height - viewHeight,
    width: width
    //...StyleSheet.absoluteFillObject,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
