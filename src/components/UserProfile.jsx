import {  Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, User, Calendar, Ruler,  } from 'lucide-react-native';
import tw from '../../tailwind';

const UserProfile = ({ navigation, route }) => {
  const { userData } = route.params;

  // Handle case where no user data is passed
  if (!userData) {
    return (
      <SafeAreaView style={tw`flex-1 bg-gray-50 p-4 justify-center items-center`}>
        <View style={tw`bg-white p-6 rounded-xl shadow-md w-full max-w-sm`}>
          <Text style={tw`text-lg text-gray-600 text-center mb-4`}>No user data available</Text>
          <TouchableOpacity
            style={tw`bg-pink-600 px-4 py-3 rounded-xl`}
            onPress={() => navigation.goBack()}
          >
            <Text style={tw`text-white font-bold text-center`}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  // Format height display based on the user's chosen unit
  const displayHeight = userData.heightUnit === "ft_in"
    ? `${userData.height.feet}'${userData.height.inches}"`
    : `${userData.height.cm} cm`;

  return (
    <SafeAreaView style={tw`flex-1 bg-gray-50`}>
      {/* Header */}
      <View style={tw`bg-pink-600 px-5 py-4 flex-row items-center`}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={tw`p-2 rounded-full bg-pink-700`}
        >
          <ArrowLeft size={20} color="#ffffff" />
        </TouchableOpacity>
        <Text style={tw`text-white font-bold text-xl ml-4`}>Profile</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Avatar */}
        <View style={tw`items-center mt-6 mb-8`}>
          <View style={tw`w-28 h-28 rounded-full bg-pink-100 items-center justify-center border-4 border-white shadow-md`}>
            <Text style={tw`text-4xl font-bold text-pink-600`}>{userData.name.charAt(0)}</Text>
          </View>
          <Text style={tw`text-2xl font-bold text-gray-800 mt-4`}>{userData.name}</Text>
          <View style={tw`flex-row mt-1`}>
            <Text style={tw`text-gray-500`}>{userData.age} years • </Text>
            <Text style={tw`text-gray-500`}>
              {userData.gender.charAt(0).toUpperCase() + userData.gender.slice(1)}
            </Text>
          </View>
        </View>

        {/* User Details Section */}
        <View style={tw`px-5 pb-6`}>
          <Text style={tw`text-lg font-bold text-gray-700 mb-4 px-1`}>Personal Information</Text>

          <View style={tw`bg-white rounded-2xl shadow-sm overflow-hidden mb-6`}>
            {/* Name */}
            <View style={tw`flex-row items-center p-4 border-b border-gray-100`}>
              <View style={tw`w-10 h-10 rounded-full bg-pink-100 items-center justify-center mr-4`}>
                <User size={20} color="#db2777" />
              </View>
              <View style={tw`flex-1`}>
                <Text style={tw`text-sm text-gray-500`}>Name</Text>
                <Text style={tw`text-lg font-medium text-gray-800`}>{userData.name}</Text>
              </View>
            </View>

            {/* Age */}
            <View style={tw`flex-row items-center p-4 border-b border-gray-100`}>
              <View style={tw`w-10 h-10 rounded-full bg-blue-100 items-center justify-center mr-4`}>
                <Calendar size={20} color="#3b82f6" />
              </View>
              <View style={tw`flex-1`}>
                <Text style={tw`text-sm text-gray-500`}>Age</Text>
                <Text style={tw`text-lg font-medium text-gray-800`}>{userData.age} years</Text>
              </View>
            </View>

            {/* Gender */}
            <View style={tw`flex-row items-center p-4 border-b border-gray-100`}>
              <View style={tw`w-10 h-10 rounded-full bg-purple-100 items-center justify-center mr-4`}>
                <User size={20} color="#8b5cf6" />
              </View>
              <View style={tw`flex-1`}>
                <Text style={tw`text-sm text-gray-500`}>Gender</Text>
                <Text style={tw`text-lg font-medium text-gray-800`}>
                  {userData.gender.charAt(0).toUpperCase() + userData.gender.slice(1)}
                </Text>
              </View>
            </View>

            {/* Height */}
            <View style={tw`flex-row items-center p-4`}>
              <View style={tw`w-10 h-10 rounded-full bg-green-100 items-center justify-center mr-4`}>
                <Ruler size={20} color="#10b981" />
              </View>
              <View style={tw`flex-1`}>
                <Text style={tw`text-sm text-gray-500`}>Height</Text>
                <Text style={tw`text-lg font-medium text-gray-800`}>{displayHeight}</Text>
              </View>
            </View>
          </View>

          {/* Edit Profile Button */}
          <TouchableOpacity
            style={tw`bg-pink-600 px-4 py-3 rounded-xl shadow-sm mb-6`}
          >
            <Text style={tw`text-white font-bold text-center`}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserProfile;