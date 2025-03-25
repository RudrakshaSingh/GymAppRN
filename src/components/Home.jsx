import { Text, View, Pressable } from 'react-native';
import React from 'react';
import tw from '../../tailwind';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = ({ navigation,route }) => {
  const userData=route.params;
  console.log(userData);
  return (
    <SafeAreaView style={tw`flex-1 bg-gray-100 justify-center items-center`}>
      <Text style={tw`text-2xl font-bold text-black mb-4`}>Welcome to Your Workouts!</Text>
      <Pressable
        style={tw`bg-blue-500 rounded-full py-3 px-6`}
        onPress={() => navigation.navigate('Start')}
      >
        <Text style={tw`text-white text-center text-lg font-semibold`}>Back to Start</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Home;