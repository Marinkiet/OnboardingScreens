import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, Button, Pressable } from 'react-native'
import React, { useState } from 'react'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import RightIconFilledButton from '../components/Buttons/RightIconFilledButton'
import ClearButton from '../components/ClearButton'
import onBoardinfSteps from '../constants/data';
import Details from './Details'
import { useNavigation } from '@react-navigation/native';
const Home = () => {


    const [screenIndex, setScreenIndex] = useState(0);
    const data = onBoardinfSteps[screenIndex];
    const navigation = useNavigation();
    const onContinue = () => {
        //console.warn("Continue on...")
        const isLastScreen = screenIndex===onBoardinfSteps.length-1;
        if(isLastScreen){
            endOnboardingIntro();
        }else{
            setScreenIndex(screenIndex+1)

        }
    }

    const endOnboardingIntro=()=>{
        setScreenIndex(0);
        // navigation.navigate('Details');
        // console.warn("End of onboarding intro")
        //navigate to actual details screen
    }

    return (
        <SafeAreaView style={styles.page}>
            <View style={styles.stepIdecatorContainer}>
                {
                    onBoardinfSteps.map((step,index)=>(
                        <View key={index} style={[styles.stepIndecator,{backgroundColor:index===screenIndex?"#8dd5aa":"gray"}]} ></View>
                       
                    ))
                  
                }
            
            </View>
            <View style={styles.iconContainer}>
                <FontAwesome6 style={styles.image} name={data.icon} size={100} color='#8dd5aa' />
            </View>

            <View style={styles.bodyContainer}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.description}>{data.description}</Text>
            </View>

            <View style={styles.homeButtonsContainer}>
                <Pressable onPress={endOnboardingIntro}>
                   <ClearButton text="Skip" btnWidth={100} />
                </Pressable>

                <Pressable onPress={onContinue}>
                    <View>
                    {
                       screenIndex === 0 ? (
                        <RightIconFilledButton text="Start" btnHeight={50} btnWidth={250} />
                      ) : screenIndex === onBoardinfSteps.length-1 ? (
                        <RightIconFilledButton text="Finished" btnHeight={50} btnWidth={250} />
                      ) :(
                        <RightIconFilledButton text="Continue" btnHeight={50} btnWidth={250} />
                      )
                    }
                    </View>
                </Pressable>

            </View>

        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#07101e',

    },
    stepIdecatorContainer:{
        flexDirection:'row',
        paddingHorizontal:5,
        marginTop:5,
        alignItems:'center',
        justifyContent:'center'
    },
    stepIndecator:{
        flex:1,
        borderRadius:10,
        height:3,
        backgroundColor:'gray',
        marginHorizontal:3,
        marginTop:10
    },
    iconContainer: {
        flex: 3,
        // backgroundColor:'pink',
        alignItems: 'center',
        justifyContent: 'center',

    },
    bodyContainer: {
        flex: 2,
        // backgroundColor:'yellow',
        //  alignItems:'center',
        paddingBottom: '10%',
        justifyContent: 'flex-end',
        padding: 10

    },
    homeButtonsContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10
        // borderTopRightRadius:30,
        // borderTopLeftRadius:30,
        // backgroundColor:'#8dd5aa',
    },
    image: {

    },
    title: {
        fontSize: 45,
        color: "#f2f2f3",
        fontWeight: '600',
        letterSpacing: 2
    },
    description: {
        marginTop: '3%',
        fontSize: 18,
        color: "#c6c7c9",
        letterSpacing: 1,
        lineHeight: 25
    }
})