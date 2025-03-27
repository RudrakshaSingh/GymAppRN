import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Pressable,
  TextInput,
  ScrollView,
  Dimensions,
  Animated,
  Easing
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import tw from '../../tailwind';

const { width } = Dimensions.get('window');

const InputForm = ({ navigation }) => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [userData, setUserData] = useState({
    name: '',
    age: '',
    gender: '',
    height: { feet: 0, inches: 0, cm: 0 },
    heightUnit: 'ft_in'
  });

  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.95)).current;

  const animateIn = () => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
        easing: Easing.out(Easing.ease)
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
        easing: Easing.out(Easing.ease)
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
        easing: Easing.out(Easing.ease)
      })
    ]).start();
  };

  const isCurrentScreenValid = () => {
    switch (currentScreen) {
      case 0:
        return userData.name.trim() !== '' && userData.age.trim() !== '';
      case 1:
        return userData.gender !== '';
      case 2:
        return userData.heightUnit === 'cm'
          ? userData.height.cm > 0
          : userData.height.feet > 0 || userData.height.inches > 0;
      default:
        return false;
    }
  };

  const handleTextChange = (field, value) => {
    setUserData({ ...userData, [field]: value });
  };

  const handleGenderSelect = (gender) => {
    setUserData({ ...userData, gender });
  };

  const handleNext = () => {
    if (!isCurrentScreenValid()) return;
    fadeAnim.setValue(0);
    slideAnim.setValue(width);
    scaleAnim.setValue(0.95);
    
    if (currentScreen < 2) {
      setCurrentScreen(currentScreen + 1);
      animateIn();
    } else {
      console.log('Form completed with data:', userData);
      navigation.navigate('Home', { userData });
    }
  };

  const handleBack = () => {
    if (currentScreen > 0) {
      fadeAnim.setValue(0);
      slideAnim.setValue(-width);
      scaleAnim.setValue(0.95);
      setCurrentScreen(currentScreen - 1);
      animateIn();
    }
  };

  const ftInToCm = (feet, inches) => {
    return Math.round((Number(feet) * 30.48) + (Number(inches) * 2.54));
  };

  const handleFeetInput = (text) => {
    let feet = parseInt(text);
    if (isNaN(feet)) feet = 0;
    feet = Math.min(10, Math.max(0, feet));
  
    setUserData(prevState => ({
      ...prevState,
      height: {
        ...prevState.height,
        feet,
        cm: ftInToCm(feet, prevState.height.inches)
      }
    }));
  };

  const handleInchesInput = (text) => {
    let inches = parseInt(text);
    if (isNaN(inches)) inches = 0;
    inches = Math.min(11, Math.max(0, inches));

    setUserData(prevState => ({
      ...prevState,
      height: {
        ...prevState.height,
        inches,
        cm: ftInToCm(prevState.height.feet, inches)
      }
    }));
  };

  const handleCmInput = (text) => {
    let cmValue = text === '' ? 0 : parseInt(text);
    if (isNaN(cmValue)) cmValue = 0;
    cmValue = Math.min(333, Math.max(0, cmValue));
  
    const totalInches = cmValue / 2.54;
    const feet = Math.floor(totalInches / 12);
    const inches = Math.round(totalInches % 12);
  
    setUserData({
      ...userData,
      height: { feet, inches, cm: cmValue }
    });
  };

  React.useEffect(() => {
    animateIn();
  }, []);

  const renderNameAgeScreen = () => {
    return (
      <Animated.View 
        style={[
          tw`flex-1 justify-center px-6`,
          {
            opacity: fadeAnim,
            transform: [
              { translateY: slideAnim },
              { scale: scaleAnim }
            ]
          }
        ]}
      >
        <ScrollView 
          contentContainerStyle={tw`flex-grow justify-center`}
          keyboardShouldPersistTaps="handled"
        >
          <LinearGradient
            colors={['rgba(96, 165, 250, 0.1)', 'rgba(96, 165, 250, 0)']}
            style={tw`rounded-3xl p-8 mb-8`}
          >
            <Text style={tw`text-4xl text-gray-800 font-bold mb-3`}>
              Welcome! 👋
            </Text>
            <Text style={tw`text-gray-600 text-xl`}>
              Let's create your perfect fitness journey
            </Text>
          </LinearGradient>

          <View style={tw`space-y-6`}>
            <View>
              <Text style={tw`text-gray-700 text-lg mb-2 font-medium`}>Your Name</Text>
              <TextInput
                style={tw`bg-gray-50 border border-gray-200 rounded-2xl p-5 text-xl`}
                placeholder="Enter your name"
                value={userData.name}
                onChangeText={(text) => handleTextChange('name', text)}
                placeholderTextColor="#9CA3AF"
              />
            </View>

            <View>
              <Text style={tw`text-gray-700 text-lg mb-2 font-medium`}>Your Age</Text>
              <TextInput
                style={tw`bg-gray-50 border border-gray-200 rounded-2xl p-5 text-xl`}
                placeholder="Enter your age"
                keyboardType="numeric"
                maxLength={3}
                value={userData.age}
                onChangeText={(text) => handleTextChange('age', text)}
                placeholderTextColor="#9CA3AF"
              />
            </View>
          </View>

          <LinearGradient
            colors={['rgba(59, 130, 246, 0.1)', 'rgba(59, 130, 246, 0.05)']}
            style={tw`mt-8 rounded-2xl p-6`}
          >
            <Text style={tw`text-blue-800 font-medium mb-2 text-lg`}>
              Why we ask for this
            </Text>
            <Text style={tw`text-blue-700 text-base leading-6`}>
              Your age and personal details help us create a customized fitness plan that's perfectly tailored to your needs and goals.
            </Text>
          </LinearGradient>
        </ScrollView>
      </Animated.View>
    );
  };

  const renderGenderScreen = () => (
    <Animated.View 
      style={[
        tw`flex-1 px-6`,
        {
          opacity: fadeAnim,
          transform: [
            { translateX: slideAnim },
            { scale: scaleAnim }
          ]
        }
      ]}
    >
      <ScrollView 
        contentContainerStyle={tw`flex-grow justify-center`}
        keyboardShouldPersistTaps="handled"
      >
        <View style={tw`flex-row items-center mb-8`}>
          <TouchableOpacity 
            onPress={handleBack}
            style={tw`mr-4 bg-gray-100 p-3 rounded-full`}
          >
            <Text style={tw`text-gray-600 text-2xl`}>←</Text>
          </TouchableOpacity>
          <Text style={tw`text-3xl text-gray-800 font-bold`}>
            What's your gender?
          </Text>
        </View>
  
        <View style={tw`flex-row justify-evenly`}>
          {['male', 'female'].map((gender) => (
            <TouchableOpacity
              key={gender}
              style={[
                tw`items-center justify-center p-4 w-32 rounded-xl`, // Reduced padding and width for smaller size
                userData.gender === gender
                  ? gender === 'female'
                    ? tw`bg-pink-100 border-2 border-pink-400 shadow-lg` // Pink for female
                    : tw`bg-blue-100 border-2 border-blue-500 shadow-lg` // Blue for male
                  : tw`bg-gray-100`
              ]}
              onPress={() => handleGenderSelect(gender)}
            >
              <Image
                source={
                  gender === 'male'
                    ? require('../../assets/male.png')
                    : require('../../assets/female.png')
                }
                style={tw`w-24 h-24 mb-3`} // Reduced image size
                resizeMode="contain"
              />
              <Text
                style={[
                  tw`text-base font-medium`, // Slightly smaller text
                  userData.gender === gender
                    ? tw`text-white`
                    : tw`text-gray-600`
                ]}
              >
                {gender.charAt(0).toUpperCase() + gender.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </Animated.View>
  );

  const renderHeightScreen = () => {
    const displayCm = userData.height.cm || ftInToCm(userData.height.feet, userData.height.inches);
  
    return (
      <Animated.View 
        style={[
          tw`flex-1 px-6`,
          {
            opacity: fadeAnim,
            transform: [
              { translateX: slideAnim },
              { scale: scaleAnim }
            ]
          }
        ]}
      >
        <ScrollView 
          contentContainerStyle={tw`flex-grow justify-center`}
          keyboardShouldPersistTaps="handled"
        >
          <View style={tw`flex-row items-center mb-8`}>
            <TouchableOpacity 
              onPress={handleBack}
              style={tw`mr-4 bg-gray-100 p-3 rounded-full`}
            >
              <Text style={tw`text-gray-600 text-2xl`}>←</Text>
            </TouchableOpacity>
            <Text style={tw`text-3xl text-gray-800 font-bold`}>
              How tall are you?
            </Text>
          </View>
  
          <View style={tw`flex-row mb-8 bg-gray-100 rounded-2xl p-1`}>
            <TouchableOpacity
              style={[
                tw`flex-1 py-4 px-6 rounded-xl`,
                userData.heightUnit === 'ft_in'
                  ? tw`bg-white shadow-sm`
                  : null
              ]}
              onPress={() => setUserData({ ...userData, heightUnit: 'ft_in' })}
            >
              <Text style={tw`text-center text-lg font-medium ${userData.heightUnit === 'ft_in' ? 'text-blue-600' : 'text-gray-600'}`}>
                Feet & Inches
              </Text>
            </TouchableOpacity>
  
            <TouchableOpacity
              style={[
                tw`flex-1 py-4 px-6 rounded-xl`,
                userData.heightUnit === 'cm'
                  ? tw`bg-white shadow-sm`
                  : null
              ]}
              onPress={() => setUserData({ ...userData, heightUnit: 'cm' })}
            >
              <Text style={tw`text-center text-lg font-medium ${userData.heightUnit === 'cm' ? 'text-blue-600' : 'text-gray-600'}`}>
                Centimeters
              </Text>
            </TouchableOpacity>
          </View>
  
          {userData.heightUnit === 'ft_in' ? (
            <View style={tw`bg-gray-50 rounded-3xl p-8`}>
              <Text style={tw`text-center text-2xl font-bold mb-6 text-gray-800`}>
                Enter your height
              </Text>
              <View style={tw`flex-row justify-between`}>
                <View style={tw`flex-1 mr-2`}>
                  <Text style={tw`text-sm text-center text-gray-600 mb-2 font-medium`}>Feet</Text>
                  <TextInput
                    style={tw`bg-white border border-gray-200 rounded-xl p-4 text-xl text-center shadow-sm`}
                    keyboardType="numeric"
                    maxLength={2}
                    value={(userData.height.feet || '').toString()}
                    onChangeText={handleFeetInput}
                    placeholder="0"
                  />
                </View>
                <View style={tw`flex-1 ml-2`}>
                  <Text style={tw`text-sm text-center text-gray-600 mb-2 font-medium`}>Inches</Text>
                  <TextInput
                    style={tw`bg-white border border-gray-200 rounded-xl p-4 text-xl text-center shadow-sm`}
                    keyboardType="numeric"
                    maxLength={2}
                    value={(userData.height.inches || '').toString()}
                    onChangeText={handleInchesInput}
                    placeholder="0"
                  />
                </View>
              </View>
  
              <Animated.View 
                style={[
                  tw`mt-8 items-center`,
                  {
                    opacity: fadeAnim,
                    transform: [{ scale: scaleAnim }]
                  }
                ]}
              >
                <Text style={tw`text-4xl text-gray-800 font-bold`}>
                  {userData.height.feet}'{userData.height.inches}"
                </Text>
                <Text style={tw`text-gray-500 mt-2 text-lg`}>
                  ({displayCm} cm)
                </Text>
              </Animated.View>
            </View>
          ) : (
            <View style={tw`bg-gray-50 rounded-3xl p-8`}>
              <Text style={tw`text-center text-2xl font-bold mb-6 text-gray-800`}>
                Enter your height
              </Text>
              <TextInput
                style={tw`bg-white border border-gray-200 rounded-xl p-4 text-xl text-center shadow-sm`}
                keyboardType="numeric"
                maxLength={3}
                value={(displayCm || '').toString()}
                onChangeText={handleCmInput}
                placeholder="0"
              />
              <Animated.View 
                style={[
                  tw`mt-8 items-center`,
                  {
                    opacity: fadeAnim,
                    transform: [{ scale: scaleAnim }]
                  }
                ]}
              >
                <Text style={tw`text-4xl text-gray-800 font-bold`}>
                  {displayCm} cm
                </Text>
                <Text style={tw`text-gray-500 mt-2 text-lg`}>
                  ({userData.height.feet}'{userData.height.inches}")
                </Text>
              </Animated.View>
            </View>
          )}
        </ScrollView>
      </Animated.View>
    );
  };

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 0:
        return renderNameAgeScreen();
      case 1:
        return renderGenderScreen();
      case 2:
        return renderHeightScreen();
      default:
        return renderNameAgeScreen();
    }
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      {renderCurrentScreen()}

      <View style={tw`px-6 mb-6`}>
        <LinearGradient
          colors={isCurrentScreenValid() ? ['#3B82F6', '#2563EB'] : ['#D1D5DB', '#9CA3AF']}
          style={tw`rounded-2xl overflow-hidden`}
        >
          <Pressable
            style={tw`py-5 items-center justify-center`}
            onPress={handleNext}
            disabled={!isCurrentScreenValid()}
          >
            <Text style={tw`text-white font-bold text-lg`}>
              {currentScreen === 2 ? 'Complete Profile' : 'Continue'}
            </Text>
          </Pressable>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

export default InputForm;