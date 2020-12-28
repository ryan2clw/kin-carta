import * as React from 'react';
import { FunctionComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
        item: {
            backgroundColor: "#f9c2ff",
            padding: 20,
            marginVertical: 8
        },
        title: {
            fontSize: 24
        }
    });

interface IContactRow {
    title: string,
    navigation: any
}

const ContactRow: FunctionComponent<IContactRow> = ({ title, navigation }) => (
    <View 
      style={styles.item} 
      onTouchEnd={ () => {
        navigation.navigate("Details");
    }}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
export default ContactRow;