import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import BetaBox from './Boxes/BetaBox';
import CharlieBox from './Boxes/CharlieBox';

const green = "#67c9d0";
const yellow = "#ffd503";
const AlphaCard = (props) => {

    return (
        <View style={styles.container}>
            {/* header text icon */}
            <View style={styles.headerContainer}>
                <View style={styles.headerTextContaner}>
                    <Text style={styles.headerText}>{props.headingText}</Text>
                </View>
                <View style={styles.headerIconContainer}>
                    <Feather name="arrow-right" size={25} color="white" />
                </View>
            </View>
            {/* ActionCompont */}
            <View style={styles.warningsConatainer}>
                <View style={styles.warningsWrapper}>
                    <AntDesign name="warning" color="red" size={20} />
                    <Text style={styles.warningText}>1</Text>
                </View>
                <View style={styles.warningsWrapper}>
                    <AntDesign name="exclamationcircleo" color="orange" size={20} />
                    <Text style={styles.warningText}>0</Text>
                </View>


            </View>
            {/* BetaCardComponent */}
            {
                props.boxType == "beta" ? (<BetaBox />) :
                    props.boxType == "charlie" ? (<CharlieBox />) :
                        (<></>)
            }

        </View>
    )
}

export default AlphaCard

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        height: 250,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 30,
        padding: 5,
        marginBottom: 5,

    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerTextContaner: {
        marginTop: 20,
        marginLeft: 15
    },
    headerText: {
        fontSize: 20,
        fontWeight: '600'
    },
    headerIconContainer: {
        backgroundColor: green,
        padding: 10,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'

    },
    warningsConatainer: {
        flexDirection: 'row',
        paddingLeft: 20,
        // backgroundColor:'pink',
        gap: 30
    },
    warningsWrapper:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        
    },
    warningText:{
        fontWeight:'600',
        fontSize:18,
        paddingHorizontal:5
    }
})