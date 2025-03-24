import { SafeAreaView, Image, Text,  View, Pressable } from 'react-native';
import React from 'react';
import tw from '../../tailwind';


const Start = () => {
  return (
    <SafeAreaView style={tw`flex-1`}>
      <Image 
        source={{ uri: 'https://images.unsplash.com/photo-1577221084712-45b0445d2b00?q=80&w=3098&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
        style={[tw`w-full h-full`, { resizeMode: 'cover' }]} // Full-screen image
      />

      <SafeAreaView style={tw`absolute inset-0 flex-1 justify-end`}>
        <View style={tw`mb-10 mx-10 items-center`}>
          {/* Title */}
          <Text style={tw`text-3xl text-center font-bold text-white mb-4`}>
            Best <Text style={tw`text-red-500`}>Workouts</Text> For You
          </Text>

          {/* Button */}
          <Pressable
            style={tw`bg-red-500 rounded-full py-4 w-full shadow-lg border border-white`}
            onPress={() => console.log('Button pressed!')} // Add your action here
          >
            <Text style={tw`text-white text-center text-lg font-semibold`}>
              Start Now
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default Start;