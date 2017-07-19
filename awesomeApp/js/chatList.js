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
import { StackNavigator } from 'react-navigation'

class ChatList extends Component {
  static navigationOptions = {
    title: 'ChatList',
  };
  render() {
    const { goBack } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={{ height: 40, width:40, justifyContent: 'center', alignItems: 'center' }} onPress={this.pushed}>
          <Text>Push me</Text>
        </TouchableOpacity>
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

export default connect(mapStateToProps)(ChatList)

const styles = StyleSheet.create({
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
