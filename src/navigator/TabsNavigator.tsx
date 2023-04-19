import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PokemonStackNavigator } from './PokemonStackNavigator';
import { SearchScreen } from '../screens/SearchScreen';
import Icon from 'react-native-vector-icons/Ionicons'
import { TeamsScreen } from '../screens/TeamsScreen';
import { TeamsStackNavigator } from './TeamsStackNavigator';

const Tab = createBottomTabNavigator();

export const TabsNavigator = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}  
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#5856D6',
                tabBarLabelStyle: {
                    marginBottom: 5,
                    fontSize: 14
                },
                tabBarStyle: {
                    borderWidth: 0,
                    elevation: 0,
                    position: 'absolute',
                    backgroundColor: 'rgba(255, 255, 255, 0.85)',
                },
            }}      
        >
            <Tab.Screen 
                name="Home" 
                component={PokemonStackNavigator} 
                options={{
                    tabBarLabel: 'Pokedex',
                    tabBarIcon: ( ({color}) => (
                        <Icon color={color} size={25} name='list-outline'/>
                    ))
                }}    
            />
            <Tab.Screen 
                name="SearchScreen" 
                component={SearchScreen} 
                options={{
                    tabBarLabel: 'Buscar',
                    tabBarIcon: ( ({color}) => (
                        <Icon color={color} size={25} name='search-outline'/>
                    ))
                }}      
            />
            <Tab.Screen 
                name="Teams" 
                component={TeamsStackNavigator} 
                options={{
                    tabBarLabel: 'Equipos',
                    tabBarIcon: ( ({color}) => (
                        <Icon color={color} size={25} name='layers-outline'/>
                    ))
                }}      
            />
        </Tab.Navigator>
    );
}