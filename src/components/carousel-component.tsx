import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import React, { useRef } from 'react';
import {
  Dimensions,
  FlatList,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';

type ImageType = {
  url: string;
  name: string;
};
type Props = { urls: ImageType[] };

export const CarouselComponent = ({ urls }: Props) => {
  const ref = useRef(null);
  const width = Dimensions.get('window').width;

  console.log(urls);
  console.log(urls.length);
  console.log(width, 'width');

  return (
    <View className="flex-row items-center bg-slate-500 py-2">
      <Pressable onPress={() => {}}>
        {({ pressed }) => (
          <View className="items-center justify-center rounded-full bg-neutral-100 shadow-lg">
            <Ionicons
              name={pressed ? 'arrow-back' : 'arrow-back-outline'}
              size={42}
              color={pressed ? 'gray' : 'black'}
            />
          </View>
        )}
      </Pressable>
      <FlatList
        contentContainerClassName="flex gap-5" // Tailwind classes for flex and gap
        horizontal
        data={urls}
        renderItem={({ item, index }) => {
          return (
            <View
              className=" w-[175px] items-center justify-center "
              key={index}
            >
              <Image
                source={{ uri: item.url }}
                className="h-[125px] w-[175px] rounded-lg border border-neutral-800"
              />
            </View>
          );
        }}
      />
      <Pressable onPress={() => {}}>
        {({ pressed }) => (
          <View className="items-center justify-center rounded-full bg-neutral-100 shadow-lg">
            <Ionicons
              name={pressed ? 'arrow-forward' : 'arrow-forward-outline'}
              size={42}
              color={pressed ? 'gray' : 'black'}
            />
          </View>
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
