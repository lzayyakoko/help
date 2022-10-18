import Swiper from 'react-native-swiper'
import React,{useContext} from 'react'
import { GContext } from '../context/GContext'
import Details from './Details'

const Swiperpage = () => {
    const { setCurrentIndex, backandNext, clickedresult } = useContext(GContext)

    
  return (
    <Swiper showsButtons={true}
    index={1}
    loop={false}
    removeClippedSubviews={true}
    onIndexChanged={index => setCurrentIndex(index)}// event
    >
       { clickedresult.map((item, index) => <Details key={index} item={item} index={index}/>)}
    </Swiper>
 
  )
}

export default Swiperpage