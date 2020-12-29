// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { Foundation } from '@expo/vector-icons';
import { Text } from 'react-native';
import HomeScreen from './src/components/screens/HomeScreen';
import DetailScreen from './src/components/screens/DetailScreen';
import { store } from './src/store/ConfigureStore';



const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Contacts" component={HomeScreen} />
          <Stack.Screen 
            name="Details" 
            component={DetailScreen}
            options={({ route }) => {
              // @ts-ignore
              return (route.params.isFavorite ? {
                headerRight: route => {
                  return (
                    <Foundation 
                      name="star" 
                      size={24} 
                      color="#ecd577" 
                      style={{marginRight: 10}} />
                  )
                }
              } : {} )}
            }
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;