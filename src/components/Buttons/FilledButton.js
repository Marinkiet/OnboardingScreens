import { StyleSheet, Text, View } from 'react-native'

const primaryGrey = "#808080";
const secondaryGrey = "#999aa3";
const primaryPurple = "#a36cec";
const secondaryPurple = "#4d5066";
const FilledButton = (props) => {
  return (
    <View
      style={[styles.button, { width: props.btnWidth || 60, height: props.btnHeight || 50 }]}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </View>
  )
}

export default FilledButton

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: secondaryPurple,
    borderRadius: 40
  },
  buttonText: {
    fontSize: 20,
    color: "white"
  },
})