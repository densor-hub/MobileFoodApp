import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ReviewScreen =({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Review Screen</Text>
      <TouchableOpacity onPress={() => {navigation.navigate("Welcome")}}><Text>Go to Landing</Text></TouchableOpacity>
    </View>
  );
}

export default ReviewScreen

