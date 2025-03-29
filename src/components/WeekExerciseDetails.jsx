import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
	ArrowLeft,
	Calendar,
	Clock,
	Dumbbell,
	Award,
	BookOpen,
	Zap,
	ChevronRight,
	Flame,
	Target,
} from "lucide-react-native";
import tw from "../../tailwind";

// Import the workout data
import { workoutPlans, getWorkoutByDay } from "./weekdata";

const WeekExerciseDetails = ({ route, navigation }) => {
	const { title } = route.params || {};

	// Get the workout data for the selected day
	const workout = getWorkoutByDay(title) || {
		title: "Default Workout",
		color: "#db2777",
		duration: "45 min",
		description: "A balanced full-body workout routine.",
		exercises: [],
	};

	const { color, duration, description, exercises = [] } = workout;

	return (
		<SafeAreaView style={tw`flex-1 bg-gray-50`}>
			{/* Header */}
			<View style={[tw`px-4 py-3 flex-row items-center`, { backgroundColor: color }]}>
				<TouchableOpacity
					onPress={() => navigation.goBack()}
					style={tw`p-2 rounded-full bg-white bg-opacity-20`}>
					<ArrowLeft size={22} color="white" />
				</TouchableOpacity>
				<Text style={tw`ml-3 text-xl font-bold text-white`}>{title} Training Plan</Text>
			</View>

			<ScrollView showsVerticalScrollIndicator={false}>
				{/* Banner */}
				<View style={[tw`px-5 pt-6 pb-8 mb-4`, { backgroundColor: color }]}>
					<View style={tw`flex-row justify-between items-center`}>
						<View style={tw`flex-1 pr-4`}>
							<Text style={tw`text-3xl font-bold mb-1 text-white`}>{workout.title}</Text>
							<Text style={tw`text-white text-lg font-medium opacity-90`}>{title} Focus</Text>

							<View style={tw`flex-row mt-4`}>
								<View
									style={tw`bg-white bg-opacity-20 rounded-full px-3 py-1 flex-row items-center mr-2`}>
									<Dumbbell size={14} color="white" style={tw`mr-1`} />
									<Text style={tw`text-white font-medium`}>{exercises.length} Exercises</Text>
								</View>
								<View style={tw`bg-white bg-opacity-20 rounded-full px-3 py-1 flex-row items-center`}>
									<Clock size={14} color="white" style={tw`mr-1`} />
									<Text style={tw`text-white font-medium`}>{duration}</Text>
								</View>
							</View>
						</View>

						<View style={tw`bg-white bg-opacity-20 rounded-full p-4`}>
							<Calendar size={32} color="white" />
						</View>
					</View>
				</View>

				{/* Description */}
				<View style={tw`px-5 mb-6`}>
					<Text style={tw`text-gray-700 leading-6 text-base`}>{description}</Text>
				</View>

				{/* Exercise List */}
				<View style={tw`px-5 mb-6`}>
					<View style={tw`flex-row justify-between items-center mb-4`}>
						<Text style={tw`text-xl font-bold text-gray-800`}>Workout Program</Text>
						<Text style={tw`text-sm font-medium text-gray-500`}>{exercises.length} exercises</Text>
					</View>

					{exercises.length > 0 ? (
						exercises.map((exercise, index) => (
							<View
								key={index}
								style={tw`mb-4 bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100`}>
								{/* Exercise header */}
								<View style={tw`p-4 border-b border-gray-100`}>
									<View style={tw`flex-row justify-between items-start`}>
										<View style={tw`flex-row items-center flex-1 pr-2`}>
											<View
												style={[
													tw`w-10 h-10 rounded-full items-center justify-center mr-3`,
													{ backgroundColor: `${color}15` },
												]}>
												<Text style={[tw`font-bold text-lg`, { color }]}>{index + 1}</Text>
											</View>
											<View>
												<Text style={tw`text-lg font-bold text-gray-800`}>{exercise.name}</Text>
												<View style={tw`flex-row items-center flex-wrap`}>
													<Text style={tw`text-gray-600 text-sm`}>
														<Text style={tw`font-medium`}>{exercise.sets}</Text> sets ×{" "}
														<Text style={tw`font-medium`}>{exercise.reps}</Text>
													</Text>
													{exercise.rest && (
														<Text style={tw`text-gray-600 text-sm`}>
															{" "}
															• <Text style={tw`font-medium`}>{exercise.rest}</Text> rest
														</Text>
													)}
												</View>
											</View>
										</View>
									</View>
								</View>

								{/* Exercise details */}
								<View style={tw`p-4 bg-gray-50`}>
									<Text style={tw`text-gray-600 mb-3 text-sm leading-5`}>{exercise.description}</Text>

									<View style={tw`flex-row flex-wrap mt-1 justify-between`}>
										<View style={tw`flex-row flex-wrap`}>
											{exercise.muscle && (
												<View
													style={[
														tw`flex-row items-center mr-2 mb-2 px-3 py-1 rounded-full`,
														{ backgroundColor: `${color}10` },
													]}>
													<Target size={12} color={color} style={tw`mr-1`} />
													<Text style={[tw`text-xs font-medium`, { color }]}>
														{exercise.muscle}
													</Text>
												</View>
											)}

											{exercise.equipment && (
												<View
													style={tw`flex-row items-center mb-2 bg-gray-200 px-3 py-1 rounded-full`}>
													<Dumbbell size={12} color="#666" style={tw`mr-1`} />
													<Text style={tw`text-gray-700 text-xs font-medium`}>
														{exercise.equipment}
													</Text>
												</View>
											)}
										</View>

										<TouchableOpacity
											style={[
												tw`px-4 py-1 rounded-full flex-row items-center`,
												{ backgroundColor: color },
											]}
											onPress={() =>
												navigation.navigate("SingleExerciseDetails", {
													exercise: exercise,
													color: color,
													dayTitle: title,
												})
											}>
											<Text style={tw`font-semibold text-white mr-1 text-sm`}>Details</Text>
											<ChevronRight size={14} color="white" />
										</TouchableOpacity>
									</View>
								</View>
							</View>
						))
					) : (
						<View
							style={tw`items-center justify-center py-12 bg-white rounded-xl shadow-sm border border-gray-100`}>
							<View style={tw`w-16 h-16 rounded-full bg-gray-100 items-center justify-center mb-4`}>
								<BookOpen size={32} color="#aaa" />
							</View>
							<Text style={tw`text-gray-500 text-lg font-medium`}>No Workout Found</Text>
							<Text style={tw`text-gray-400 text-sm mt-1 text-center px-4`}>
								There's no workout planned for this day. Select a different training day.
							</Text>
							<TouchableOpacity
								style={tw`mt-6 bg-gray-200 py-2 px-6 rounded-full`}
								onPress={() => navigation.goBack()}>
								<Text style={tw`font-medium text-gray-700`}>Go Back</Text>
							</TouchableOpacity>
						</View>
					)}
				</View>

				{/* Start Button */}
				{exercises.length > 0 && (
					<View style={tw`px-5 pb-10`}>
						<TouchableOpacity
							style={[
								tw`py-4 rounded-xl items-center flex-row justify-center shadow-sm`,
								{ backgroundColor: color },
							]}
							onPress={() => {
								if (exercises.length > 0) {
									navigation.navigate("SingleExerciseDetails", {
										exercise: exercises[0], // Navigate to the first exercise
										color: color,
										dayTitle: title,
									});
								}
							}}>
							<Flame size={20} color="white" style={tw`mr-2`} />
							<Text style={tw`text-white font-bold text-lg`}>Start Workout</Text>
						</TouchableOpacity>
					</View>
				)}
			</ScrollView>
		</SafeAreaView>
	);
};

export default WeekExerciseDetails;
