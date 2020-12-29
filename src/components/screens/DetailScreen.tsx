import * as React from 'react';
import { FunctionComponent, useLayoutEffect, useState } from 'react';
import { View, Image, StyleSheet, Text, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { deviceWidth } from '../../helpers/globals';
import DetailRow from '../DetailRow';
import Separator from '../Separator';


interface IDetailScreen {
    
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
        marginTop: 10,
        paddingTop: 9,
        paddingHorizontal: 15,
        color: "#595959"
      },
      company: {
        fontSize: 21,
        marginLeft: 6,
        color: '#b1b1b1',
        paddingVertical: 5,
        marginBottom: 20
      },  
      item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      },
  });
  

const DetailScreen: FunctionComponent<IDetailScreen>  = ({ route }) => {

    const [state,] = useState({
        viewSize: deviceWidth * 0.42,
        imageSize: deviceWidth * 0.3,
        ...route.params
    });
    // @ts-ignore
    const renderItem = ({ item }) => (
        <DetailRow 
          primaryKey={item.primaryKey}
          secondaryKey={item.secondaryKey}
          val={item.val}
          />
      );

    return (     
        <View style={styles.container}>
            {console.log("screen state", state)}
            <View style={{ width: deviceWidth, alignItems: 'center', paddingTop: 30 }}>
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
            <Separator />
            <FlatList
                data={state.dataArray}
                renderItem={renderItem}
                keyExtractor={item => {
                    return item.primaryKey + (item.secondaryKey || "")}
                } 
                ItemSeparatorComponent = { () => <Separator />}           
            />
        </View>
    );
}
export default DetailScreen;
