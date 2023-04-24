import { createStackNavigator } from '@react-navigation/stack';
import { TeamScreen } from '../screens/TeamScreen';
import { TeamsScreen } from '../screens/TeamsScreen';
import { AddPokemonScreen } from '../screens/AddPokemonScreen';
import { PokemonScreen } from '../screens/PokemonScreen';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';


export type TeamsRootStackParams = {
    TeamsScreen: undefined;
    TeamScreen: undefined;
    AddPokemonScreen: undefined;
    PokemonScreen: { pokemon: SimplePokemon, bgColor: string, fontColor: string, addPossible: boolean};
}


const Stack = createStackNavigator<TeamsRootStackParams>();

export const TeamsStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle:{
                    backgroundColor: 'white'
                }
            }}
        >
            <Stack.Screen name="TeamsScreen" component={TeamsScreen} />
            <Stack.Screen name="TeamScreen" component={TeamScreen} />
            <Stack.Screen name="AddPokemonScreen" component={AddPokemonScreen} />
            <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
        </Stack.Navigator>
    );
}