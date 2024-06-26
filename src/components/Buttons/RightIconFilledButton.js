import { StyleSheet, Text, View } from 'react-native'
import React, { Children } from 'react'
import Entypo from 'react-native-vector-icons/Entypo'

const primaryGrey = "#808080";
const secondaryGrey = "#999aa3";
const primaryPurple = "#a36cec";
const secondaryPurple = "#4d5066";
const RightIconFilledButton = (props) => {
  return (
    <View 
    style={[styles.button,{width:props.btnWidth||60,height:props.btnHeight ||50}]}>
        <Text style={styles.buttonText}>{props.text}</Text>
        <Entypo style={styles.buttonIcon}name="chevron-thin-right" size={17} color="white"/>
    </View>
  )
}

export default RightIconFilledButton

const styles = StyleSheet.create({
  button:{
    alignItems:'center',
    // width:btnWidth,
    // height:btnHeight,
    backgroundColor:secondaryPurple,
    borderRadius:40,
    flexDirection:'row',
    // paddingHorizontal:20
    
},
buttonText:{
    flex:1,
    fontSize:20,
    color:"white",
    textAlign:'center',
    fontWeight:'400'
},
buttonIcon:{
    width:'15%',
}
})