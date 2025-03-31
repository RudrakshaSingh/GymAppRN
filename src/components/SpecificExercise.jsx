import { Text, View, Image, ScrollView, ActivityIndicator, TouchableOpacity, TextInput,StatusBar } from "react-native";
import { useState, useEffect } from "react";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "../../tailwind";
import { Ionicons } from "@expo/vector-icons";

const SpecificExercise = ({ navigation, route }) => {
  const { title } = route.params || {};
  const { image } = route.params || {};
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredExercises, setFilteredExercises] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(10);

  const [selectedEquipment, setSelectedEquipment] = useState("all");

  const API_KEY = "16a8929febmsh1e263465ef36edfp14c90bjsn1bff4e3bc411"; // replace with your key

  const getExercises = async () => {
    try {
      const response = await fetch(
        `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${title.toLowerCase()}?limit=300&offset=0`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": API_KEY,
            "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
          },
        }
      );

      const data = await response.json();
      const exerciseData = Array.isArray(data) ? data : data.exercises || [];
      setExercises(exerciseData);
      setFilteredExercises(exerciseData);
    } catch (error) {
      console.error("Error fetching exercises:", error);
      setExercises([]);
      setFilteredExercises([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getExercises();
  }, [title]);

  // Filter exercises based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredExercises(exercises);
    } else {
      const filtered = exercises.filter((exercise) =>
        exercise.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredExercises(filtered);
    }
    setCurrentPage(1); // Reset to first page when search changes
  }, [searchQuery, exercises]);

  // Get current exercises for pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = filteredExercises.slice(indexOfFirstExercise, indexOfLastExercise);
  const totalPages = Math.ceil(filteredExercises.length / exercisesPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Filter by equipment type
  const filterByEquipment = (equipmentType) => {
	setSelectedEquipment(equipmentType); // Track the selected item
  
	if (equipmentType === "all") {
	  setFilteredExercises(exercises);
	} else {
	  const filtered = exercises.filter((exercise) =>
		exercise.equipment.toLowerCase() === equipmentType.toLowerCase()
	  );
	  setFilteredExercises(filtered);
	}
	setCurrentPage(1);
  };

  // Get unique equipment types
  const equipmentTypes = ["all", ...new Set(exercises.map(exercise => exercise.equipment))];

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <StatusBar hidden={true} />
      <ScrollView contentContainerStyle={tw`p-4`} showsVerticalScrollIndicator={false} bounces={true}>
        {/* Header with back button */}
        <View style={tw`flex-row items-center mb-2`}>
          <TouchableOpacity 
            onPress={() => navigation.goBack()}
            style={tw`p-2 rounded-full bg-gray-100`}
          >
            <Ionicons name="arrow-back" size={24} color="#f472b6" />
          </TouchableOpacity>
          <View style={tw`flex-1`}>
            <Text style={tw`text-3xl font-bold tracking-wider text-center`}>
              <Text style={tw`text-pink-600`}>{title}</Text> Exercise
            </Text>
          </View>
        </View>

        <Image
          source={{ uri: image }}
          style={[tw`self-center mt-4 rounded-full border-2 border-pink-600`, { width: 180, height: 180 }]}
          resizeMode="cover"
        />

        {/* Search Bar */}
        <View style={tw`mt-6 mb-2 flex-row items-center bg-gray-100 rounded-full px-4 py-2`}>
          <Ionicons name="search" size={20} color="#f472b6" />
          <TextInput
            style={tw`flex-1 ml-2 text-base`}
            placeholder="Search exercises..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery("")}>
              <Ionicons name="close-circle" size={20} color="#9ca3af" />
            </TouchableOpacity>
          )}
        </View>

        {/* Equipment filter */}
        <ScrollView 
  horizontal
  showsHorizontalScrollIndicator={false}
  contentContainerStyle={tw`py-2`}
>
  {equipmentTypes.map((equipment, index) => (
    <TouchableOpacity
      key={index}
      onPress={() => filterByEquipment(equipment)}
      style={tw`px-4 py-2 mr-2 rounded-full ${
        equipment === selectedEquipment ? "bg-pink-600" : "bg-gray-200"
      }`}
    >
      <Text style={tw`${
        equipment === selectedEquipment ? "text-white" : "text-gray-700"
      } font-medium`}>
        {equipment.charAt(0).toUpperCase() + equipment.slice(1)}
      </Text>
    </TouchableOpacity>
  ))}
</ScrollView>

        <View style={tw`mt-4`}>
          <Text style={tw`text-lg font-semibold mb-4 text-center bg-gray-50 py-2 rounded-lg shadow-sm`}>
            Available Workouts {filteredExercises.length > 0 ? `(${filteredExercises.length})` : ""}
          </Text>
          
          {loading ? (
            <ActivityIndicator size="large" color="#f472b6" />
          ) : filteredExercises.length === 0 ? (
            <View style={tw`items-center justify-center py-8`}>
              <Ionicons name="fitness-outline" size={64} color="#e5e7eb" />
              <Text style={tw`text-lg text-gray-400 mt-4 text-center`}>No exercises found</Text>
              <TouchableOpacity 
                onPress={() => {
                  setSearchQuery("");
                  setFilteredExercises(exercises);
                }}
                style={tw`mt-4 px-4 py-2 bg-pink-600 rounded-full`}
              >
                <Text style={tw`text-white font-medium`}>Reset Filters</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <>
              <View style={tw`flex-row flex-wrap justify-between gap-2`}>
                {currentExercises.map((item, index) => (
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => {
                      console.log("Exercise item clicked:", item);
                      navigation.navigate("ExerciseDetails", { exercise: item });
                    }}
                    key={index}
                    style={tw`w-[48%] bg-white mb-4 rounded-xl overflow-hidden shadow-md`}
                  >
                    <Image
                      source={item.gifUrl ? { uri: item.gifUrl } : require("../../assets/male.png")}
                      style={tw`w-full h-40 border-b border-gray-100`}
                      resizeMode="cover"
                    />
                    <View style={tw`p-3`}>
                      <Text style={tw`text-black text-base font-semibold text-center`}>
                        {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                      </Text>
                      <View style={tw`flex-row justify-center mt-2`}>
                        <View style={tw`bg-gray-100 px-2 py-1 rounded-full`}>
                          <Text style={tw`text-xs text-gray-500`}>{item.equipment}</Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>

              {/* Pagination */}
              {filteredExercises.length > exercisesPerPage && (
                <View style={tw`flex-row justify-center mt-4 mb-8`}>
                  <TouchableOpacity
                    onPress={() => currentPage > 1 && paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    style={tw`mx-1 p-2 ${currentPage === 1 ? "bg-gray-100" : "bg-gray-200"} rounded-lg`}
                  >
                    <Ionicons 
                      name="chevron-back" 
                      size={18} 
                      color={currentPage === 1 ? "#9ca3af" : "#4b5563"} 
                    />
                  </TouchableOpacity>
                  
                  {[...Array(totalPages)].map((_, index) => {
                    const pageNumber = index + 1;
                    // Show current page, first page, last page, and one page before and after current
                    if (
                      pageNumber === 1 ||
                      pageNumber === totalPages ||
                      pageNumber === currentPage ||
                      pageNumber === currentPage - 1 ||
                      pageNumber === currentPage + 1
                    ) {
                      return (
                        <TouchableOpacity
                          key={index}
                          onPress={() => paginate(pageNumber)}
                          style={tw`mx-1 w-8 h-8 justify-center items-center ${
                            currentPage === pageNumber ? "bg-pink-600" : "bg-gray-200"
                          } rounded-lg`}
                        >
                          <Text
                            style={tw`${
                              currentPage === pageNumber ? "text-white" : "text-gray-700"
                            } font-medium`}
                          >
                            {pageNumber}
                          </Text>
                        </TouchableOpacity>
                      );
                    } else if (
                      (pageNumber === 2 && currentPage > 3) ||
                      (pageNumber === totalPages - 1 && currentPage < totalPages - 2)
                    ) {
                      // Show ellipsis
                      return (
                        <View key={index} style={tw`mx-1 w-8 h-8 justify-center items-center`}>
                          <Text style={tw`text-gray-700`}>...</Text>
                        </View>
                      );
                    }
                    return null;
                  })}
                  
                  <TouchableOpacity
                    onPress={() => currentPage < totalPages && paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    style={tw`mx-1 p-2 ${currentPage === totalPages ? "bg-gray-100" : "bg-gray-200"} rounded-lg`}
                  >
                    <Ionicons 
                      name="chevron-forward" 
                      size={18} 
                      color={currentPage === totalPages ? "#9ca3af" : "#4b5563"} 
                    />
                  </TouchableOpacity>
                </View>
              )}
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SpecificExercise;