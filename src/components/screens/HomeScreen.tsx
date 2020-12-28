import * as React from 'react';
import { FunctionComponent, useLayoutEffect } from 'react';
import {
    StyleSheet,
    Button,
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

interface IHome {
    navigation: any
}
const DATA = [
    {
      title: "Main dishes",
      data: ["Pizza", "Burger", "Risotto"]
    },
    {
      title: "Sides",
      data: ["French Fries", "Onion Rings", "Fried Shrimps"]
    },
    {
      title: "Drinks",
      data: ["Water", "Coke", "Beer"]
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"]
    }
  ];


// @ts-ignore
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
      marginHorizontal: 16
    },
    item: {
      backgroundColor: "#f9c2ff",
      padding: 20,
      marginVertical: 8
    },
    header: {
      fontSize: 32,
      backgroundColor: "#fff"
    },
    title: {
      fontSize: 24
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
            {
                console.log("RENDER!", contactData)   
            }
        <SectionList
          sections={ contactData ? contactData : [] }
          keyExtractor={( item ) => item.id }
          renderItem={({ item }) => {
            return <Item title={item.name} />}}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </View>
    );
}
  export default HomeScreen;
