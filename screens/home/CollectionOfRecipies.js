import { View, Text, Image, ScrollView, Touchable, TouchableOpacity } from "react-native"
import {CategoriesData} from '../../assets/data'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const CollectionOfRecipies = ()=> {
    return (
        <ScrollView
         horizontal ={false}
         showsHorizontalScrollIndicator={false}
         contentContainerStyle={{padding: 15}}
         style={{ }}>
            {CategoriesData?.map((cats, index) => {
                return (
                    <TouchableOpacity key={index} style={{display : "flex", flexWrap:'wrap'}}>
                        <Image source={cats.src} style={{width: wp(40), height: hp(30), borderRadius: 50, backgroundColor:'red'}}></Image>
                        <Text>{`${cats?.title[0]?.toString().toUpperCase()}${cats?.title?.slice(1)?.toString().toLowerCase()}`}</Text>
                    </TouchableOpacity>
                )
            })}
        </ScrollView>
    )
}

export default CollectionOfRecipies