import React from 'react';
import { ImageBackground, StyleSheet, View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View style={styles.container}>
    <ImageBackground
      style={styles.imageBackground}
      source={{ uri: 'https://i.ibb.co/XFV7RSc/ERMS-Checker.png' }}
    >
      <View style={styles.textContainer}>
        <Link href="./eventOrgLogin" asChild>
          <Text style={styles.text}>Event Organizer</Text>
        </Link>
        <Link href="./attendeeLogin/">
          <Text style={styles.text}>Attendee</Text>
        </Link>
      </View>
    </ImageBackground>
  </View>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
},
imageBackground: {
  flex: 1,
  resizeMode: 'cover',
  justifyContent: 'center',
  alignItems: 'center',
},
textContainer: {
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  marginTop: 500,
  marginBottom: 105,
},
text: {
  color: 'white',
  fontFamily: 'System',
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 35,
},
});
  