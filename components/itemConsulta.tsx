import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import {AntDesign, MaterialIcons} from '@expo/vector-icons'
import {useState} from 'react'

type Props = {
    id: string;
    clinica: string;
    data: string;
    horario: string;
    onEditar: () => void;
    onExcluir: () => void;
  };

export default function ItemConsulta({ id, clinica, data, horario, onEditar, onExcluir }: Props){
    const [emEdicao, setEmEdicao] = useState(false);
    const dataConsulta = new Date(data);
    const hoje = new Date();
    const semHora = new Date(hoje.toDateString());
    const isPassada = dataConsulta < semHora;


    return (
        <View style={[styles.container, isPassada && !emEdicao && styles.opaco]}>
          <Text style={styles.titulo}>{clinica}</Text>
          <Text style={styles.texto}>Data: {dataConsulta.toLocaleDateString()}</Text>
          <Text style={styles.texto}>Horário: {horario}</Text>
    
          <View style={styles.botoes}>
            <TouchableOpacity
              onPress={() => {
                setEmEdicao(true);
                onEditar();
              }}
              style={styles.botaoEditar}
            >
              <Text style={styles.textoBotao}>Remarcar</Text>
            </TouchableOpacity>
    
            <TouchableOpacity onPress={onExcluir} style={styles.botaoExcluir}>
              <Text style={styles.textoBotao}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      marginVertical: 10,
      padding: 16,
      borderRadius: 10,
      elevation: 3,
    },
    opaco: {
      opacity: 0.5,
    },
    titulo: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#003EA6',
    },
    texto: {
      fontSize: 14,
      color: '#333',
      marginTop: 4,
    },
    botoes: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 12,
    },
    botaoEditar: {
      backgroundColor: '#FFA500',
      padding: 8,
      borderRadius: 6,
    },
    botaoExcluir: {
      backgroundColor: '#D11A2A',
      padding: 8,
      borderRadius: 6,
    },
    textoBotao: {
      color: '#fff',
      fontWeight: 'bold',
    },
  });

