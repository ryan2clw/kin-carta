import * as React from 'react';
import { FunctionComponent, useLayoutEffect } from 'react';
import { Button, View, Text } from 'react-native';
import getContacts from '../../webservices/ContactService';

interface IHome {
    navigation: any
}

const HomeScreen: FunctionComponent<IHome> = ({ navigation }) => {

    useLayoutEffect(() => {
        getContacts().then(contacts=>{
            console.log("API data", contacts);
        }, (reason)=>{
            console.log("API rejection", reason);
        })
        return () => {
            // cleanup
        };
    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')} />
        </View>
    );
}
  export default HomeScreen;
