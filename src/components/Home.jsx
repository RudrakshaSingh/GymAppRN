import { SafeAreaView, Text, View, Image, ScrollView, TouchableOpacity,StatusBar } from 'react-native';
import React from 'react';
import tw from '../../tailwind';
import ImageSlider from './ImageSlider';
import WeeklyExercise from './WeeklyExercise';
import ExerciseAllBodyParts from './ExerciseAllBodyParts';
import { LinearGradient } from 'expo-linear-gradient';

const Home = ({ navigation, route }) => {
  const { userData } = route.params || {};

  return (
    <SafeAreaView style={tw`flex-1 bg-gray-50 `}>
      <StatusBar hidden={true} />
      <StatusBar style="dark" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Section with Shadow */}
        <View style={tw`px-5 pt-4 pb-2 bg-white shadow-md`}>
          <View style={tw`flex-row items-center justify-between`}>
            {/* App Logo & Title */}
            <View>
              <Text style={tw`text-3xl text-gray-800 font-bold tracking-wider`}>
                READY TO
              </Text>
              <Text style={tw`text-3xl text-pink-600 font-bold tracking-wider`}>
                WORKOUT
              </Text>
            </View>

            {/* User Avatar with Drop Shadow */}
            <TouchableOpacity 
              onPress={() => navigation.navigate('UserProfile', { userData })} 
              style={tw`w-14 h-14 rounded-full shadow-lg border-2 border-pink-100`}
            >
              <Image
                source={require('../../assets/male.png')}
                style={tw`w-full h-full rounded-full`}
                resizeMode="cover"
              />
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Main Content */}
        <View style={tw`flex-1 px-5 py-4`}>
          {/* Welcome Message */}
          <View style={tw`mb-4`}>
            <Text style={tw`text-lg text-gray-500 font-medium`}>
              Hello, {userData?.name || 'Fitness Enthusiast'}!
            </Text>
            <Text style={tw`text-sm text-gray-400`}>
              Let's crush your fitness goals today 💪
            </Text>
          </View>
          
          {/* Featured Workout Banner */}
          <View style={tw`mb-6`}>
            <ImageSlider />
          </View>
          
          {/* Section Title */}
          <View style={tw`flex-row items-center mb-4`}>
            <View style={tw`w-1.5 h-6 bg-pink-600 rounded-full mr-2`}></View>
            <Text style={tw`text-xl font-bold text-gray-800`}>Target Specific Areas</Text>
          </View>
          
          {/* Body Parts Section */}
          <View style={tw`mb-6`}>
            <ExerciseAllBodyParts navigation={navigation} />
          </View>
          
          {/* Section Title */}
          <View style={tw`flex-row items-center mb-4`}>
            <View style={tw`w-1.5 h-6 bg-pink-600 rounded-full mr-2`}></View>
            <Text style={tw`text-xl font-bold text-gray-800`}>Weekly Program</Text>
          </View>
          
          {/* Weekly Exercise Section */}
          <View style={tw`mb-6`}>
            <WeeklyExercise navigation={navigation} />
          </View>
          
          {/* Quick Start Section */}
          <TouchableOpacity 
            onPress={() => navigation.navigate('QuickWorkout')}
            style={tw`mb-6`}
          >
            <LinearGradient
              colors={['#f472b6', '#ec4899']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={tw`py-4 px-6 rounded-xl shadow-md`}
            >
              <View style={tw`flex-row items-center justify-between`}>
                <View>
                  <Text style={tw`text-white font-bold text-lg`}>Quick 10-Min Workout</Text>
                  <Text style={tw`text-pink-100 text-sm mt-1`}>Perfect for busy days</Text>
                </View>
                <View style={tw`bg-white/20 p-2 rounded-full`}>
                  <Text style={tw`text-white font-bold`}>GO</Text>
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;