import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const Pokemon = ({route}: any) => {
  const [poke, setPoke] = useState<any>();

  useEffect(() => {
    const {pokemon} = route.params;
    setPoke(pokemon);

    return () => {};
  }, [route.params]);

  return (
    <SafeAreaView>
      <View>
        <Text>Pokemon {poke?.name}</Text>
      </View>
    </SafeAreaView>
  );
};
