import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from '../../styles';
import burgerImage from '../../assets/images/variety2.jpg'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { StatusBar} from 'expo-status-bar';

const WelcomeScreen =() => {
    const ring1Parding =useSharedValue(0);
    const ring2Parding =useSharedValue(0);
    const naviagtion = useNavigation()

    React.useEffect(()=>{
        setTimeout(() => {
            if(ring1Parding.value ===0 )  ring1Parding.value = withSpring( 0 + hp(5.5))
        }, 100);

        setTimeout(() => {
            if(ring2Parding.value ===0) ring2Parding.value = withSpring(0 + hp(2.5))
        }, 200);

        setTimeout(() => {
            // naviagteTo("Home")
            naviagtion.navigate("Home")
        }, 2000);
    }, [])
  return (
    <View style={styles.container}>
      
      <StatusBar style='light' backgroundColor='#f59e0b'/>
      <Animated.View style={{backgroundColor:"#fef9c3", padding: ring1Parding, borderRadius:180}}>
        <Animated.View style={{backgroundColor:"#f59e0b", padding: ring2Parding, borderRadius:150}}>
            <Image source={burgerImage} style={{width: wp(60), height: hp(30), borderRadius: 150}}></Image>
        </Animated.View>
      </Animated.View>

      <View>
        <Text style={{color:"white", fontWeight: "bold", fontSize: hp(7), paddingTop :10}} >Foody</Text>
        <Text style={{color:"white", fontWeight:"bold", fontSize: hp(2)}}>food is always right...</Text>
      </View>
    </View>
  );
}

export default WelcomeScreen

