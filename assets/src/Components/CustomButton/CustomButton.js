import { Text, Pressable, StyleSheet} from 'react-native'
import React from 'react'

const CustomButton = ({onPress,text}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}
const styles= StyleSheet.create({
    container:{
        backgroundColor:'#3B71F3',
        width:'100%',
        marginVertical:5,
        padding:15,
        borderRadius:8,
        alignContent:'center',
        alignContent:'center',
    },
    text:{
     fontWeight:'bold',
     color:'white',
    }

})

export default CustomButton