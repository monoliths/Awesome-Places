import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from "./src/components/PlaceList/PlaceList";
import { throwStatement } from '@babel/types';

type Props = {};
export default class App extends Component<Props> {
  state = {
    places: []
  };

  // Using rand is not ideal for key, but it will do for this example
  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({key: Math.random(), value: placeName})
      };
    });
  };

  placeDeletedHandler = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place, i) => {
          return place.key !== key;
        })
      };
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput  onPlaceAdded={this.placeAddedHandler} />
        <PlaceList 
          places={this.state.places} 
          OnItemDeleted={this.placeDeletedHandler} 
        />
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%'
  }
});
