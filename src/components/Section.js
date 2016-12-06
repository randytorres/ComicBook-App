import React from 'react';
import { View } from 'react-native';

const Section = (props) => {
  return (
    <View style={[ styles.container, props.style ]}>
      { props.children }
    </View>
  )
}

const styles = {
  container: {
    padding: 5,
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row'
  }
}

export default Section;
