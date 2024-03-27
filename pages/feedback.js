import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, TouchableHighlight } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from '../style/styles';

function Feedback({ route }) {
  const { feedbackType, selectedDate } = route.params;
  const [feedbackText, setFeedbackText] = useState('');
  const [setShowDatePicker] = useState(false);
  const [date, setDate] = useState(selectedDate || new Date());

  const onChange = (selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

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
        <View style={styles.options}>
            <Image
                style={styles.icons}
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
      </View>
    </View>
  );
}

export default Feedback;
