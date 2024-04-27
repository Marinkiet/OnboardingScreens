import { Pressable,TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FilledButton from '../Buttons/FilledButton'


const primaryGrey = "#808080";
const secondaryGrey = "#999aa3";
const primaryPurple = "#a36cec";
const secondaryPurple = "#4d5066";
const backgroundGrey= "#f5f4ff2b";
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
        backgroundColor: backgroundGrey,
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
        fontSize:14,
        color:"white"


    },
    boxText: {
        fontSize: 30,
        fontWeight: '500',
        color:"white"
    }
})