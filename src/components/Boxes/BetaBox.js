import { Pressable,TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FilledButton from '../Buttons/FilledButton'
const BetaBox = () => {
  return (
    <View style={styles.boxContainer}>
                <View>
                    <Text style={styles.boxTextTitle}>Employee Count</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.boxText}>144</Text>
                    <TouchableOpacity onPress={()=>{}}>
                    <FilledButton btnHeight={50} btnWidth={150} text="Onboarding 8" />
                    </TouchableOpacity>
                 
                </View>
            </View>
  )
}

export default BetaBox

const styles = StyleSheet.create({

    boxContainer: {
        backgroundColor: '#f0f0f0',
        width: '90%',
        height: '55%',
        borderRadius:25,
        justifyContent:'center',
        alignSelf:'center',
        marginTop:10
    },
    box: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-around',
        paddingTop:10
    },
    boxTextTitle:{
        fontWeight:'500',
        marginLeft:35,
        fontSize:14


    },
    boxText: {
        fontSize: 30,
        fontWeight: '500'
    }
})