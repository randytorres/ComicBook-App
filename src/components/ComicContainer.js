import React from 'react';
import {
  View,
  Text,
  Linking,
  Image,
  TouchableHighlight } from 'react-native';
import Section from './Section';

const ComicContainer = ({ comic }) => {
  const { title, author, date, image, url } = comic;
  const {
    container,
    textContainer,
    imageStyle,
    titleStyle,
    smallText,
    buttonStyle
  } = styles;

  return (
    <View style={container}>
      <Section>
        <View>
          <Image
          source={{ uri: image }}
          style={imageStyle}
          />
        </View>
      </Section>

      <Section style={textContainer}>
        <View>
          <Text style={titleStyle}>{title}</Text>
          <Text style={smallText}>{author}</Text>
          <Text style={smallText}>{date}</Text>
          <TouchableHighlight
            onPress={() => Linking.openURL(url)}
            style={buttonStyle}>
            <Text style={{ color: '#fff', fontWeight: '700' }}>Download</Text>
          </TouchableHighlight>
        </View>
      </Section>
    </View>
  )
}

const styles = {
 container: {
   padding: 5,
   backgroundColor: '#424445',
   justifyContent: 'flex-start',
   flexDirection: 'row',
   flex: 1,
   shadowColor: '#000',
   shadowOffset: { width: 0, height: 1 },
   shadowOpacity: .8,
   shadowRadius: 2,
 },
 textContainer: {
   paddingLeft: 20
 },
 imageStyle: {
   height: 250,
   width: 175
 },
 titleStyle: {
   fontSize: 20,
   color: '#fff',
   fontWeight: "700",
   paddingBottom: 5
 },
 smallText: {
   color: '#fff',
   fontSize: 12
 },
 buttonStyle: {
   alignItems: 'center',
   paddingVertical: 10,
   paddingHorizontal: 20,
   backgroundColor: 'red',
   marginTop: 20,
   width: 125,
   height: 40,
   borderRadius: 20
 }
}

export default ComicContainer;
