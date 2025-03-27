import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import tw from '../../tailwind';
import bodyParts from './bodyParts';

const { width } = Dimensions.get('window');

const Exercise = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <View style={tw`mt-6`}>
      <Text style={tw`text-3xl text-gray-900 font-bold mb-5`}>
        Exercise Categories
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={tw`pb-3 items-center bg-gray-50`}
      >
        {bodyParts.map((part) => (
          <TouchableOpacity 
            key={part.id}
            onPress={() => setSelectedCategory(part.id)}
            style={[
              tw`mr-4 rounded-xl overflow-hidden shadow-md`,
              {
                backgroundColor: selectedCategory === part.id 
                  ? '#eeeeee' : 'white',
                borderWidth: 1,
                borderColor: selectedCategory === part.id 
                  ? 'rgb(219 39 119)' : 'rgba(0,0,0,0.1)',
              }
            ]}
          >
            <View style={tw`items-center`}>
              <Image
                source={{ uri: part.image }}
                style={[
                  tw`w-40 h-40 rounded-xl`,
                  {
                    opacity: selectedCategory === part.id ? 0.8 : 1,
                    transform: [
                      { scale: selectedCategory === part.id ? 0.95 : 1 }
                    ]
                  }
                ]}
                resizeMode="cover"
              />
              <Text 
                style={[
                  tw`mt-3 mb-3 text-base font-semibold`,
                  {
                    color: selectedCategory === part.id 
                      ? 'rgb(219 39 119)' : 'rgba(55, 65, 81, 1)'
                  }
                ]}
              >
                {part.title}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Exercise;