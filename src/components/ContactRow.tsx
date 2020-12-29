import * as React from 'react';
import { FunctionComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import AgnoButton from './AgnoButton';

interface IContactRow {
    name: string,
    companyName: string,
    navigation: any,
    isFavorite: boolean
}

const ContactRow: FunctionComponent<IContactRow> = ({ name, navigation, companyName, isFavorite }) => (
    <AgnoButton
        style={styles.item}
        onPress={() => {
            navigation.navigate("Details");
        }}>
        <View style={{ width: 60, height: 60, backgroundColor: '#e6e6e6', alignItems: "center", justifyContent:"center" }} >
            <FontAwesome name="user" size={36} color="#c1c1c1" />
        </View>
        <View style={{ width: 33, height: 60, alignItems: "flex-end", justifyContent: 'flex-end'}} >
            {
                isFavorite && <Foundation name="star" size={24} color="#ecd577" />
            }
            <View  style={{ width: 33, height: 30}} />
        </View>
        <View style={{ justifyContent: 'center'}}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.company}>{companyName}</Text>
        </View>
    </AgnoButton>
);

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#FFF",
        padding: 20,
        marginVertical: 2,
        flexDirection: "row"
    },
    title: {
        fontSize: 20,
        marginLeft: 6,
        marginBottom: 3,
        color: "#646464"
    },
    company: {
        fontSize: 14,
        marginLeft: 6,
        backgroundColor: 'white',
        color: '#c1c1c1'
    }
});
export default ContactRow;
