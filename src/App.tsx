import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Props, StackParamList } from './views/Types';
import TodoList from './views/TodoList';
import HomeScreen from './views/Home/HomeScreen';
import { Provider } from 'react-redux';
import store from './app/index';

const Stack = createStackNavigator<StackParamList>();
// home component that defines the navigation stack, the home screen and the application state provider.
function App() {
    return (
        <Provider store={store}>
        <NavigationContainer>
                <Stack.Navigator initialRouteName="Home"
                    screenOptions={{
                        headerShown: false
                    }}
                >

                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="TodoList" component={TodoList} />
            </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

export default App;