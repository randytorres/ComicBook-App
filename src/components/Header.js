import React from 'react';
import { View, Text } from 'react-native';

const Header = ({ text }) => {
  const { headerContainer, headerText } = styles;

  return (
    <View style={headerContainer}>
      <Text style={headerText}>
        {text}
      </Text>
    </View>
  )
}

const styles = {
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    paddingHorizontal: 10,
    paddingVertical: 24,
    backgroundColor: '#000',
    borderTopWidth: 20,
    borderTopColor: '#424445'
  },
  headerText: {
    fontSize: 38,
    color: '#fff',
    fontWeight: '700'
  }
}

export default Header;
