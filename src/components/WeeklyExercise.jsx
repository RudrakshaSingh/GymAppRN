import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import tw from '../../tailwind';
import weeklyPlanData from './weeklyPlanData';

const WeeklyExercise = ({ navigation }) => {  // Added navigation prop
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <View style={tw`mt-6`}>
      <Text style={tw`text-3xl text-gray-900 font-bold mb-5 tracking-wide`}>
        Weekly Exercise Plan  {/* Fixed typo */}
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={tw`pb-3 items-center bg-gray-50`}
      >
        {weeklyPlanData.map((part) => (
          <TouchableOpacity
            key={part.week}
            onPress={() => {
              setSelectedCategory(part.week);
            //   navigation.navigate('SpecificExercise', { 
            //     title: part.week,  // Using week as title since title isn't in data
            //     image: Image.resolveAssetSource(part.image).uri  // Convert require to uri
            //   });
            }}
            style={[
              tw`mr-4 rounded-xl overflow-hidden shadow-md`,
              {
                backgroundColor: selectedCategory === part.week ? "#eeeeee" : "white",
                borderWidth: 1,
                borderColor: selectedCategory === part.week ? "rgb(219 39 119)" : "rgba(0,0,0,0.1)",
              },
            ]}
          >
            <View style={tw`items-center`}>
              <Image
                source={part.image}  // Using require directly since it's local
                style={[
                  tw`w-45 h-45 rounded-xl `,
                  {
                    opacity: selectedCategory === part.week ? 0.8 : 1,
                    transform: [{ scale: selectedCategory === part.week ? 0.95 : 1 }],
                  },
                ]}
                resizeMode="cover"
              />
              <Text
                style={[
                  tw` mb-3 text-base font-semibold `,
                  {
                    color: selectedCategory === part.week ? "rgb(219 39 119)" : "rgba(55, 65, 81, 1)",
                  },
                ]}
              >
                {part.week}  {/* Using week as display text */}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default WeeklyExercise;