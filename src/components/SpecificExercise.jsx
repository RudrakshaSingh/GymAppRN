import { StyleSheet, Text, View, Image, ScrollView, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from '../../tailwind';

const SpecificExercise = ({ route }) => {
  const { title } = route.params || {};
  const { image } = route.params || {};
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = '16a8929febmsh1e263465ef36edfp14c90bjsn1bff4e3bc411'; // replace with your key

  const getExercises = async () => {
    try {
      const response = await fetch(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${title.toLowerCase()}?limit=10&offset=0`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': API_KEY,
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        },
      });

      const data = await response.json();
      
      // Directly set the data if it's an array
      // If data is not an array, it might be an object with an array property
      const exerciseData = Array.isArray(data) ? data : data.exercises || [];
      
      // Limit to first 10 exercises
      setExercises(exerciseData); 
    } catch (error) {
      console.error('Error fetching exercises:', error);
      // Optional: Set exercises to an empty array or handle error state
      setExercises([]);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getExercises();
    
  }, [title]); // Added title as a dependency to refetch if title changes

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <ScrollView
        contentContainerStyle={tw`p-4`}
        showsVerticalScrollIndicator={false}
        bounces={true}
      >
        <Text style={tw`text-3xl font-bold tracking-wider text-center`}>
          <Text style={tw`text-pink-600`}>{title}</Text> Exercise
        </Text>

        <Image
          source={{ uri: image }}
          style={[
            tw`self-center mt-6 rounded-full border-2 border-pink-600`,
            { width: 220, height: 220 },
          ]}
          resizeMode="cover"
        />

        <View style={tw`mt-8`}>
          <Text style={tw`text-lg font-semibold mb-4 text-center border-solid border-1 bg-gray-50 w-1/2 self-center p-2 rounded-lg`}>
            Available Workouts
          </Text>
          {loading ? (
            <ActivityIndicator size="large" color="#f472b6" />
          ) : (
            <View style={tw`flex-row flex-wrap justify-between gap-4`}>
              {exercises.map((item, index) => (
                <View
                  key={index}
                  style={tw`w-[47%] h-50 bg-gray-100 mb-2 rounded-xl pt-4 pb-4 items-center justify-between shadow-md`}
                >
                  <Image
                    source={item.gifUrl ? { uri: item.gifUrl } : require('../../assets/male.png')}
                    style={tw`w-[90%] h-[80%] border border-pink-600 rounded-lg`}
                  />
                  <Text style={tw`text-pink-800 text-1xl font-semibold text-center`}>
                    {item.name || 'Unknown Exercise'}
                  </Text>
                </View>
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SpecificExercise;