import { View, Text, Image, Button } from 'react-native'
import React,{useContext} from 'react'


const Details = ({item}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Image style={{width: 200, height: 150}} source={{uri: item.thumbnail[0]}}/>
      <Text>{item.nickname}</Text>
      <Button
      title='click'
      onPress={ () =>null}
      />
    </View>
  )
}

export default Details