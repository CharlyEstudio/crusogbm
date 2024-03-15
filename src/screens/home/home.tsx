import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {DUMMY_API} from '../../../constants/data';
import {useEffect, useState} from 'react';

// import axios from 'axios';

export const Home = ({navigation}: any) => {
  const [value, setValue] = useState('ivysaur');
  // const [apiValue, setApiValue] = useState([]);
  const [listPokemon, setListPokemon] = useState<any[]>([]);

  const startApp = async () => {
    // console.log('startApp');
    // const resp = await axios.get('https://pokeapi.co/api/v2/pokemon/hola');
    // console.log(resp);

    setListPokemon(DUMMY_API);
  };

  useEffect(() => {
    startApp();
    return () => {};
  }, []);

  const navegar = (pokemon: any) => {
    navigation.navigate('pokemon', {pokemon});
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contenedor}>
        <View style={styles.wrapInpu}>
          <TextInput
            editable={true}
            value={value}
            onChangeText={text => setValue(text)}
            style={styles.input}
          />
        </View>
        <FlatList
          data={listPokemon}
          renderItem={({item}: any) => {
            return (
              <TouchableOpacity
                style={styles.item}
                onPress={() => navegar(item)}>
                <Text>{item.name}</Text>
              </TouchableOpacity>
            );
          }}
        />
        {/* <Button title="Obtener" onPress={startApp} /> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    height: 45,
    width: 200,
    borderRadius: 20,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapInpu: {
    marginTop: 20,
    height: 56,
    width: 340,
    alignSelf: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 22,
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 2,
  },
  input: {
    height: 56,
    width: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgb(237,238,241)',
  },

  contenedor: {
    flex: 1,

    paddingBottom: 20,
  },
});
