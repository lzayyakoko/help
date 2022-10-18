import { View, Text, ScrollView, FlatList } from 'react-native'
import React,{ useContext, useEffect, useState} from 'react'
import Card from './Card'
import { GContext } from '../context/GContext'

const Home = ({navigation}) => {
    const {GettingUserList, alluserList, clikedUser,onScrollEnd, setClickIndex, backandNext} = useContext(GContext)

    useEffect(() =>{
        GettingUserList()
    }, [])
  return (
    <FlatList
    data={alluserList}
    numColumns={3}
    columnWrapperStyle={{justifyContent: 'space-between'}}
    onEndReached={onScrollEnd}
    keyExtractor={(item, index) => index}
    renderItem={({item, index}) =><Card item={item}
    press={()=>{
        navigation.navigate("Swiper")
        backandNext(index)
    }}
    />}
    />
  )
}

export default Home