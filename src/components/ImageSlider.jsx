import React, { useState, useRef } from 'react';
import { View, Image, FlatList, Dimensions, TouchableOpacity, Text } from 'react-native';
import tw from '../../tailwind';

const { width } = Dimensions.get('window');
const viewConfigRef = { viewAreaCoveragePercentThreshold: 95 };

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  // Sample workout images from web sources
  const images = [
    {
      uri: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438',
      title: 'Weight Training'
    },
    {
      uri: 'https://images.unsplash.com/photo-1518310383802-640c2de311b6',
      title: 'HIIT Workout'
    },
    {
      uri: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b',
      title: 'Cardio Session'
    },
  ];

  const onViewRef = useRef(({ changed }) => {
    if (changed[0].isViewable) {
      setCurrentIndex(changed[0].index);
    }
  });

  const renderItem = ({ item }) => {
    return (
      <View style={[tw`justify-center items-center`, { width: width - 40 }]}>
        <View style={tw`relative w-full h-48 rounded-xl overflow-hidden`}>
          <Image
            source={{ uri: item.uri }}
            style={tw`w-full h-full`}
            resizeMode="cover"
          />
          <View style={tw`absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2`}>
            <Text style={tw`text-white font-bold text-lg`}>{item.title}</Text>
          </View>
        </View>
      </View>
    );
  };

  const scrollToIndex = (index) => {
    flatListRef.current?.scrollToIndex({
      animated: true,
      index: index,
    });
  };

  return (
    <View style={tw`mt-6`}>
      <FlatList
        ref={flatListRef}
        data={images}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef}
        style={tw`w-full`}
        snapToInterval={width - 40}
        snapToAlignment="center"
        decelerationRate="fast"
      />

      {/* Dots indicator */}
      <View style={tw`flex-row justify-center mt-4`}>
        {images.map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => scrollToIndex(index)}
            style={tw`mx-1 w-2 h-2 rounded-full ${
              currentIndex === index ? 'bg-pink-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </View>
    </View>
  );
};

export default ImageSlider;