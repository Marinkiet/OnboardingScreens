import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'



const ClearButton = (props) => {
  return (
    <View 
    style={[styles.button,{width:props.btnWidth||60,height:props.btnHeight ||50}]}><Text style={styles.buttonText}>{props.text}</Text></View>
  )
}

export default ClearButton

const styles = StyleSheet.create({
  button:{
    alignItems:'center',
    justifyContent:'center',
    borderRadius:40,
    // borderWidth:1,
    // borderColor:'pink'
},
buttonText:{
    fontSize:20,
    color:'#ffd503'
},
})