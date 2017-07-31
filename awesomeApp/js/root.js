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


class AwesomeApp extends Component {
  static navigationOptions = {
    title: 'AwesomeApp',
  };
  constructor(props) {
    super(props)
    this.state = {
      markers: [ {latlng:{latitude: 60.4518,longitude: 22.2666}, title:"test", description:"desc"} ]
    }
    this.pushed = this.pushed.bind(this)
    this.state.markers.map(marker => (
      console.log(marker.latlng)
    ))
  }
  pushed(){
    this.props.dispatch(addTodo("test","aaa"))
    const { navigate } = this.props.navigation
    navigate('ChatList', { name: 'Jane' })
  }
  render() {
      const ASPECT_RATIO = width / height
      const LATITUDE = 38.9637
      const LONGITUDE = 35.2433
      const LATITUDE_DELTA = 85
      const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO
      return (
        <View style={styles.container}>
          <MapView
            provider={MapView.PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={{
              latitude: LATITUDE,
              longitude: LONGITUDE,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }}
            showsUserLocation={true}
            showsMyLocationButton={true}
            full
          >
          {this.state.markers.map(marker => (
            <MapView.Marker
              key={marker.latlng.longitude}
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description}
            />
          ))}
          </MapView>
        </View>
    );
  }
}

function mapStateToProps(state) {
  const {todo} = state
  return {
    todo,
  }
}

export default connect(mapStateToProps)(AwesomeApp)

var {height, width} = Dimensions.get('window');
var viewHeight = 0
const styles = StyleSheet.create({
  map: {
    flex:1,
    height: height - viewHeight,
    width: width
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
