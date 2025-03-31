import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ActivityIndicator, Image } from "react-native";
import React, { useState, useCallback, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
	ArrowLeft,
	Clock,
	Dumbbell,
	Zap,
	AlignJustify,
	Target,
	BarChart3,
	Play,
	Pause,
	Volume2,
	VolumeX,
	ChevronRight,
	Heart,
	Calendar,
} from "lucide-react-native";
import YoutubeIframe from "react-native-youtube-iframe";
import tw from "../../tailwind";
import { LinearGradient } from "expo-linear-gradient";

const SingleExerciseDetails = ({ route, navigation }) => {
	// Video state
	const [playing, setPlaying] = useState(false);
	const [loading, setLoading] = useState(true);
	const [muted, setMuted] = useState(false);
	const [favorite, setFavorite] = useState(false);

	// Get the exercise data from navigation params
	const { exercise, color = "#db2777", dayTitle } = route.params || {};

	// If no exercise data is provided, show an error state
	if (!exercise) {
		return (
			<SafeAreaView style={tw`flex-1 bg-white items-center justify-center p-4`}>
				<Text style={tw`text-red-500 text-lg font-semibold mb-4`}>Exercise data not found</Text>
				<TouchableOpacity style={tw`px-4 py-2 bg-gray-200 rounded-lg`} onPress={() => navigation.goBack()}>
					<Text style={tw`text-gray-800 font-medium`}>Go Back</Text>
				</TouchableOpacity>
			</SafeAreaView>
		);
	}

	const videoId = exercise.videoId || "jLvqKgW-_G8";

	const { name, sets, reps, duration, rest, description, muscle, equipment } = exercise;

	// Video state change handler
	const onStateChange = useCallback((state) => {
		if (state === "ended") {
			setPlaying(false);
		}
		if (state === "buffering" || state === "unstarted") {
			setLoading(true);
		} else {
			setLoading(false);
		}
	}, []);

	// Toggle play/pause
	const togglePlaying = useCallback(() => {
		setPlaying((prev) => !prev);
	}, []);

	// Toggle mute
	const toggleMute = useCallback(() => {
		setMuted((prev) => !prev);
	}, []);

	// Toggle favorite
	const toggleFavorite = useCallback(() => {
		setFavorite((prev) => !prev);
	}, []);

	const formTips = [
		"Keep your back straight throughout the movement",
		"Breathe out during the exertion phase",
		"Maintain controlled movements rather than using momentum",
		"Focus on muscle contraction at the peak of the movement",
	];

	const variations = [
		{
			name: `Assisted ${name}`,
			difficulty: "Easier",
			description: "Use assistance to make the exercise more manageable for beginners.",
		},
		{
			name: `Weighted ${name}`,
			difficulty: "Harder",
			description: "Add additional weight to increase resistance and challenge.",
		},
	];

	return (
		<SafeAreaView style={tw`flex-1 bg-white`}>
			{/* Header with gradient */}
			<LinearGradient colors={[`${color}`, `${color}99`]} style={tw`pt-2 pb-4 px-4`}>
				<View style={tw`flex-row items-center justify-between mb-3`}>
					<TouchableOpacity
						onPress={() => navigation.goBack()}
						style={tw`p-2 bg-white bg-opacity-20 rounded-full`}>
						<ArrowLeft size={22} color="white" />
					</TouchableOpacity>
					<Text style={tw`text-xl font-bold text-white`}>Exercise Details</Text>
					<TouchableOpacity onPress={toggleFavorite} style={tw`p-2 bg-white bg-opacity-20 rounded-full`}>
						<Heart size={22} color="white" fill={favorite ? "white" : "transparent"} />
					</TouchableOpacity>
				</View>
			</LinearGradient>

			<ScrollView showsVerticalScrollIndicator={false} style={tw`-mt-4 pt-2 rounded-t-3xl bg-white`}>
				{/* YouTube Video Player with rounded corners */}
				<View style={tw`mx-4 mt-4 rounded-2xl overflow-hidden shadow-md`}>
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
								rel: 0,
								showinfo: 0,
								iv_load_policy: 3,
								modestbranding: 1,
								controls: 0,
								preventFullScreen: true,
								fs: 0,
								cc_load_policy: 0,
								origin: "https://www.youtube.com",
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
							<TouchableOpacity style={tw`bg-white p-3 rounded-full shadow-md mr-3`} onPress={toggleMute}>
								{muted ? <VolumeX size={20} color="#333" /> : <Volume2 size={20} color="#333" />}
							</TouchableOpacity>

							{/* Play/Pause Button */}
							<TouchableOpacity
								style={[tw`p-3 rounded-full shadow-md`, { backgroundColor: color }]}
								onPress={togglePlaying}>
								{playing ? (
									<Pause size={20} color="white" />
								) : (
									<Play size={20} color="white" fill="white" />
								)}
							</TouchableOpacity>
						</View>
					</View>
				</View>

				{/* Exercise title and basic info */}
				<View style={tw`p-5`}>
					<View style={tw`flex-row justify-between items-start`}>
						<View style={tw`flex-1 mr-4`}>
							<Text style={tw`text-3xl font-bold text-gray-800 mb-1`}>{name}</Text>
							<View style={tw`flex-row items-center`}>
								<Calendar size={14} color={color} style={tw`mr-1`} />
								<Text style={tw`text-lg text-gray-600`}>{dayTitle} Workout</Text>
							</View>
						</View>
					</View>

					<View style={tw`flex-row flex-wrap my-4`}>
						{muscle && (
							<View
								style={[
									tw`flex-row items-center mr-4 mb-2 px-3 py-1.5 rounded-full`,
									{ backgroundColor: `${color}15` },
								]}>
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

					{/* Workout details cards */}
					<View style={tw`flex-wrap flex-row justify-between mb-6`}>
						<View style={tw`w-[48%] bg-gray-50 rounded-2xl p-3 shadow-sm border border-gray-100 mb-2`}>
							<Text style={tw`text-xs text-gray-500 uppercase mb-1 text-center`}>Sets</Text>
							<Text style={tw`text-lg font-bold text-gray-800 text-center`}>{sets}</Text>
						</View>

						<View style={tw`w-[48%] bg-gray-50 rounded-2xl p-3 shadow-sm border border-gray-100 mb-2`}>
							<Text style={tw`text-xs text-gray-500 uppercase mb-1 text-center`}>Reps</Text>
							<Text style={tw`text-lg font-bold text-gray-800 text-center`}>{reps}</Text>
						</View>

						<View style={tw`w-[48%] bg-gray-50 rounded-2xl p-3 shadow-sm border border-gray-100`}>
							<Text style={tw`text-xs text-gray-500 uppercase mb-1 text-center`}>Duration</Text>
							<Text style={tw`text-lg font-bold text-gray-800 text-center`}>{duration || "45 sec"}</Text>
						</View>

						<View style={tw`w-[48%] bg-gray-50 rounded-2xl p-3 shadow-sm border border-gray-100`}>
							<Text style={tw`text-xs text-gray-500 uppercase mb-1 text-center`}>Rest</Text>
							<Text style={tw`text-lg font-bold text-gray-800 text-center`}>{rest || "60 sec"}</Text>
						</View>
					</View>
				</View>

				{/* Description */}
				<View style={tw`px-5 mb-6`}>
					<View style={tw`flex-row items-center mb-3`}>
						<View style={[tw`p-2 rounded-lg mr-3`, { backgroundColor: `${color}15` }]}>
							<AlignJustify size={18} color={color} />
						</View>
						<Text style={tw`text-xl font-bold text-gray-800`}>How to Perform</Text>
					</View>

					<Text style={tw`text-gray-700 leading-6 mb-4 pl-9`}>{description}</Text>
				</View>

				{/* Form Tips */}
				<View style={tw`px-5 mb-6`}>
					<View style={tw`flex-row items-center mb-3`}>
						<View style={[tw`p-2 rounded-lg mr-3`, { backgroundColor: `${color}15` }]}>
							<Target size={18} color={color} />
						</View>
						<Text style={tw`text-xl font-bold text-gray-800`}>Form Tips</Text>
					</View>

					{formTips.map((tip, index) => (
						<View key={index} style={tw`flex-row mb-2 pl-9`}>
							<Text style={[tw`text-gray-600 mr-2`, { color }]}>•</Text>
							<Text style={tw`text-gray-600 flex-1`}>{tip}</Text>
						</View>
					))}
				</View>

				{/* Variations */}
				<View style={tw`px-5 mb-8`}>
					<View style={tw`flex-row items-center mb-3`}>
						<View style={[tw`p-2 rounded-lg mr-3`, { backgroundColor: `${color}15` }]}>
							<BarChart3 size={18} color={color} />
						</View>
						<Text style={tw`text-xl font-bold text-gray-800`}>Variations</Text>
					</View>

					{variations.map((variation, index) => (
						<View
							key={index}
							style={tw`mb-3 p-4 bg-gray-50 rounded-xl shadow-sm border border-gray-100 ml-9`}>
							<View style={tw`flex-row justify-between items-start mb-1`}>
								<Text style={tw`text-lg font-bold text-gray-800`}>{variation.name}</Text>
								<View
									style={tw`px-2 py-0.5 rounded-full ${
										variation.difficulty === "Easier" ? "bg-green-100" : "bg-orange-100"
									}`}>
									<Text
										style={tw`text-xs font-medium ${
											variation.difficulty === "Easier" ? "text-green-700" : "text-orange-700"
										}`}>
										{variation.difficulty}
									</Text>
								</View>
							</View>
							<Text style={tw`text-gray-600`}>{variation.description}</Text>
						</View>
					))}
				</View>

				{/* Action Buttons */}
				<View style={tw`px-5 pb-10`}>
					<TouchableOpacity
						style={[tw`py-4 rounded-xl items-center shadow-sm`, { backgroundColor: color }]}
						onPress={() => console.log("Start this exercise")}>
						<Text style={tw`font-bold text-white text-lg`}>Start Exercise</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default SingleExerciseDetails;
