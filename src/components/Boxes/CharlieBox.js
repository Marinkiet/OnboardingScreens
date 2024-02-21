import { StyleSheet, TouchableOpacity,Text, View } from 'react-native'
import React from 'react'
import FilledButton from '../Buttons/FilledButton'

const CharlieBox = () => {
  return (
    <View style={styles.boxContainer}>
      <TouchableOpacity onPress={()=>{}}>
        <FilledButton text="On Your First Day" btn btnHeight={60} btnWidth={330} />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{}}>
        <FilledButton text="What's Pineapling?" btn btnHeight={60} btnWidth={330} />
      </TouchableOpacity>

    </View>
  )
}

export default CharlieBox

const styles = StyleSheet.create({
  boxContainer: {

    borderRadius: 25,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
    gap: 10
  },
})