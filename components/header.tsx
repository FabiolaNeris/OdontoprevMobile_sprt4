import React from "react";
import {View, Text, StyleSheet} from 'react-native'

export default function Header(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Odontoprev</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      height: 60,
      backgroundColor: '#003EA6',
      justifyContent: 'center',
      paddingHorizontal: 20,
      paddingTop: 10,
    },
    title: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
    },
  });