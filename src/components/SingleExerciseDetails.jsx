import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useState, useCallback, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Clock, Dumbbell, Zap, AlignJustify, Target, BarChart3, Play, Pause, Volume2, VolumeX } from 'lucide-react-native';
import YoutubeIframe from 'react-native-youtube-iframe';
import tw from '../../tailwind';

const SingleExerciseDetails = ({ route, navigation }) => {
  // Video state
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(true);
  const [muted, setMuted] = useState(false); // Initialize as unmuted

  // Get the exercise data from navigation params
  const { exercise, color = "#db2777", dayTitle } = route.params || {};

  // If no exercise data is provided, show an error state
  if (!exercise) {
    return (
      <SafeAreaView style={tw`flex-1 bg-white items-center justify-center p-4`}>
        <Text style={tw`text-red-500 text-lg font-semibold mb-4`}>Exercise data not found</Text>
        <TouchableOpacity
          style={tw`px-4 py-2 bg-gray-200 rounded-lg`}
          onPress={() => navigation.goBack()}
        >
          <Text style={tw`text-gray-800 font-medium`}>Go Back</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }


  const videoId = exercise.videoId || 'jLvqKgW-_G8';


  const {
    name,
    sets,
    reps,
    duration,
    rest,
    description,
    muscle,
    equipment
  } = exercise;

  // Video state change handler
  const onStateChange = useCallback((state) => {
    console.log("YouTube state changed:", state);
    if (state === 'ended') {
      setPlaying(false);
    }
    if (state === 'buffering' || state === 'unstarted') {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, []);

  // Toggle play/pause
  const togglePlaying = useCallback(() => {
    console.log("Toggling play state");
    setPlaying(prev => !prev);
  }, []);

  // Toggle mute
  const toggleMute = useCallback(() => {
    console.log("Toggling mute state");
    setMuted(prev => !prev);
  }, []);


  const formTips = [
    "Keep your back straight throughout the movement",
    "Breathe out during the exertion phase",
    "Maintain controlled movements rather than using momentum",
    "Focus on muscle contraction at the peak of the movement"
  ];


  const variations = [
    {
      name: `Assisted ${name}`,
      difficulty: "Easier",
      description: "Use assistance to make the exercise more manageable for beginners."
    },
    {
      name: `Weighted ${name}`,
      difficulty: "Harder",
      description: "Add additional weight to increase resistance and challenge."
    }
  ];

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      {/* Header */}
      <View style={tw`flex-row items-center px-4 py-3 border-b border-gray-100`}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={tw`p-2 -ml-2`}
        >
          <ArrowLeft size={24} color="#333" />
        </TouchableOpacity>
        <Text style={tw`ml-2 text-xl font-bold text-gray-800`}>
          Exercise Details
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* YouTube Video Player */}
        <View style={tw`w-full aspect-video bg-black relative`}>
          <YoutubeIframe
            height={300}
            width="100%"
            videoId={videoId}
            play={playing}
            onChangeState={onStateChange}
            mute={muted}
            volume={100}
            playerParams={{
              rel: 0,            // Disable related videos
              showinfo: 0,       // Hide video title and uploader info
              iv_load_policy: 3, // Disable annotations
              modestbranding: 1, // Minimal YouTube branding
              controls: 0,       // Hide the YouTube controls (since we have our own)
              preventFullScreen: true, // Prevent entering fullscreen
              fs: 0,             // Disable the fullscreen button
              cc_load_policy: 0, // Disable closed captions by default
              origin: 'https://www.youtube.com'
            }}
          />

          {/* Loading indicator */}
          {loading && (
            <View style={tw`absolute inset-0 items-center justify-center bg-black bg-opacity-30`}>
              <ActivityIndicator size="large" color="white" />
            </View>
          )}

          {/* Video Controls */}
          <View style={tw`absolute bottom-4 right-4 flex-row`}>
            {/* Mute/Unmute Button */}
            <TouchableOpacity
              style={tw`bg-white p-3 rounded-full shadow-md mr-3`}
              onPress={toggleMute}
            >
              {muted ? (
                <VolumeX size={20} color="#333" />
              ) : (
                <Volume2 size={20} color="#333" />
              )}
            </TouchableOpacity>

            {/* Play/Pause Button */}
            <TouchableOpacity
              style={tw`bg-white p-3 rounded-full shadow-md`}
              onPress={togglePlaying}
            >
              {playing ? (
                <Pause size={20} color={color} />
              ) : (
                <Play size={20} color={color} fill={color} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        {/* Exercise title and basic info */}
        <View style={tw`p-5`}>
          <Text style={tw`text-3xl font-bold text-gray-800 mb-1`}>{name}</Text>
          <Text style={tw`text-lg text-gray-600 mb-4`}>{dayTitle} Workout</Text>

          <View style={tw`flex-row flex-wrap mb-4`}>
            {muscle && (
              <View style={[tw`flex-row items-center mr-4 mb-2 px-3 py-1.5 rounded-full`, { backgroundColor: `${color}15` }]}>
                <Zap size={14} color={color} style={tw`mr-1.5`} />
                <Text style={[tw`font-medium`, { color }]}>{muscle}</Text>
              </View>
            )}

            {equipment && (
              <View style={tw`flex-row items-center mb-2 bg-gray-100 px-3 py-1.5 rounded-full`}>
                <Dumbbell size={14} color="#666" style={tw`mr-1.5`} />
                <Text style={tw`text-gray-700 font-medium`}>{equipment}</Text>
              </View>
            )}
          </View>

          {/* Workout details grid */}
          <View style={tw`flex-row flex-wrap bg-gray-50 rounded-xl overflow-hidden border border-gray-100 mb-6`}>
            <View style={tw`w-1/2 p-4 border-r border-b border-gray-100`}>
              <Text style={tw`text-gray-500 text-xs uppercase mb-1`}>Sets</Text>
              <Text style={tw`text-lg font-bold text-gray-800`}>{sets}</Text>
            </View>

            <View style={tw`w-1/2 p-4 border-b border-gray-100`}>
              <Text style={tw`text-gray-500 text-xs uppercase mb-1`}>Reps</Text>
              <Text style={tw`text-lg font-bold text-gray-800`}>{reps}</Text>
            </View>

            <View style={tw`w-1/2 p-4 border-r border-gray-100`}>
              <Text style={tw`text-gray-500 text-xs uppercase mb-1`}>Duration</Text>
              <Text style={tw`text-lg font-bold text-gray-800`}>{duration || "45 sec"}</Text>
            </View>

            <View style={tw`w-1/2 p-4`}>
              <Text style={tw`text-gray-500 text-xs uppercase mb-1`}>Rest</Text>
              <Text style={tw`text-lg font-bold text-gray-800`}>{rest || "60 sec"}</Text>
            </View>
          </View>
        </View>

        {/* Description */}
        <View style={tw`px-5 mb-6`}>
          <View style={tw`flex-row items-center mb-2`}>
            <AlignJustify size={18} color="#333" style={tw`mr-2`} />
            <Text style={tw`text-xl font-bold text-gray-800`}>How to Perform</Text>
          </View>

          <Text style={tw`text-gray-700 leading-6 mb-4`}>
            {description}
          </Text>
        </View>

        {/* Form Tips */}
        <View style={tw`px-5 mb-6`}>
          <View style={tw`flex-row items-center mb-3`}>
            <Target size={18} color="#333" style={tw`mr-2`} />
            <Text style={tw`text-xl font-bold text-gray-800`}>Form Tips</Text>
          </View>

          {formTips.map((tip, index) => (
            <View key={index} style={tw`flex-row mb-2`}>
              <Text style={tw`text-gray-600 mr-2`}>•</Text>
              <Text style={tw`text-gray-600 flex-1`}>{tip}</Text>
            </View>
          ))}
        </View>

        {/* Variations */}
        <View style={tw`px-5 mb-8`}>
          <View style={tw`flex-row items-center mb-3`}>
            <BarChart3 size={18} color="#333" style={tw`mr-2`} />
            <Text style={tw`text-xl font-bold text-gray-800`}>Variations</Text>
          </View>

          {variations.map((variation, index) => (
            <View key={index} style={tw`mb-3 p-4 bg-gray-50 rounded-xl border border-gray-100`}>
              <View style={tw`flex-row justify-between items-start mb-1`}>
                <Text style={tw`text-lg font-bold text-gray-800`}>{variation.name}</Text>
                <View style={tw`px-2 py-0.5 rounded-full ${variation.difficulty === 'Easier' ? 'bg-green-100' : 'bg-orange-100'}`}>
                  <Text
                    style={tw`text-xs font-medium ${variation.difficulty === 'Easier' ? 'text-green-700' : 'text-orange-700'}`}
                  >
                    {variation.difficulty}
                  </Text>
                </View>
              </View>
              <Text style={tw`text-gray-600`}>{variation.description}</Text>
            </View>
          ))}
        </View>

        {/* Action Buttons */}
        <View style={tw`px-5 pb-10 flex-row`}>
          <TouchableOpacity
            style={tw`flex-1 py-3 bg-gray-200 rounded-xl items-center mr-2`}
            onPress={() => navigation.goBack()}
          >
            <Text style={tw`font-bold text-gray-700`}>Back to Workout</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[tw`flex-1 py-3 rounded-xl items-center ml-2`, { backgroundColor: color }]}
            onPress={() => console.log('Start this exercise')}
          >
            <Text style={tw`font-bold text-white`}>Start Exercise</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SingleExerciseDetails;