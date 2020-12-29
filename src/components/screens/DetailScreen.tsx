import * as React from 'react';
import { FunctionComponent, useLayoutEffect, useState } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { deviceWidth } from '../../helpers/globals';


interface IDetailScreen {
    pic? : string, 
    route: any
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#fff'
    },
    name: {
        fontSize: 31,
        fontWeight: "500",
        marginTop: 15,
        paddingTop: 9,
        paddingHorizontal: 15,
        color: "#595959"
      },
      company: {
        fontSize: 21,
        marginLeft: 6,
        color: '#b1b1b1',
        paddingVertical: 5
      }
  });
const DetailScreen: FunctionComponent<IDetailScreen>  = ({ pic, route }) => {

    // useLayoutEffect(() => {
    //     if(navigation.state){
    //     }
    //     return () => {
    //         // cancel async tasks, dont update unmounted components
    //     };
    // }, [])

    const [state,] = useState({
        viewSize: deviceWidth * 0.42,
        imageSize: deviceWidth * 0.3,
        ...route.params
    });

    return (     
        <View style={styles.container}>
            {console.log("navigation.state.params", state)}
            <View style={{ width: deviceWidth, alignItems: 'center', padding: 30 }}>
            <View style={{ width: state.viewSize, height: state.viewSize, backgroundColor: '#e6e6e6', alignItems: "center", justifyContent:"center" }} >
                {
                state.pic ? 
                <Image 
                    source={{
                        uri: state.pic
                    }}
                    style={{ width: state.viewSize, height: state.viewSize}}
                /> :
                <FontAwesome name="user" size={state.imageSize} color="#c1c1c1" />}
            </View>
            <Text style={styles.name}>
                { state.name }
            </Text>
            <Text style={styles.company}>
                { state.companyName }
            </Text>
            </View>
        </View>

    );
}
export default DetailScreen;
