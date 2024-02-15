import * as React from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import {styles} from '../../styles'
import { StatusBar} from 'expo-status-bar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {BellIcon, MagnifyingGlassCircleIcon, UserCircleIcon, s} from "react-native-heroicons/outline";
import Categories from './Categories';

const HomeScreen =() => {
  return (
    <View style={{...styles?.container, backgroundColor:"white"}}>
        <StatusBar style='dark'/>
        <ScrollView 
            contentContainerStyle={{paddingHorizontal: 15}}
            showsHorizontalScrollIndicator={false}
            style={{backgroundColor:'white', marginTop: hp(7)}}>
            <View style={{display: 'flex', flexDirection:'row', justifyContent:"space-between"}}>
                <TouchableOpacity style={{position:"relative", left: 10}}>
                    <UserCircleIcon size={hp(5)} color="#9ca3af"/>
                </TouchableOpacity>

                <TouchableOpacity style={{position:"relative", right: 10}}>
                    <BellIcon size={hp(5)} color="#9ca3af" />
                </TouchableOpacity>
            </View>
            <Text style={{paddingTop: 10, paddingBottom:10, color:"#4b5563"}}>Hello David !</Text>
           
           <View>
                <Text style={{fontSize:hp(4), fontWeight:'bold', color:"#374151"}}>Make your own food, </Text>
                <Text style={{fontSize:hp(4), fontWeight:'bold', color:"#374151"}}>Stay at <Text style={{color:"#f59e0b"}}>home</Text> </Text>
           </View>

           <View style={{display:"flex", flexDirection:"row", width:wp(90), backgroundColor:"#f5f5f5",  borderRadius:hp(5), marginTop: 15}}>
                <TextInput
                    placeholder='Search'
                    backgroundColor="transparent"
                    placeholderTextColor={"black"}
                    style={{margin:10, width: wp(72)}}
                />
                <TouchableOpacity>
                    <MagnifyingGlassCircleIcon color="#4b5563"style={{backgroundColor:'white', padding:hp(2.5), borderRadius:hp(2), position:'relative', top: 2.5}}/>
                </TouchableOpacity>
           </View>

           <Categories />
        </ScrollView>
    </View>
  );
}

export default HomeScreen
