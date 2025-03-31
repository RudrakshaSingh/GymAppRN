import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
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
	Info,
	Play,
	Star,
	Filter,
} from "lucide-react-native";
import tw from "../../tailwind";

// Import the workout data
import { workoutPlans, getWorkoutByDay } from "./weekdata";

const WeekExerciseDetails = ({ route, navigation }) => {
	const { title } = route.params || {};
	const [activeFilter, setActiveFilter] = useState("all");

	// Get the workout data for the selected day
	const workout = getWorkoutByDay(title) || {
		title: "Default Workout",
		color: "#db2777",
		duration: "45 min",
		description: "A balanced full-body workout routine.",
		exercises: [],
	};

	const { color, duration, description, exercises = [] } = workout;

	// Filter exercises based on selected filter
	const getFilteredExercises = () => {
		if (activeFilter === "all") return exercises;
		return exercises.filter(ex => ex.muscle && ex.muscle.toLowerCase().includes(activeFilter.toLowerCase()));
	}

	// Calculate total exercise time
	const getTotalTime = () => {
		let totalMinutes = 0;
		exercises.forEach(ex => {
			if (ex.duration) {
				const durationMatch = ex.duration.match(/(\d+)/);
				if (durationMatch) {
					totalMinutes += parseInt(durationMatch[0]);
				}
			}
		});
		return totalMinutes;
	}

	const filteredExercises = getFilteredExercises();
	const totalTime = getTotalTime();

	// Extract unique muscle groups for filters
	const muscleGroups = ["all"];
	exercises.forEach(ex => {
		if (ex.muscle) {
			const muscles = ex.muscle.split(",").map(m => m.trim());
			muscles.forEach(muscle => {
				if (!muscleGroups.includes(muscle.toLowerCase()) && muscle !== "Full Body") {
					muscleGroups.push(muscle.toLowerCase());
				}
			});
		}
	});

	return (
		<SafeAreaView style={tw`flex-1 bg-gray-50`}>
			{/* Header */}
			<View style={[tw`px-4 py-3 flex-row items-center justify-between`, { backgroundColor: color }]}>
				<View style={tw`flex-row items-center`}>
					<TouchableOpacity
						onPress={() => navigation.goBack()}
						style={tw`p-2 rounded-full bg-white bg-opacity-20`}>
						<ArrowLeft size={22} color="white" />
					</TouchableOpacity>
					<Text style={tw`ml-3 text-xl font-bold text-white`}>{title} Workout</Text>
				</View>
				<TouchableOpacity style={tw`p-2 rounded-full bg-white bg-opacity-20`}>
					<Star size={22} color="white" />
				</TouchableOpacity>
			</View>

			<ScrollView showsVerticalScrollIndicator={false} style={tw`flex-1`}>
				{/* Banner */}
				<View style={[tw`px-5 pt-6 pb-8`, { backgroundColor: color }]}>
					<View style={tw`flex-row justify-between items-center`}>
						<View style={tw`flex-1 pr-4`}>
							<Text style={tw`text-3xl font-bold mb-1 text-white`}>{workout.title}</Text>
							<Text style={tw`text-white text-base font-medium opacity-90 mb-2`}>{title} Focus</Text>

							<View style={tw`flex-row mt-4`}>
								<View
									style={tw`bg-white bg-opacity-20 rounded-full px-3 py-1 flex-row items-center mr-2`}>
									<Dumbbell size={14} color="white" style={tw`mr-1`} />
									<Text style={tw`text-white font-medium`}>{exercises.length} Exercises</Text>
								</View>
								<View style={tw`bg-white bg-opacity-20 rounded-full px-3 py-1 flex-row items-center mr-2`}>
									<Clock size={14} color="white" style={tw`mr-1`} />
									<Text style={tw`text-white font-medium`}>{duration}</Text>
								</View>
								<View style={tw`bg-white bg-opacity-20 rounded-full px-3 py-1 flex-row items-center`}>
									<Flame size={14} color="white" style={tw`mr-1`} />
									<Text style={tw`text-white font-medium`}>{totalTime} min</Text>
								</View>
							</View>
						</View>

						<View style={tw`bg-white bg-opacity-20 rounded-full p-4`}>
							<Calendar size={32} color="white" />
						</View>
					</View>
					
					{/* Quick Start Button */}
					{exercises.length > 0 && (
						<TouchableOpacity
							style={tw`mt-6 flex-row items-center justify-center bg-white rounded-full py-3 px-6`}
							onPress={() => {
								if (exercises.length > 0) {
									navigation.navigate("SingleExerciseDetails", {
										exercise: exercises[0],
										color: color,
										dayTitle: title,
									});
								}
							}}>
							<Play size={20} color={color} style={tw`mr-2`} />
							<Text style={[tw`font-bold text-lg`, { color }]}>Start Workout</Text>
						</TouchableOpacity>
					)}
				</View>

				{/* Description Card */}
				<View style={tw`px-5 -mt-4`}>
					<View style={tw`bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-6`}>
						<View style={tw`flex-row items-center mb-2`}>
							<Info size={18} color={color} style={tw`mr-2`} />
							<Text style={tw`text-lg font-bold text-gray-800`}>About This Workout</Text>
						</View>
						<Text style={tw`text-gray-700 leading-6 text-base`}>{description}</Text>
					</View>
				</View>

				{/* Muscle Group Filters */}
				{muscleGroups.length > 1 && (
					<View style={tw`px-5 mb-4`}>
						<View style={tw`flex-row items-center mb-2`}>
							<Filter size={16} color="#666" style={tw`mr-2`} />
							<Text style={tw`text-base font-bold text-gray-800`}>Filter by Muscle</Text>
						</View>
						<ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw`pb-2`}>
							{muscleGroups.map((muscle, idx) => (
								<TouchableOpacity 
									key={idx}
									style={[
										tw`mr-2 px-4 py-2 rounded-full border`,
										activeFilter === muscle 
											? { backgroundColor: color, borderColor: color } 
											: tw`bg-gray-100 border-gray-200`
									]}
									onPress={() => setActiveFilter(muscle)}>
									<Text 
										style={[
											tw`text-sm font-medium`,
											activeFilter === muscle ? tw`text-white` : tw`text-gray-700`
										]}>
										{muscle === "all" ? "All Exercises" : muscle.charAt(0).toUpperCase() + muscle.slice(1)}
									</Text>
								</TouchableOpacity>
							))}
						</ScrollView>
					</View>
				)}

				{/* Exercise List */}
				<View style={tw`px-5 mb-6`}>
					<View style={tw`flex-row justify-between items-center mb-4`}>
						<Text style={tw`text-xl font-bold text-gray-800`}>Workout Program</Text>
						<Text style={tw`text-sm font-medium text-gray-500`}>
							{filteredExercises.length} of {exercises.length} exercises
						</Text>
					</View>

					{filteredExercises.length > 0 ? (
						filteredExercises.map((exercise, index) => (
							<TouchableOpacity
								key={index}
								style={tw`mb-4 bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100`}
								onPress={() =>
									navigation.navigate("SingleExerciseDetails", {
										exercise: exercise,
										color: color,
										dayTitle: title,
									})
								}>
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
											<View style={tw`flex-1`}>
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
											{exercise.videoId && (
												<View 
													style={[
														tw`rounded-full p-2`,
														{ backgroundColor: `${color}15` },
													]}>
													<Play size={16} color={color} />
												</View>
											)}
										</View>
									</View>
								</View>

								{/* Exercise details */}
								<View style={tw`p-4 bg-gray-50`}>
									<Text style={tw`text-gray-600 mb-3 text-sm leading-5`}>
										{exercise.description.length > 100 
											? exercise.description.substring(0, 100) + "..." 
											: exercise.description}
									</Text>

									<View style={tw`flex-row flex-wrap mt-1`}>
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
										
										{exercise.duration && (
											<View
												style={tw`flex-row items-center mb-2 bg-gray-200 px-3 py-1 rounded-full ml-auto`}>
												<Clock size={12} color="#666" style={tw`mr-1`} />
												<Text style={tw`text-gray-700 text-xs font-medium`}>
													{exercise.duration}
												</Text>
											</View>
										)}
									</View>
								</View>
							</TouchableOpacity>
						))
					) : (
						<View
							style={tw`items-center justify-center py-12 bg-white rounded-xl shadow-sm border border-gray-100`}>
							<View style={tw`w-16 h-16 rounded-full bg-gray-100 items-center justify-center mb-4`}>
								<BookOpen size={32} color="#aaa" />
							</View>
							<Text style={tw`text-gray-500 text-lg font-medium`}>No Workout Found</Text>
							<Text style={tw`text-gray-400 text-sm mt-1 text-center px-4`}>
								{activeFilter !== "all" 
									? `No exercises matching "${activeFilter}" filter. Try a different filter.` 
									: "There's no workout planned for this day. Select a different training day."}
							</Text>
							{activeFilter !== "all" ? (
								<TouchableOpacity
									style={tw`mt-6 bg-gray-200 py-2 px-6 rounded-full`}
									onPress={() => setActiveFilter("all")}>
									<Text style={tw`font-medium text-gray-700`}>Show All Exercises</Text>
								</TouchableOpacity>
							) : (
								<TouchableOpacity
									style={tw`mt-6 bg-gray-200 py-2 px-6 rounded-full`}
									onPress={() => navigation.goBack()}>
									<Text style={tw`font-medium text-gray-700`}>Go Back</Text>
								</TouchableOpacity>
							)}
						</View>
					)}
				</View>

				{/* Summary Card */}
				{exercises.length > 0 && (
					<View style={tw`px-5 mb-10`}>
						<View style={tw`bg-white rounded-xl p-5 shadow-sm border border-gray-100`}>
							<View style={tw`flex-row items-center mb-4`}>
								<Award size={20} color={color} style={tw`mr-2`} />
								<Text style={tw`text-lg font-bold text-gray-800`}>Workout Summary</Text>
							</View>
							
							<View style={tw`flex-row justify-between mb-2`}>
								<View style={tw`items-center`}>
									<Text style={tw`text-gray-500 text-xs mb-1`}>EXERCISES</Text>
									<Text style={tw`text-xl font-bold text-gray-800`}>{exercises.length}</Text>
								</View>
								<View style={tw`items-center`}>
									<Text style={tw`text-gray-500 text-xs mb-1`}>DURATION</Text>
									<Text style={tw`text-xl font-bold text-gray-800`}>{totalTime} min</Text>
								</View>
								<View style={tw`items-center`}>
									<Text style={tw`text-gray-500 text-xs mb-1`}>SETS</Text>
									<Text style={tw`text-xl font-bold text-gray-800`}>
										{exercises.reduce((sum, ex) => {
											const sets = parseInt(ex.sets) || 0;
											return sum + sets;
										}, 0)}
									</Text>
								</View>
							</View>
							
							<TouchableOpacity
								style={[tw`mt-4 py-3 rounded-xl items-center flex-row justify-center`, { backgroundColor: color }]}
								onPress={() => {
									if (exercises.length > 0) {
										navigation.navigate("SingleExerciseDetails", {
											exercise: exercises[0],
											color: color,
											dayTitle: title,
										});
									}
								}}>
								<Flame size={20} color="white" style={tw`mr-2`} />
								<Text style={tw`text-white font-bold text-lg`}>Start Workout</Text>
							</TouchableOpacity>
						</View>
					</View>
				)}
			</ScrollView>
		</SafeAreaView>
	);
};

export default WeekExerciseDetails;