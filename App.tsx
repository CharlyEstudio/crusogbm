import React from 'react';

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import {Home} from './src/screens/home/home';
import {Pokemon} from './src/screens/pokemon/Pokemon';

const Stack: any = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'home'} component={Home} />
        <Stack.Screen name={'pokemon'} component={Pokemon} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
