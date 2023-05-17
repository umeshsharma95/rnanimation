import { StyleSheet, Text, View, NativeModules, Button } from 'react-native'
import React from 'react'

const {CalendarModule} = NativeModules;
const NativeModuleComponent = () => {

    const onPress = async() => {
        CalendarModule.createCalendarEvent('testName', 'testLocation',
            (error, eventId) => {
                if (error) {
                console.error(`Error found! ${error}`);
                }
                console.log(`event id ${eventId} returned`);
            },
        ) 
    };

  return (
    <View style={styles.container}>
        <Text style={styles.text}>Create Event Using Native Module</Text>
      <Button title='Create Event' onPress={onPress}/>
    </View>
  )
}

export default NativeModuleComponent

const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    text: {
        fontSize: 20,
        fontWeight: '500',
        marginBottom: 30
    }
})