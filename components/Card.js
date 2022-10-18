import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'

const Card = ({item, press}) => {

  return (
    <TouchableOpacity style={{width: '30%', height: 300, marginTop: 10}}
    onPress={press}
    >
      <Image style={{width: '100%', height: '90%'}} source={{ uri: item.thumbnail[0]}}/>
      <Text>{item.nickname}</Text>
    </TouchableOpacity>
  )
}

export default Card