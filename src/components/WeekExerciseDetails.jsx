import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from '../../tailwind';

const WeekExerciseDetails = ({route}) => {
    const { title,image } = route.params || {};
    console.log('Data',title,image);



  return (
    <SafeAreaView style ={tw`p-4`}>
    <Text style={tw`text-4xl font-bold tracking-wider text-center mb-4 text-pink-600 uppercase bg-gray-50 self-center p-2 rounded-lg`}>
					{title || "Unnamed Exercise"}<Text style = {tw`text-black`}> Exercises</Text>
				</Text>
                <Image
          source={image}
          style={[
            tw`self-center mt-6 rounded-full  bg-pink-50`,
            { width: 280, height: 280 },
          ]}
          resizeMode="cover"
        />

    </SafeAreaView>
  )
}

export default WeekExerciseDetails

const styles = StyleSheet.create({})