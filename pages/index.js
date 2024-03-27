import React, { useState } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from '../style/styles';
import Card from '../components/card-options';

function Index({ navigation }) {
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    const onChange = (selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(false);
        setDate(currentDate);
    };

    const handleFeedbackSelection = (feedbackType) => {
        navigation.navigate('feedback', { feedbackType, selectedDate: date });
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerText}>
                <Text>Avaliação da palestra: Enfermagem</Text>
            </View>
            <View style={styles.containerText}>
                <TouchableHighlight
                    style={styles.buttonData}
                    onPress={() => setShowDatePicker(true)}
                >
                    <Text style={styles.buttonText}>Selecionar Data</Text>
                </TouchableHighlight>
                {showDatePicker && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode="date"
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                )}
                
            </View>
            <View style={styles.containerOptions}>
            <Card
                text="Satisfeito"
                imageSource={require("../assets/feliz.png")}
                onPress={() => handleFeedbackSelection('Satisfeito')}
            />
            <Card
                text="Neutro"
                imageSource={require("../assets/sorriso.png")}
                onPress={() => handleFeedbackSelection('Neutro')}
            />
            <Card
                text="Insatisfeito"
                imageSource={require("../assets/choro.png")}
                onPress={() => handleFeedbackSelection('Insatisfeito')}
            />
            </View>
        </View>
    );
}

export default Index;
