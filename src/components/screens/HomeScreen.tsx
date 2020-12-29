import * as React from 'react';
import { FunctionComponent, useLayoutEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SectionList
  } from "react-native";
  import Constants from "expo-constants";
import getContacts from '../../webservices/ContactService';
import { useDispatch } from 'react-redux';
import { action } from 'typesafe-actions';
import { actionTypes } from '../../store/ActionTypes';
import { useSelector } from '../../helpers/globals';
import ContactRow from '../ContactRow';
import Separator from '../Separator';

interface IHome {
    navigation: any
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    header: {
      fontSize: 15,
      fontWeight: "700",
      backgroundColor: "#f4f4f4",
      paddingVertical: 9,
      paddingHorizontal: 15,
      color: "#777777"
    }
  });
  

const HomeScreen: FunctionComponent<IHome> = ({ navigation }) => {

    const dispatch = useDispatch();

    // @ts-ignore
    const contactData = useSelector(store => store.ContactsPage).contacts;

    useLayoutEffect(() => {
        getContacts().then(contacts=>{
            dispatch(action(actionTypes.CONTACT_DATA, contacts));
        }, (reason)=>{
            console.log("API rejection", reason);
        });
        return () => {
            // cleanup
        };
    }, []);

    return (
        <View style={styles.container}>
            {/* 
            MARK TO DO:  CHECK FOR XML AND MAKE PIC NULL IF SO
            */}
        <SectionList
          sections={ contactData ? contactData : [] }
          keyExtractor={( item ) => item.id }
          renderItem={({ item }) => {
            return <ContactRow 
                        name={item.name} 
                        navigation={navigation}  
                        companyName={item.companyName}
                        isFavorite={item.isFavorite}
                        pic={item.largeImageURL}
                        phone={item.phone}
                        emailAddress={item.emailAddress}
                        detailId={item.id}
                        addressOne={item.address.street}
                        addressTwo={item.address.city + ', ' + item.address.state + ' ' + item.address.zipCode + ', ' + item.address.country}
                        birthdate={item.birthdate}
                    />}}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
          ItemSeparatorComponent = { () => {
            return <Separator />
        } }  
        />
      </View>
    );
}
  export default HomeScreen;
