import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import {useState, useEffect} from 'react';
import {Link, useRouter} from 'expo-router';
import {auth} from '../services/firebaseConfig'
import {signInWithEmailAndPassword} from 'firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App(){
    const [emailFocused, setEmailFocused] = useState(false);
    const [senhaFocused, setSenhaFocused] = useState (false);


    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState ('')
    
    const router = useRouter() //Hook de navegação

    useEffect(()=>{
        const verificarUsuarioLogado = async()=>{
            try{
                const usuarioSalvo = await AsyncStorage.getItem('@user')
                if(usuarioSalvo){
                    router.push('/home')
                }
            }catch(error){
                console.log('Erro ao fazer login: ', error)
            }
        }
        verificarUsuarioLogado()

    },[])

    const realizarLogin =()=>{
        signInWithEmailAndPassword(auth, email,senha)
        .then(async(userCredential) =>{
            //Logado
            const user = userCredential.user;
            await AsyncStorage.setItem('@user', JSON.stringify(user))
            router.push('/home')
        })
        .catch((error) =>{
            const errorCode =error.code
            const errorMessage = error.message
            console.log(errorMessage)
        })
    }

    return(
        <View style={styles.container}>
            <Image source={require('../assets/logoOdontoprev.png')} style={{resizeMode: "center", width:300, height:150, marginBottom:20}}/>
            <Text style={styles.title}>FAÇA LOGIN NA APLICAÇÃO</Text>

            <TextInput
            placeholder='Digite seu email'
            style={[styles.input, emailFocused && styles.inputFocused]}
            placeholderTextColor="#aaa"
            onFocus={()=> setEmailFocused(true)}
            onBlur={() => setEmailFocused(false)}
            onChangeText={(value) => setEmail(value)}
            />

            <TextInput
            placeholder='Digite sua senha'
            secureTextEntry={true}
            style={[styles.input, senhaFocused && styles.inputFocused]}
            placeholderTextColor="#aaa"
            onFocus={() => setSenhaFocused(true)}
            onBlur={() => setSenhaFocused(false)}
            onChangeText={(value) => setSenha(value)}
            />

            <TouchableOpacity style={styles.button} onPress={realizarLogin}>
            <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <Link href="cadastrarUsuario" style={{ marginTop: 20 }}>Cadastre-se</Link>
            <StatusBar style="auto" />

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
      },
      title: {
        fontFamily: 'Bree Serif',
        fontSize: 18,
        marginBottom: 20,
        color: '#333',
      },
      input: {
        backgroundColor: '#fff',
        paddingVertical: 14,
        paddingHorizontal: 18,
        borderRadius: 10,
        fontSize: 16,
        borderWidth: 2,
        borderColor: '#ccc',
        color: '#333',
        width: '100%',
        marginBottom: 16,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      inputFocused: {
        borderColor: '#003EA6',
        shadowColor: '#003EA6',
        shadowOpacity: 0.2,
        elevation: 5,
      },
      button: {
        backgroundColor: '#003EA6',
        paddingVertical: 14,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginTop: 10,
        width: '100%',
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
})