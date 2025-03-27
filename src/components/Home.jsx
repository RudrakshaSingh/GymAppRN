import { SafeAreaView, Text, View, Image } from 'react-native';
import React from 'react';
import tw from '../../tailwind';
import { StatusBar } from 'expo-status-bar';
import ImageSlider from './ImageSlider';
import Exercise from './Exercise';
import WeeklyExercise from './WeeklyExercise';

const Home = ({ navigation, route }) => {
  const { userData } = route.params || {};

  return (
    <SafeAreaView style={tw`flex-1 bg-white mt-10`}>
      <StatusBar style="dark" />
      <View style={tw`flex-1 px-5 pt-2`}>
        {/* Header Section */}
        <View style={tw`flex-row items-center justify-between mt-2`}>
          {/* Workout Title */}
          <View>
            <Text style={tw`text-4xl text-gray-800 font-bold tracking-wider`}>
              READY TO
            </Text>
            <Text style={tw`text-4xl text-pink-600 font-bold tracking-wider`}>
              WORKOUT
            </Text>
          </View>

          {/* User Avatar */}
          <View style={tw`w-12 h-12  rounded-full border`}>
            <Image
              source={require('../../assets/male.png')}
              style={tw`w-full h-full rounded-full`}
              resizeMode="cover"
            />
          </View>
        </View>
        <View><ImageSlider/></View>
        <View><Exercise navigation={navigation}/></View>
        <View><WeeklyExercise/></View>
      </View>
    </SafeAreaView>
  );
};

export default Home;