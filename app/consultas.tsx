import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Platform, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import ItemConsulta from "../components/itemConsulta";
import { db } from "../services/firebaseConfig";
import { collection, addDoc, getDocs, deleteDoc, updateDoc, doc } from 'firebase/firestore';

export default function Consultas() {
  const [clinica, setClinica] = useState('');
  const [data, setData] = useState(new Date());
  const [mostrarData, setMostrarData] = useState(false);
  const [horario, setHorario] = useState('');
  const [consultas, setConsultas] = useState([]);
  const [idEmEdicao, setIdEmEdicao] = useState<string | null>(null);

  const clinicas = ['Odonto Sorriso', 'Clínica Dental Mais', 'Sorriso Feliz', 'OdontoPremium'];

  const buscarConsultas = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'consultas'));
      const items = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setConsultas(items);
    } catch (error) {
      console.log("Erro ao buscar consultas:", error);
      Alert.alert("Erro", "Não foi possível carregar as consultas.");
    }
  };

  useEffect(() => {
    buscarConsultas();
  }, []);

  const agendarConsulta = async () => {
    if (!clinica || !horario || !data || !(data instanceof Date)) {
      Alert.alert("Aviso", "Preencha todos os campos corretamente.");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, 'consultas'), {
        clinica,
        data: data.toISOString(),
        horario,
      });
      console.log("Consulta agendada:", docRef.id);

      setClinica('');
      setData(new Date());
      setHorario('');
      buscarConsultas();
    } catch (error) {
      console.log('Erro ao agendar consulta:', error);
      Alert.alert("Erro", "Não foi possível agendar a consulta.");
    }
  };

  const salvarEdicaoConsulta = async () => {
    if (!idEmEdicao) return;
  
    try {
      await updateDoc(doc(db, 'consultas', idEmEdicao), {
        clinica,
        data: data.toISOString(),
        horario,
      });
      Alert.alert("Consulta atualizada!");
      setClinica('');
      setData(new Date());
      setHorario('');
      setIdEmEdicao(null);
      buscarConsultas();
    } catch (error) {
      console.log('Erro ao salvar edição:', error);
      Alert.alert("Erro", "Não foi possível salvar as alterações.");
    }
  };

  const cancelarConsulta = async (id) => {
    try {
      await deleteDoc(doc(db, 'consultas', id));
      Alert.alert("Consulta cancelada");
      buscarConsultas();
    } catch (error) {
      console.log('Erro ao cancelar consulta:', error);
      Alert.alert("Erro", "Não foi possível cancelar a consulta.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Agendar Nova Consulta</Text>

      <Picker
        selectedValue={clinica}
        onValueChange={(itemValue) => setClinica(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Selecione a clínica" value="" />
        {clinicas.map((item) => (
          <Picker.Item key={item} label={item} value={item} />
        ))}
      </Picker>

      {Platform.OS === 'web' ? (
            <View style={styles.input}>
                <Text style={styles.label}>Data da Consulta:</Text>
                <input
                type="date"
                    value={data.toISOString().split('T')[0]}
                    onChange={(e) => setData(new Date(e.target.value))}
                    style={styles.webDateInput}
                />
            </View>
        ) :
        (
        <>
            <TouchableOpacity onPress={() => setMostrarData(true)} style={styles.input}>
            <Text style={styles.inputText}>Data: {data.toLocaleDateString()}</Text>
            </TouchableOpacity>

            <DateTimePickerModal
                isVisible={mostrarData}
                mode="date"
                onConfirm={(date) => {
                    setData(date);
                    setMostrarData(false);
                    }}
                onCancel={() => setMostrarData(false)}
                display={Platform.OS === 'ios' ? 'inline' : 'default'}
            />
        </>
        )}

      <TextInput
        placeholder="Horário (ex: 14:00)"
        style={styles.input}
        value={horario}
        onChangeText={setHorario}
      />

        <TouchableOpacity
            style={styles.button}
            onPress={idEmEdicao ? salvarEdicaoConsulta : agendarConsulta}
        >
            <Text style={styles.buttonText}>
                {idEmEdicao ? 'Salvar Alterações' : 'Agendar Consulta'}
            </Text>
        </TouchableOpacity>

      <Text style={[styles.titulo, { marginTop: 30 }]}>Consultas Agendadas</Text>

      <FlatList
        data={consultas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ItemConsulta
            id={item.id}
            clinica={item.clinica}
            data={item.data}
            horario={item.horario}
            onEditar={() => {
                setClinica(item.clinica);
                setHorario(item.horario);
                setData(new Date(item.data));
                setIdEmEdicao(item.id);
            }}
            onExcluir={() => cancelarConsulta(item.id)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#003EA6',
    marginBottom: 10,
  },
  picker: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    height: 50, 
    fontSize: 16
  },
  input: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 10,
    borderWidth: 1,
    height: 50, 
    borderColor: '#ccc',
  },
  inputText: {
    color: '#333',
 
  },
  button: {
    backgroundColor: '#003EA6',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  label:{
    fontSize: 16,
    marginBottom: 12,
  },

  webDateInput: {
    //width: '100%',
    height: 50,
    fontSize: 16,
    paddingHorizontal: 10,
    borderRadius: 8,
  
    
    
  },
});
