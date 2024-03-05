import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import RightIconFilledButton from '../components/Buttons/RightIconFilledButton'
import ClearButton from '../components/Buttons/ClearButton'
import onBoardinfSteps from '../constants/data';
import { useNavigation } from '@react-navigation/native';
import Animated, { BounceIn, BounceOut, BounceOutRight, SlideOutRight } from 'react-native-reanimated';
import { FadeIn, FadeOut,SlideInLeft ,BounceInRight} from 'react-native-reanimated';
import FilledButton from '../components/Buttons/FilledButton'


const yellow="";
const green="";
const OnboardingScreen = () => {

    const [screenIndex, setScreenIndex] = useState(0);
    const data = onBoardinfSteps[screenIndex];
    const navigation = useNavigation();
    const onContinue = () => {
        //console.warn("Continue on...")
        const isLastScreen = screenIndex === onBoardinfSteps.length - 1;
        if (isLastScreen) {
            endOnboardingIntro();
        } else {
            setScreenIndex(screenIndex + 1)

        }
    }

    const endOnboardingIntro = () => {
        setScreenIndex(0);
        navigation.navigate('Home');
        // console.warn("End of onboarding intro")
        //navigate to actual details screen
    }

    return (
        <SafeAreaView style={styles.page}>
            <View style={styles.stepIdecatorContainer}>
                {
                    onBoardinfSteps.map((step, index) => (
                        <View key={index} style={[styles.stepIndecator, { backgroundColor: index === screenIndex ? "#ffd503" : "gray" }]} ></View>

                    ))

                }

            </View>
            <Animated.View  entering={FadeIn.duration(2000)} key={screenIndex} style={styles.bodyContainer}>
                <Animated.View entering={SlideInLeft.duration(1000)} exiting={SlideOutRight.duration(1000)} style={styles.iconContainer}>
                    <FontAwesome6 style={styles.image} name={data.icon} size={100} color='#ffd503' />
                </Animated.View>

                <View style={styles.bodyContainer}>
                    <Animated.Text entering={SlideInLeft.delay(400).duration(1000)} exiting={SlideOutRight.duration(1000)}style={styles.title}>{data.title}</Animated.Text>
                    <Animated.Text entering={SlideInLeft.delay(1000).duration(700)} exiting={SlideOutRight.duration(1000)}style={styles.description}>{data.description}</Animated.Text>
                </View>
            </Animated.View>


            <View style={styles.homeButtonsContainer}>
            {
                            screenIndex < onBoardinfSteps.length-1 ?(
                                <TouchableOpacity onPress={endOnboardingIntro}>
                                <ClearButton text="Skip" btnWidth={100} />
                            </TouchableOpacity>
                            ):(
                                <></>
                            )
              
            }

                <TouchableOpacity onPress={onContinue} >
                    <View >
                        {
                            screenIndex === 0 ? (
                                <RightIconFilledButton text="Start" btnHeight={50} btnWidth={250} />
                            )
                             : screenIndex === onBoardinfSteps.length - 1 ? (
                      
                                    <FilledButton text="Get Started" btnHeight={50} btnWidth={350} />
                                 
                            )
                             : (
                                <RightIconFilledButton text="Continue" btnHeight={50} btnWidth={250} />
                            )
                        }
                    </View>
                </TouchableOpacity>

            </View>


        </SafeAreaView>

    )
}

export default OnboardingScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#67c9d0',
    },
    stepIdecatorContainer: {
        flexDirection: 'row',
        paddingHorizontal: 5,
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    stepIndecator: {
        flex: 1,
        borderRadius: 10,
        height: 3,
        backgroundColor: 'gray',
        marginHorizontal: 3,
        marginTop: 10
    },
    iconContainer: {
        flex: 3,
        // backgroundColor:'pink',
        alignItems: 'center',
        justifyContent: 'flex-end',

    },
    bodyContainer: {
        flex: 5,
        justifyContent: 'flex-end',
        padding:10

    },
    homeButtonsContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        // borderTopRightRadius:30,
        // borderTopLeftRadius:30,
        // backgroundColor:'red',
        justifyContent: 'center',
    },
    image: {

    },
    title: {
        fontSize: 35,
        color: "#060606",
        fontWeight: '600',
        letterSpacing: 2,

    },
    description: {
        marginTop: '3%',
        fontSize: 18,
        color: "white",
        letterSpacing: 1,
        lineHeight: 25
    },
    bottomButtom:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'pink'

    }
})