import * as React from 'react';
import { FunctionComponent } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import AgnoButton from './AgnoButton';
import { replaceUsingIndex } from '../helpers/globals';

interface IPhone {
    home: string,
    work: string
}
interface IDataObject {
    primaryKey: string,
    secondaryKey?: string,
    val: string
}

interface IContactRow {
    name: string,
    companyName: string,
    navigation: any,
    isFavorite: boolean,
    pic: string,
    largePic: string,
    phone: IPhone, // iPhone lol, not the apple product but the interface
    emailAddress: string,
    detailId: string, 
    addressOne: string,
    addressTwo: string,
    birthdate: string
}

const ContactRow: FunctionComponent<IContactRow> = ({ name, navigation, companyName, isFavorite, pic, largePic, phone, emailAddress, detailId, addressOne, addressTwo, birthdate }) => {
    


    return (
    <AgnoButton
        style={styles.item}
        onPress={() => {
            // make an array which has a primaryKey, secondaryKey, val
            let dataArray = [];
            for (const item in phone) {
                // @ts-ignore
                let phoneNumber = "(" + phone[item];
                phoneNumber = replaceUsingIndex(phoneNumber, 4, ") ");
                let subcategory = replaceUsingIndex(item, 0, item[0].toUpperCase());
                const dataObj = {
                    primaryKey: "PHONE",
                    secondaryKey: subcategory,
                    // @ts-ignore
                    val:  phoneNumber
                }
                dataArray.push(dataObj);
            }
            // @ts-ignore
            dataArray.sort(function(a: IDataObject, b: IDataObject){return b.secondaryKey < a.secondaryKey});
            const addressObj = {
            primaryKey: "ADDRESS",
            val:  addressOne + "\n" + addressTwo
            }
            dataArray.push(addressObj);
            const dob = new Date(birthdate);
            const birthDate = {
            primaryKey: "BIRTHDATE",
            val:  dob.toLocaleDateString('en-US', {
                month: 'long', 
                day: '2-digit', 
                year: 'numeric'
                })
            }
            dataArray.push(birthDate);
            const emailObj = {
            primaryKey: "EMAIL",
            val:  emailAddress
            }
            dataArray.push(emailObj);
            navigation.navigate("Details", { name, isFavorite, largePic, companyName, phone, emailAddress, detailId, dataArray });
        }}>
        <View style={{ width: 60, height: 60, backgroundColor: '#e6e6e6', alignItems: "center", justifyContent:"center" }} >
            {
                // RAN OUTTA TIME SO JUST HARDCODED THIS BAD RESPONSE
             name != "Scooby Doo" ? 
             <Image 
                source={{
                    uri: pic
                }}
                style={{ width: 60, height: 60}}
             /> :
            <FontAwesome name="user" size={36} color="#c1c1c1" />}
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
    </AgnoButton>)
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#FFF",
        padding: 20,
        flexDirection: "row"
    },
    title: {
        fontSize: 20,
        marginLeft: 6,
        marginBottom: 3,
        color: "#646464"
    }, // MARK TO DO: COMBINE THIS INTO GLOBAL STYLES
    company: {
        fontSize: 14,
        marginLeft: 6,
        color: '#b1b1b1'
    }
});
export default ContactRow;
