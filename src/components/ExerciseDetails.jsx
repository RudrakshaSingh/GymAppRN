import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, ActivityIndicator, TouchableOpacity, Image, Dimensions, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";
import tw from "../../tailwind";
import { User, Target, Zap, Dumbbell, ArrowLeft, Clock, Share2, Bookmark, Heart, Info, Plus } from "lucide-react-native";

const { width } = Dimensions.get("window");

const capitalizeWords = (str) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

const ExerciseDetails = ({ route, navigation }) => {
  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState(false);
  const [liked, setLiked] = useState(false);
  const [viewCount, setViewCount] = useState(Math.floor(Math.random() * 1000) + 100);
  const [activeTab, setActiveTab] = useState("muscles"); // Changed default tab to muscles
  const [addedToWorkout, setAddedToWorkout] = useState(false);
  const { exercise } = route.params || {};
  
  useEffect(() => {
    // Simulate loading state for WebView
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  if (!exercise) {
    return (
      <SafeAreaView style={tw`flex-1 bg-white`}>
        <View style={tw`flex-1 justify-center items-center`}>
          <Info size={48} color="#f472b6" />
          <Text style={tw`text-center mt-4 text-gray-600 text-lg`}>No exercise data available</Text>
          <TouchableOpacity 
            style={tw`mt-6 bg-pink-600 py-3 px-8 rounded-full`}
            onPress={() => navigation.goBack()}
          >
            <Text style={tw`text-white font-bold`}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const difficultyLevel = exercise.name.length % 3; // Just for demo purposes
  const difficultyText = ["Beginner", "Intermediate", "Advanced"][difficultyLevel];
  const difficultyColor = ["text-green-600", "text-yellow-600", "text-red-600"][difficultyLevel];
  
  const handleAddToWorkout = () => {
    setAddedToWorkout(true);
    // Add your logic to add to workout here
    setTimeout(() => {
      setAddedToWorkout(false);
    }, 2000);
  };
  
  return (
    <SafeAreaView style={tw`flex-1 bg-gray-50`}>
      {/* Header with back button */}
      <View style={tw`flex-row justify-between items-center px-4 py-3 bg-white border-b border-gray-200`}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={tw`p-2`}>
          <ArrowLeft size={24} color="#f472b6" />
        </TouchableOpacity>
        <Text style={tw`text-lg font-bold text-gray-800`}>Exercise Details</Text>
        <View style={tw`flex-row`}>
          <TouchableOpacity onPress={() => setSaved(!saved)} style={tw`p-2`}>
            <Bookmark size={22} color={saved ? "#f472b6" : "#9ca3af"} fill={saved ? "#f472b6" : "none"} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setLiked(!liked)} style={tw`p-2`}>
            <Heart size={22} color={liked ? "#f472b6" : "#9ca3af"} fill={liked ? "#f472b6" : "none"} />
          </TouchableOpacity>
        </View>
      </View>
      
      <ScrollView contentContainerStyle={tw`pb-8`} showsVerticalScrollIndicator={false}>
        {/* Exercise Title Card */}
        <View style={tw`bg-white px-4 pt-4 pb-3 shadow-sm`}>
          <Text style={tw`text-2xl text-gray-800 font-bold text-center capitalize mb-1`}>
            {capitalizeWords(exercise.name || "Unnamed Exercise")}
          </Text>
          
          <View style={tw`flex-row justify-center items-center mt-1 mb-3`}>
            <View style={tw`flex-row items-center mr-4`}>
              <Clock size={14} color="#9ca3af" style={tw`mr-1`} />
              <Text style={tw`text-gray-500 text-sm`}>~15 min</Text>
            </View>
            <View style={tw`flex-row items-center mr-4`}>
              <Zap size={14} color="#9ca3af" style={tw`mr-1`} />
              <Text style={tw`text-gray-500 text-sm`}>120 cal</Text>
            </View>
            <View style={tw`flex-row items-center`}>
              <User size={14} color="#9ca3af" style={tw`mr-1`} />
              <Text style={tw`text-gray-500 text-sm`}>{viewCount} views</Text>
            </View>
          </View>
          
          <View style={tw`flex-row justify-center mb-3`}>
            <View style={tw`bg-gray-100 px-3 py-1 rounded-full mr-2`}>
              <Text style={tw`text-sm font-medium text-gray-700`}>{capitalizeWords(exercise.bodyPart)}</Text>
            </View>
            <View style={tw`bg-gray-100 px-3 py-1 rounded-full mr-2`}>
              <Text style={tw`text-sm font-medium text-gray-700`}>{capitalizeWords(exercise.target)}</Text>
            </View>
            <View style={tw`bg-gray-100 px-3 py-1 rounded-full`}>
              <Text style={tw`text-sm font-medium ${difficultyColor}`}>{difficultyText}</Text>
            </View>
          </View>
          
          {/* Add to Workout Button */}
          <TouchableOpacity 
            style={tw`flex-row items-center justify-center bg-pink-600 py-3 px-6 rounded-lg mx-6 mb-3 ${addedToWorkout ? 'bg-green-600' : ''}`}
            onPress={handleAddToWorkout}
          >
            {addedToWorkout ? (
              <Text style={tw`text-white font-bold text-center`}>Added to Workout!</Text>
            ) : (
              <>
                <Plus size={18} color="#ffffff" style={tw`mr-2`} />
                <Text style={tw`text-white font-bold text-center`}>Add to Workout</Text>
              </>
            )}
          </TouchableOpacity>
        </View>
        
        {/* Animation section */}
        <View style={tw`bg-white px-4 py-5 mt-3 shadow-sm`}>
          <View style={tw`flex-row justify-between items-center mb-3`}>
            <Text style={tw`text-lg font-bold text-gray-800`}>Exercise Animation</Text>
            <TouchableOpacity style={tw`flex-row items-center`}>
              <Share2 size={18} color="#6b7280" />
              <Text style={tw`ml-1 text-gray-600 text-sm`}>Share</Text>
            </TouchableOpacity>
          </View>
          
          {exercise.gifUrl && (
            <View style={tw`rounded-lg overflow-hidden border border-gray-200 mb-3`}>
              {loading && (
                <View style={[tw`items-center justify-center bg-gray-100`, { height: width * 0.8 }]}>
                  <ActivityIndicator size="large" color="#f472b6" />
                  <Text style={tw`mt-2 text-gray-500`}>Loading animation...</Text>
                </View>
              )}
              
              <WebView
                source={{ uri: exercise.gifUrl }}
                style={[{ width: "100%", height: width * 0.8 }, loading ? tw`hidden` : tw``]}
                scalesPageToFit={true}
                javaScriptEnabled={true}
                scrollEnabled={false}
                onLoad={() => setLoading(false)}
              />
            </View>
          )}
          
          <View style={tw`flex-row justify-center mt-1`}>
            <View style={tw`flex-row items-center bg-pink-50 px-4 py-2 rounded-full`}>
              <Dumbbell size={16} color="#f472b6" style={tw`mr-2`} />
              <Text style={tw`text-sm font-medium text-pink-600`}>
                {capitalizeWords(exercise.equipment)}
              </Text>
            </View>
          </View>
        </View>
        
        {/* Tabs for Muscles, Instructions and Tips */}
        <View style={tw`bg-white px-4 pt-3 mt-3 shadow-sm`}>
          <View style={tw`flex-row justify-between mb-3 border-b border-gray-200`}>
            <TouchableOpacity 
              style={tw`flex-1 pb-3 ${activeTab === "muscles" ? "border-b-2 border-pink-600" : ""}`}
              onPress={() => setActiveTab("muscles")}
            >
              <Text style={tw`font-bold text-center ${activeTab === "muscles" ? "text-pink-600" : "text-gray-500"}`}>
                Muscles
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={tw`flex-1 pb-3 ${activeTab === "instructions" ? "border-b-2 border-pink-600" : ""}`}
              onPress={() => setActiveTab("instructions")}
            >
              <Text style={tw`font-bold text-center ${activeTab === "instructions" ? "text-pink-600" : "text-gray-500"}`}>
                Instructions
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={tw`flex-1 pb-3 ${activeTab === "tips" ? "border-b-2 border-pink-600" : ""}`}
              onPress={() => setActiveTab("tips")}
            >
              <Text style={tw`font-bold text-center ${activeTab === "tips" ? "text-pink-600" : "text-gray-500"}`}>
                Tips
              </Text>
            </TouchableOpacity>
          </View>
          
          {/* Tab Content */}
          <View style={tw`pb-6`}>
            {activeTab === "muscles" && (
              <View style={tw`pt-2`}>
                <View style={tw`mb-5`}>
                  <Text style={tw`text-base font-bold text-gray-800 mb-2`}>Primary Target</Text>
                  <View style={tw`flex-row items-center bg-pink-50 p-4 rounded-lg shadow-sm`}>
                    <Target color="#f472b6" size={28} style={tw`mr-3`} />
                    <View>
                      <Text style={tw`text-lg font-bold text-gray-800`}>
                        {capitalizeWords(exercise.target)}
                      </Text>
                      <Text style={tw`text-sm text-gray-600`}>
                        Main muscle group this exercise focuses on
                      </Text>
                    </View>
                  </View>
                </View>
                
                <Text style={tw`text-base font-bold text-gray-800 mb-2`}>Secondary Muscles</Text>
                {exercise.secondaryMuscles && exercise.secondaryMuscles.length > 0 ? (
                  <View style={tw`flex-row flex-wrap`}>
                    {exercise.secondaryMuscles.map((muscle, index) => (
                      <View 
                        key={index} 
                        style={tw`bg-gray-100 px-4 py-3 rounded-lg mr-2 mb-2 flex-row items-center shadow-sm`}
                      >
                        <Zap size={16} color="#f59e0b" style={tw`mr-2`} />
                        <Text style={tw`text-gray-700 font-medium`}>
                          {capitalizeWords(muscle)}
                        </Text>
                      </View>
                    ))}
                  </View>
                ) : (
                  <Text style={tw`text-base text-gray-600 italic`}>No secondary muscles specified</Text>
                )}
                
                <View style={tw`mt-5 p-4 bg-gray-50 rounded-lg border border-gray-100`}>
                  <Text style={tw`text-sm text-gray-700 leading-5`}>
                    This exercise primarily targets your {exercise.target}, while also engaging 
                    {exercise.secondaryMuscles && exercise.secondaryMuscles.length > 0 
                      ? ' your ' + exercise.secondaryMuscles.map(capitalizeWords).join(' and ') 
                      : ' other supporting muscles'}
                    . It's a great addition to your {exercise.bodyPart} workout routine.
                  </Text>
                </View>
              </View>
            )}
            
            {activeTab === "instructions" && (
              <View style={tw`pt-2`}>
                {exercise.instructions && exercise.instructions.length > 0 ? (
                  exercise.instructions.map((instruction, index) => (
                    <View key={index} style={tw`flex-row mb-4 bg-white p-3 rounded-lg shadow-sm`}>
                      <View style={tw`h-7 w-7 rounded-full bg-pink-100 items-center justify-center mr-3 mt-0.5`}>
                        <Text style={tw`font-bold text-pink-600`}>{index + 1}</Text>
                      </View>
                      <Text style={tw`text-base text-gray-700 flex-1 leading-6`}>
                        {instruction}
                      </Text>
                    </View>
                  ))
                ) : (
                  <Text style={tw`text-base text-gray-600 italic py-4`}>No instructions available</Text>
                )}
              </View>
            )}
            
            {activeTab === "tips" && (
              <View style={tw`pt-2`}>
                <View style={tw`p-4 bg-yellow-50 rounded-lg mb-4 border-l-4 border-yellow-400 shadow-sm`}>
                  <Text style={tw`text-base font-bold text-yellow-800 mb-2`}>Form Tips</Text>
                  <Text style={tw`text-gray-700 leading-6`}>
                    • Maintain proper posture throughout the movement{'\n'}
                    • Focus on controlled motion rather than speed{'\n'}
                    • Keep your core engaged for better stability{'\n'}
                    • Breathe out during exertion, in during release
                  </Text>
                </View>
                
                <View style={tw`p-4 bg-blue-50 rounded-lg mb-4 border-l-4 border-blue-400 shadow-sm`}>
                  <Text style={tw`text-base font-bold text-blue-800 mb-2`}>Common Mistakes</Text>
                  <Text style={tw`text-gray-700 leading-6`}>
                    • Using too much weight too quickly{'\n'}
                    • Arching your back excessively{'\n'}
                    • Rushing through repetitions{'\n'}
                    • Not using full range of motion
                  </Text>
                </View>
                
                <View style={tw`p-4 bg-green-50 rounded-lg border-l-4 border-green-400 shadow-sm`}>
                  <Text style={tw`text-base font-bold text-green-800 mb-2`}>Progression</Text>
                  <Text style={tw`text-gray-700 leading-6`}>
                    • Start with lighter weight and perfect your form{'\n'}
                    • Gradually increase resistance as you get stronger{'\n'}
                    • Add more sets or reps before increasing weight{'\n'}
                    • Consider slowing down the movement for more intensity
                  </Text>
                </View>
              </View>
            )}
          </View>
        </View>
        
        {/* Similar Exercises - placeholder section */}
        <View style={tw`bg-white px-4 py-5 mt-3 shadow-sm`}>
          <Text style={tw`text-lg font-bold text-gray-800 mb-3`}>Similar Exercises</Text>
          <Text style={tw`text-gray-500 italic mb-3`}>Try these other exercises that target the same muscle groups</Text>
          
          <View style={tw`flex-row overflow-hidden`}>
            <TouchableOpacity style={tw`bg-pink-600 py-3 px-6 rounded-lg flex-1 shadow-sm`}>
              <Text style={tw`text-white font-bold text-center`}>Browse Related Exercises</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExerciseDetails;