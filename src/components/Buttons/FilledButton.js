import { StyleSheet, Text, View } from 'react-native'




const FilledButton = (props) => {
  return (
    <View 
    style={[styles.button,{width:props.btnWidth||60,height:props.btnHeight ||50}]}><Text style={styles.buttonText}>{props.text}</Text>
    </View>
  )
}

export default FilledButton

const styles = StyleSheet.create({
  button:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#ffd503',
    borderRadius:40
},
buttonText:{
    fontSize:20,
    color:"#07101e",
},
})