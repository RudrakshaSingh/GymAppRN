import { SafeAreaView, Image, Dimensions, Text, View, Pressable } from "react-native";
import React from "react";
import Start from "./src/components/Start";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/components/Home";
import InputForm from "./src/components/InputForm";
import SpecificExercise from "./src/components/SpecificExercise";
import ExerciseDetails from "./src/components/ExerciseDetails";
import WeekExerciseDetails from "./src/components/WeekExerciseDetails";

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Start">
				<Stack.Screen
					name="Start"
					component={Start}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="Home"
					component={Home}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen name="InputForm" component={InputForm} options={{ headerShown: false }}></Stack.Screen>
				<Stack.Screen
					name="SpecificExercise"
					component={SpecificExercise}
					options={{ headerShown: false }}></Stack.Screen>
				<Stack.Screen
					name="ExerciseDetails"
					component={ExerciseDetails}
					options={{
						headerShown: false,
					}}></Stack.Screen>
				<Stack.Screen
					name="WeekExerciseDetails"
					component={WeekExerciseDetails}
					options={{
						headerShown: false,
					}}></Stack.Screen>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
