import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableHighlight, Alert} from 'react-native';
import styles from '../style/styles';
import { useNavigation } from '@react-navigation/native';

function Feedback({ route }) {
  const navigation = useNavigation();

  const handlePress = () => {
    Alert.alert(
      'Obrigado!',
      'Enviado com sucesso!',
      [
        { text: 'Nova Avaliação', onPress: () => navigation.navigate("TelaInicial") },
      ]
    );
  };

  const { feedbackType, selectedDate } = route.params;
  const [feedbackText, setFeedbackText] = useState('');
  const [date, setDate] = useState(selectedDate || new Date());

  const getImageSource = (type) => {
    switch (type) {
      case 'Satisfeito':
        return require("../assets/feliz.png");
      case 'Neutro':
        return require("../assets/sorriso.png");
      case 'Insatisfeito':
        return require("../assets/choro.png");
      default:
        return null;
    }
  };

  
  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text>Avaliação da palestra: Enfermagem</Text>
      </View>
      <View style={styles.containerText}>
        <Text>Data selecionada: {date.toLocaleDateString()}</Text>
      </View>
      <View style={styles.containerFeedback}>
        <View style={styles.optionsFeedback}>
            <Image
                style={styles.iconsFeedback}
                source={getImageSource(feedbackType)}
            />
            <Text>{feedbackType}</Text>
        </View>
        <TextInput
            style={styles.input}
            onChangeText={text => setFeedbackText(text)}
            value={feedbackText}
            placeholder="Digite seu feedback aqui..."
            multiline={true}
        />
          <TouchableHighlight
            style={styles.buttonData}
            onPress={handlePress}
          >
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableHighlight>
        </View>
      </View>
  );
}

export default Feedback;
