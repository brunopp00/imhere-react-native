import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles'
import React, {useState} from 'react'

export function Home() {

    const [participants, setParticipants] =  useState(['Bruno'])

    function handleParticipantAdd() {
        if(participants.includes('Rodrigo')){
            Alert.alert('Participante existe', 'Já existe um participante na lista com esse nome')
        }
        else {
            setParticipants(prevState => [...prevState, 'Rodrigo'])
        }
    }

    function handleParticipantRemove(name: string) {
        Alert.alert('Remover', `Remover o participante ${name}?`, [
            {
                text: 'Sim',
                onPress: () => Alert.alert('Deletado!')
            },
            {
                text:'Não',
                style: 'cancel'
            }
        ])
    }

  return (
    <View style={styles.container}>
        <Text style={styles.eventName}>
            Nome do Evento
        </Text>
        <Text style={styles.eventDate}>
            Sexta, 4 de Novembro de 2022
        </Text>
        <View style={styles.form}>
            <TextInput 
                style={styles.input}
                placeholder='Nome do Participante'
                placeholderTextColor='#6b6b6b'
            />
            <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                <Text style={styles.buttonText}>
                    +
                </Text>
            </TouchableOpacity>
        </View>

        <FlatList
            data={participants}
            keyExtractor={item => item}
            renderItem={({ item }) => (
                <Participant
                    key={item}
                    name={item}
                    onRemove={() => handleParticipantRemove(item)} />
            )}
            ListEmptyComponent={() => (
                <Text style={styles.listEmptyText}>
                    Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença
                </Text>
            )}
        />
    </View>
  );
}