import { View,TextInput,StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton'

const CustomInput = ({value,setValue,placeholder,secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.app} value={value} onChangeText={setValue} placeholder={placeholder} secureTextEntry={secureTextEntry}/>
    </View>
   
  )
}
const styles= StyleSheet.create({
    container:{
        width:'100%',
        backgroundColor:'white',
        borderColor:'#e8e8e8',
        borderWidth:1,
        borderRadius:5,
        paddingHorizontal:10,
        marginVertical:10,

    },
    app:{
        width:'100%'

    }
})

export default CustomInput;