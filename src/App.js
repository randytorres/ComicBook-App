import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';
import Header from './components/Header';
import ComicContainer from './components/ComicContainer';

class App extends Component {
  constructor() {
    super()
    this.state = {
      comics: []
    }
  }

  componentWillMount() {
    axios.get('https://api.myjson.com/bins/ln7x')
    .then(response => this.setState({ comics: response.data }))
    .catch(error => console.log(error))
  }

  render() {
    return (
      <View>
        <Header text={ "Comics" } />
        <ScrollView>
          {
            this.state.comics.map(comic => {
              return <ComicContainer comic={comic} key={comic.title} />
            })
          }
        </ScrollView>
      </View>
    )
  }
}

export default App;
