import * as React from 'react';
import { FunctionComponent } from 'react';
import { Button, View, Text } from 'react-native';

interface IHome {
    navigation: any
}

const HomeScreen: FunctionComponent<IHome> = ({ navigation }) => {

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
