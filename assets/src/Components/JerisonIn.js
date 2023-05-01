import { View, Text, Image, StyleSheet,useWindowDimensions} from 'react-native'
import Logo from '../../../assets/images/just.jpg'
import React {useState} from 'react'
import CustomInput from './CustomInput'
import CustomButton from './CustomButton'


const JerisonIn = () => {
  
  const [username, setUsername]=useState();
  const [password, setpassword]=useState();
  const [confirm, confirmPassword]=useState();
  const {height}=useWindowDimensions();
  const onSignInPress =()=>{
    console.log('Succesfully Submitted');
  };
     return( 
     <View>
      <Image source={Logo} style={[styles.thrive, {height: height* 0.3}]} resizeMode="contain"/>
      <Text style={styles.jer}>Saving made Simple!</Text>
      <Text>Create Account</Text>
      <View style={styles.text}>
        <Text style={styles.text1}>Username</Text>
        <CustomInput placeholder="username" value={username} setValue={setUsername}/>
        <Text style={styles.text2}>Password</Text>
        <CustomInput placeholder="password" secureTextEntry={true} value={password} setValue={setpassword}/>
        <Text style={styles.text3}>Confirm Password</Text>
        <CustomInput placeholder="confirm password" secureTextEntry={true} value={confirm} setValue={confirmPassword}/>
 
        <CustomButton text={'Submit'} onPress={onSignInPress}/>
      </View>
    </View>
);
};
const styles = StyleSheet.create({
  thrive:{
    width:100,
    maxWidth:300,
    maxHeight:100,
  },
  jer:{
    color:'red',
  },
  text:{
    color:'black',
  },
  text1:{
    alignItems:'center',
    color:'black',
    fontWeight:'bold'
    padding:5,

  },
  text2:{
    alignItems:'center',
    color:'black',
    fontWeight:'bold'
    padding:5,
 
  },
  text3:{
    alignItems:'center',
    color:'black',
    fontWeight:'bold'
    padding:5,

  }
  
});
export default JerisonIn;