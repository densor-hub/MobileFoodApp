import { View, Text, Image, ScrollView, Touchable, TouchableOpacity } from "react-native"
import {CategoriesData, CollectionOfRecipiesData} from '../../assets/data'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useState } from "react";
import MasonryList from "@react-native-seoul/masonry-list"

const Categories = ()=> {
    const [selectedCategory, setSlectedCategory] = useState('')
    return (
        <View style={{marginTop:40}}>
            <Text style={{textAlign:'center', color:"#4b5563"}}>Please select category to continue</Text>

            <ScrollView
                horizontal ={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{padding: 15}}
                >
                {CategoriesData?.map((cats, index) => {
                    return (
                    <TouchableOpacity key={index} style={{margin:5}} onPress={()=>{setSlectedCategory(cats)}}> 
                        <View style={{display : "flex", flexWrap:'wrap', padding: 5, borderRadius: 50, backgroundColor:'#f59e0b'}} >
                            <Image source={cats.src} style={{width: 50, height: 50, borderRadius: 50, backgroundColor:'red'}}></Image>
                        </View>
                        <Text style={{textAlign:'center', color:"#4b5563"}}>{`${cats?.title[0]?.toString().toUpperCase()}${cats?.title?.slice(1)?.toString().toLowerCase()}`}</Text>
                    </TouchableOpacity>
                    )
                })}
            </ScrollView>

           {selectedCategory && <MasonryList
                data={CollectionOfRecipiesData}
                keyExtractor={(item) => item.id}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                renderItem={({item}, index) => <RenderedItem item={item} index={index}/>}
                // refreshing={isLoadingNext}
                // onRefresh={() => refetch({first: ITEM_CNT})}
                onEndReachedThreshold={0.1}
                // onEndReached={() => loadNext(ITEM_CNT)}
            />}
        </View>
    )
}

const RenderedItem = ({item, index}) => {
     console.log(index)
    return (
        <View>
            <View key={item?.id} style={{justifyContent:"center", alignItems:'center', width: wp(45), borderRadius: 20,overflow:"hidden" }}>
                <Image source={item.src} style={{  marginBottom:5, borderRadius:25}} ></Image>
            </View>
            <Text style={{textAlign:'center', marginBottom:10}}>{item?.title}</Text>
        </View>
    )
}
export default Categories


