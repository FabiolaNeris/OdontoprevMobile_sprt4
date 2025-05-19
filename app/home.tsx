import React from 'react'
import {View,Button, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {useRouter} from 'expo-router'
import {Ionicons} from '@expo/vector-icons'
import BottomTabBar from '../components/bottonTabBar'

export default function ScreenHome(){
    const router = useRouter()
    return (
        <View style={styles.container}>
          
          <Image
            source={require('../assets/sorrisoEmJogo.png')}
            style={styles.image}
            resizeMode="contain"/>

            <TouchableOpacity style={styles.button} onPress={() => router.push('/consultas')}>
                <Text style={styles.buttonText}>Agendar Consulta</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => router.push('/dicas')}>
                <Text style={styles.buttonText}>Dicas de Saúde</Text>
            </TouchableOpacity>
    
        </View>
      );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingBottom: 60, // espaço para a barra
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5F5F5',
    },
    image: {
        width: 346,
        height: 346,
        marginBottom: 30,
        marginTop: 20,
      },
      button: {
        backgroundColor: '#003EA6',
        paddingVertical: 14,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginTop: 20,
        width: '80%',
        alignItems: 'center',
        elevation: 4,
        shadowColor: '#003EA6',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
  });

  