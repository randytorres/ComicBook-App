import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Header from './components/Header';
import ComicContainer from './components/ComicContainer';

class App extends Component {
  render() {
    return (
      <View>
        <Header text={ "Comics" } />
      </View>
    )
  }
}

export default App;
