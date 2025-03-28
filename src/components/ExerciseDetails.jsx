import React, { useState } from "react";
import { Text, View, ScrollView, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";
import tw from "../../tailwind";
import { User, Target, Zap, Dumbbell, Cog } from "lucide-react-native";

const capitalizeWords = (str) => {
	return str
		.split(" ")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
		.join(" ");
};

const ExerciseDetails = ({ route }) => {
	const [loading, setLoading] = useState(true);
	const { exercise } = route.params || {};
	console.log("Exercise Details:", exercise);

	if (!exercise) {
        setLoading(true);
		return (
			<SafeAreaView style={tw`flex-1 bg-white`}>
				<Text style={tw`text-center mt-4 text-gray-600`}>No exercise data available</Text>
			</SafeAreaView>
		);
	}

	return (
		<SafeAreaView style={tw`flex-1 bg-gray-100`}>
			<ScrollView contentContainerStyle={tw`p-4`}>
				{/* Title */}
				<Text style={tw`text-2xl text-pink-600 font-bold mb-6 text-center capitalize`}>
					{exercise.name || "Unnamed Exercise"}
				</Text>

				{exercise.gifUrl && (
					<View style={tw`w-78 h-78 self-center rounded-lg mb-4 border-2 border-gray900 overflow-hidden`}>
						<WebView
							source={{ uri: exercise.gifUrl }}
							style={tw`w-full h-full`}
							scalesPageToFit={true}
							javaScriptEnabled={true}
							scrollEnabled={false}
						/>
					</View>
				)}

				{/* Info Sections */}
				<View style={tw`space-y-4`}>
					{/* Body Part Heading */}
					<View
						style={tw`flex-row items-center justify-center bg-white p-4 rounded-lg border border-gray-200 shadow-sm`}>
						<Text style={tw`text-xl font-bold text-gray-800`}>
							Body Part:{" "}
							<Text style={tw`text-pink-800`}>{capitalizeWords(exercise.bodyPart || "Unknown")}</Text>
						</Text>
					</View>
					<Text style={tw`text-xl font-bold text-gray-800 self-center mt-4`}>Details</Text>
					{/* Details Container */}
					<View style={tw`bg-white p-3 rounded-lg border border-gray-200 shadow-sm mt-2`}>
						{/* Targeted Muscle */}
						<View style={tw`flex-row items-center mb-2`}>
							<Target color="#FF6B6B" size={20} style={tw`mr-2`} />
							<Text style={tw`text-base font-medium text-gray-700`}>
								Targeted Muscle:{" "}
								<Text style={tw`font-bold text-gray-800`}>
									{capitalizeWords(exercise.target || "Unknown")}
								</Text>
							</Text>
						</View>

						{/* Secondary Muscles */}
						<View style={tw`flex-row items-start flex-wrap`}>
							<Zap color="#FFD700" size={20} style={tw`mr-2 mt-1`} />
							<Text style={tw`text-base font-medium text-gray-700 flex-1`}>
								Secondary Muscles:{" "}
								<Text style={tw`font-bold text-gray-800`}>
									{exercise.secondaryMuscles && exercise.secondaryMuscles.length > 0
										? exercise.secondaryMuscles.map(capitalizeWords).join(", ")
										: "None specified"}
								</Text>
							</Text>
						</View>

						{/* Equipment   */}
						<View style={tw`flex-row items-center mb-2`}>
							<Dumbbell color="black" size={20} style={tw`mr-2 mt-1`} />
							<Text style={tw`text-base font-medium text-gray-700`}>
								Equipment:{" "}
								<Text style={tw`font-bold text-gray-800`}>
									{capitalizeWords(exercise.equipment || "Not Needed")}
								</Text>
							</Text>
						</View>
					</View>
					{/* Instructions   */}
					<View>
						<View style={tw`flex-row items-center mb-2`}>
							<Cog color="black" size={20} style={tw`mr-2 mt-1`} />
							<Text style={tw`text-lg font-semibold text-gray-700`}>Instructions:</Text>
						</View>
						<View style={tw`pl-3`}>
							{exercise.instructions && exercise.instructions.length > 0 ? (
								exercise.instructions.map((instruction, index) => (
									<View key={index} style={tw`flex-row mb-1`}>
										<Text style={tw`text-base text-gray-600 w-6`}>{`${index + 1}.`}</Text>
										<Text style={tw`text-base text-gray-600 flex-1`}>
											{instruction}
										</Text>
									</View>
								))
							) : (
								<Text style={tw`text-base text-gray-600`}>None specified</Text>
							)}
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default ExerciseDetails;
