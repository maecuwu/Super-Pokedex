import { useState, useEffect, useContext } from 'react';
import { Text, View, FlatList, Dimensions } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { SearchInput } from '../components/SearchInput';
import { globalStyles } from '../theme/appTheme';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { PokemonCard } from '../components/PokemonCard';
import { LoadingComponent } from '../components/LoadingComponent';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { ThemeContext } from '../context/ThemeContext';


const { width: screenWidth } = Dimensions.get('window');


export const SearchScreen = () => {

    const { top } = useSafeAreaInsets();

    const { theme: { colors } } = useContext(ThemeContext);

    const { isFetching, simplePokemonList } = usePokemonSearch();
    const [searchString, setSearchString] = useState('');

    const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([]);

    useEffect(() => {

        if (searchString.length == 0) {
            return setPokemonFiltered([]);
        }

        if (isNaN(Number(searchString))) {
            setPokemonFiltered(
                simplePokemonList.filter(poke => poke.name.toLowerCase().
                    includes(searchString.toLowerCase()))
            );
        }
        else {
            const pokemonById = simplePokemonList.find(poke => poke.id === searchString);
            setPokemonFiltered(
                (pokemonById) ? [pokemonById] : []
            );
        }


    }, [searchString])



    if (isFetching) {
        return (
            <LoadingComponent />
        )
    }


    return (
        <View style={{ flex: 1, marginHorizontal: 20 }}>

            <SearchInput
                onDebounce={(value) => setSearchString(value)}
                style={{
                    position: 'absolute',
                    zIndex: 999,
                    width: screenWidth - 40,
                    top: top + 30
                }}
            />

            <FlatList
                ListHeaderComponent={
                    <Text style={{
                        ...globalStyles.title,
                        ...globalStyles.globalMargin,
                        top: top + 20,
                        color: colors.text,
                        marginBottom: 20,
                        paddingBottom: 10,
                        marginTop: top + 60
                    }}>
                        {searchString}
                    </Text>
                }

                data={pokemonFiltered}
                keyExtractor={(pokemon) => pokemon.id}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                renderItem={({ item }) => (
                    <PokemonCard pokemon={item} addPossible={false} editPossible={false}/>
                )}
            />
        </View>
    )
}